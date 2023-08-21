import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
  Modal,
} from 'react-native';
import {RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import {ICONS, COLORS} from '../constant';
import {HeroCard, FilteredNewsCard} from '../components';

const HomeScreen: FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({
  navigation,
}) => {
  const [filter, setFilter] = useState('Healthy');
  const [tab, setTab] = useState('home');
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const filters = [
    'Healthy',
    'Technology',
    'Finance',
    'Arts',
    'Sports',
    'Politics',
  ];

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput placeholder="Dogecoin to the moon.." />
        </View>
        <View style={styles.notification}>
          <ICONS.Notification />
        </View>
        <View></View>
      </View>
      <View style={styles.latest}>
        <Text style={styles.latestNews}>Latest News</Text>
        <Pressable
            onPress={() => navigation.navigate('news', {newsId:'4'})}
        //   onPress={() => setOpenSearchModal(true)}
          style={styles.seeAllContainer}>
          <Text style={styles.seeAll}>See All</Text>
          <ICONS.ForwardArrow />
        </Pressable>
      </View>

      {/* Hero */}
      <View>
        <FlatList
          data={filters}
          renderItem={({item}) => <HeroCard />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* filter buttons */}
      <View>
        <FlatList
          data={filters}
          renderItem={({item}) => (
            <Pressable
              onPress={() => setFilter(item)}
              style={[
                styles.filterButtons,
                {
                  backgroundColor: filter === item ? COLORS.primary : 'white',
                  borderWidth: filter === item ? 0 : 1,
                },
              ]}>
              <Text
                style={[
                  styles.filterButtonTexts,
                  {color: filter === item ? 'white' : 'black'},
                ]}>
                {item}
              </Text>
            </Pressable>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginVertical: 20}}
        />
      </View>

      {/* filtered news card */}
      <FlatList
        data={filters}
        renderItem={({item}) => <FilteredNewsCard />}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.buttonTab}>
        <Pressable onPress={() => setTab('home')} style={styles.buttonTabIcon}>
          <ICONS.Home active={tab === 'home'} />
          <Text
            style={[
              styles.buttonTabIconText,
              {color: tab === 'home' ? 'black' : '#A6A6A6'},
            ]}>
            Home
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setTab('favorite')}
          style={styles.buttonTabIcon}>
          <ICONS.Favorite active={tab === 'favorite'} />
          <Text
            style={[
              styles.buttonTabIconText,
              {color: tab === 'favorite' ? 'black' : '#A6A6A6'},
            ]}>
            Favorite
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setTab('profile')}
          style={styles.buttonTabIcon}>
          <ICONS.Profile active={tab === 'profile'} />
          <Text
            style={[
              styles.buttonTabIconText,
              {color: tab === 'profile' ? 'black' : '#A6A6A6'},
            ]}>
            Profile
          </Text>
        </Pressable>
      </View>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={openSearchModal}
        
        onRequestClose={() => setOpenSearchModal(false)}>
            <View style={{flex:0.5, backgroundColor:'red', padding:60, marginTop:'auto'}}>
            <Text>ji</Text>
            <Pressable onPress={() =>setOpenSearchModal(false)}>
                <Text>insshsl</Text>
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
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: COLORS.grey,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginRight: 20,
  },
  notification: {
    width: 30,
    height: 30,
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
});

export default HomeScreen;
