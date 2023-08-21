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
  Alert,
  ActivityIndicator,
} from 'react-native';
import {RootStackParamList, NewsArticles} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState, useEffect} from 'react';
import {ICONS, COLORS} from '../constant';
import {HeroCard, FilteredNewsCard} from '../components';
import { useAppDispatch } from '../../hooks/reduxHook';
import { storeCategoryNews, storeLatestNews } from '../../redux/NewsSlice';

const HomeScreen: FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({
  navigation,
}) => {
  const [category, setCategory] = useState('Health');
  const [tab, setTab] = useState('home');
  const [latestNews, setLatestNews] = useState<NewsArticles[]>([]);
  const [categoryArticles, setCategoryArticles] = useState<NewsArticles[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch()
  const categories = [
    {value:'health',key:'Health'},
    {value:'technology',key:'Technology'},
    {value:'business',key:'Finance'},
    {value:'entertainment',key:'Art'},
    {value:'general',key:'General'},
    {value:'science',key:'Science'},
    {value:'sports',key:'Sports'},
  ];
  const fetchLatestNews = async () => {
    setIsLoading(true);
    try {
      const latestNews = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=df5965de7b3e4ec3a93468fd791777fd',
      );
      const latestNewsData = await latestNews.json()
      setLatestNews(latestNewsData.articles);
      dispatch(storeLatestNews(latestNewsData.articles))
    } catch (error) {
      setIsError(true);
      Alert.alert('error')
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategoryNews = async () =>{
    try {
      const categoryNews = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=df5965de7b3e4ec3a93468fd791777fd`,
      );
      const categoryNewsData = await categoryNews.json();
      setCategoryArticles(categoryNewsData.articles)
      dispatch(storeCategoryNews(categoryNewsData.articles))
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchLatestNews();
  }, []);

  useEffect(() => {
    fetchCategoryNews()
  }, [category])

  console.log({latestNews})


  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
 <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Pressable
            onPress={() => navigation.navigate('search')}
            style={styles.searchBox}>
            <Text style={{flex:1, color:'#818181'}}>Dogecoin to the moon...</Text>
          <ICONS.Search/>
          </Pressable>
          <View style={styles.notification}>
            <ICONS.Notification />
          </View>
          <View></View>
        </View>
        <View style={styles.latest}>
          <Text style={styles.latestNews}>Latest News</Text>
          <Pressable
            onPress={() => navigation.navigate('feed')}
            style={styles.seeAllContainer}>
            <Text style={styles.seeAll}>See All</Text>
            <ICONS.ForwardArrow />
          </Pressable>
        </View>

        {/* Hero */}
        <View>
          <FlatList
            data={latestNews}
            renderItem={({item}) => <HeroCard data={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.title}
          />
        </View>

        {/* filter buttons */}
        <View>
          <FlatList
            data={categories}
            renderItem={({item}) => (
              <Pressable
                onPress={() => setCategory(item.value)}
                style={[
                  styles.filterButtons,
                  {
                    backgroundColor: category === item.value ? COLORS.primary : 'white',
                    borderWidth: category === item.value ? 0 : 1,
                  },
                ]}>
                <Text
                  style={[
                    styles.filterButtonTexts,
                    {color: category === item.value ? 'white' : 'black'},
                  ]}>
                  {item.key}
                </Text>
              </Pressable>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginVertical: 20}}
            keyExtractor={(item) => item.key}
          />
        </View>

        {/* filtered news card */}
        <FlatList
          data={categoryArticles}
          renderItem={({item}) => <FilteredNewsCard screen='home' data={item}/>}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.title}
        />

        <View style={styles.buttonTab}>
          <View style={{height:4, backgroundColor:'#e0e0e0', width:32, borderRadius:8, marginBottom:10}}></View>
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
          <Pressable
            onPress={() => setTab('home')}
            style={styles.buttonTabIcon}>
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
          
        </View>
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
    alignItems:'center',
    borderWidth: 1,
    borderColor: COLORS.grey,
    // paddingVertical: 8,
    paddingLeft: 16,
    borderRadius: 20,
    marginRight: 20,
    height:40
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
    fontFamily: 'NewYorkMedium-Bold',
    fontSize: 18,
    color:'black'
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    color: COLORS.secondary,
    marginRight: 10,
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
    fontFamily: 'Nunito-SemiBold',
    color:'black'
  },
  buttonTab: {
    width: '77%',
    alignItems:'center',
    backgroundColor: 'white',
    borderRadius: 32,
    height: 66,
    paddingHorizontal: 40,
    paddingTop: 6,
    paddingBottom: 8,
    position: 'absolute',
    bottom: '5%',
    left: '15%',
    shadowColor: '#8c8c8c',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity:0.3,
    shadowRadius: 20,
    elevation:30
  },
  buttonTabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTabIconText: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    color:'black'
  },
  modalContainer: {
    backgroundColor: 'red',
    padding: 60,
    marginTop: 'auto',
    height: '38.8%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});

export default HomeScreen;
