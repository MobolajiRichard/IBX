import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  Touchable,
  TouchableWithoutFeedback,
  TouchableNativeFeedback
} from 'react-native';
import {RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import {FilteredNewsCard, NewsFeedcard} from '../components';
import {COLORS, ICONS} from '../constant';
const hero = require('../../assets/images/hero.png');

const Search: FC<NativeStackScreenProps<RootStackParamList, 'search'>> = ({
  navigation,
}) => {
  const [searchText, setSearchText] = useState('');
  const [filterOptions, setFilterOptons] = useState('');
  const [filterActive, setFilterActive] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const filters = [
    'Healthy',
    'Technology',
    'Finance',
    'Arts',
    'Sports',
    'Politics',
    
  ];

  const sortOptions = [
    'Recommended',
    'Latest',
    'Most Viewed',
    'Channel',
    'Following',
  ];

  const onFilterSelect = () => {
    setFilterActive(true);
    setShowFilterModal(true);
  };

  const onSave = () => {
    setShowFilterModal(false)
    setFilterActive(false)
  }

  const onSubmit = () => {

  }

  console.log(searchText)
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
              <TextInput onChangeText={setSearchText} placeholder="Dogecoin to the moon.." />
              <Pressable
                onPress={() => navigation.navigate('Home')}
                style={styles.close}>
                <ICONS.Close />
              </Pressable>
            </View>
          </View>
          {/* filtered news card */}
          {/* filter buttons */}
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:30}}>
            <Pressable
              onPress={onFilterSelect}
              style={[
                styles.filterButtons,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: filterActive ? COLORS.primary : 'white',
                  borderWidth: filterActive ? 0 : 1,
                },
              ]}>
              <ICONS.Filter active={filterActive} />
              <Text
                style={[
                  styles.filterButtonTexts,
                  {marginLeft: 6, color: filterActive ? 'white' : 'black'},
                ]}>
                Filter
              </Text>
            </Pressable>
            <FlatList
              data={filters}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => setFilterOptons(item)}
                  style={[
                    styles.filterButtons,
                    {
                      backgroundColor:
                        filterOptions === item ? COLORS.primary : 'white',
                      borderWidth: filterOptions === item ? 0 : 1,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.filterButtonTexts,
                      {color: filterOptions === item ? 'white' : 'black'},
                    ]}>
                    {item}
                  </Text>
                </Pressable>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}

            />
          </View>
          {/* Search Results */}
          <Text style={styles.resultText}>About 11,130,000 results for <Text style={{fontWeight:'700'}}>COVID New Variant</Text></Text>
          
           <View style={{flex:1}}>
           <FlatList
        data={filters}
        renderItem={({item}) => <FilteredNewsCard />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop:10, paddingBottom:30}}
        keyExtractor={(item) => item.title}

      />
            </View>             
          
          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showFilterModal}
            onRequestClose={() => setShowFilterModal(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.filterText}>Filter</Text>
                <View style={styles.reset}>
                  <ICONS.Delete />
                  <Text style={[styles.filterButtonTexts, {marginLeft: 5}]}>
                    Reset
                  </Text>
                </View>
              </View>
              <View>
              <Text style={styles.sortBy}>Sort By</Text>
              <View style={styles.sortOptions}>
                {sortOptions.map((s, i) => (
                  <Pressable
                    style={[styles.filterButtons, {marginTop:10}]}
                    key={i}
                    onPress={() => setShowFilterModal(false)}>
                    <Text style={styles.filterButtonTexts}>{s}</Text>
                  </Pressable>
                ))}
              </View>
              </View>
              <Pressable onPress={onSave} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>SAVE</Text>
              </Pressable>
            </View>
          </Modal>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    paddingHorizontal: '4%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.grey,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  close: {
    width: 15,
    height: 15,
  },

  latest: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  latestNews: {
    fontFamily: 'New York',
    fontSize: 18,
    fontWeight: '700',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    fontFamily: 'Nunito',
    fontSize: 12,
    color: COLORS.secondary,
    marginRight: 10,
    fontWeight: '600',
  },
  filterButtons: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.grey,
    height: 32,
    marginRight: 8,
  },
  filterButtonTexts: {
    fontSize: 12,
    fontFamily: 'Nunito',
    fontWeight: '600',
  },
  buttonTab: {
    flexDirection: 'row',
    width: '77%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 32,
    height: 66,
    paddingHorizontal: 40,
    paddingTop: 16,
    paddingBottom: 8,
    position: 'absolute',
    bottom: '5%',
    left: '15%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 100},
    shadowRadius: 20,
  },
  buttonTabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTabIconText: {
    fontSize: 10,
    fontFamily: 'Nunito',
    fontWeight: '400',
  },
  
  resultText:{
    fontFamily:'Nunito',
    fontSize:14
  },


  modalContainer: {
    backgroundColor: 'white',
    paddingHorizontal: '4%',
    marginTop: 'auto',
    height: '38.8%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    paddingVertical:'5%',
    justifyContent:'space-evenly'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterText:{
    fontFamily:'Nunito',
    fontWeight:'700',
    fontSize:22
  },
  reset: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'black',
    height: 32,
    marginRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  sortBy:{
  fontFamily:'Nunito',
  fontSize:14,
  fontWeight:'600',
  marginLeft:10
  },
  sortOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  saveButton:{
    backgroundColor:COLORS.primary,
    height:48,
    borderRadius:24,
    alignItems:'center',
    justifyContent:'center',
    
  },
  saveButtonText:{
    fontSize:16,
    fontWeight:'800',
    color:'white',
    fontFamily:'Nunito'
  }
});

export default Search;
