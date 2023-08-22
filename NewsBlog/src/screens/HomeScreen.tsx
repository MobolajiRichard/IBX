import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {RootStackParamList, NewsArticles} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState, useEffect} from 'react';
import {ICONS, COLORS} from '../constant';
import {HeroCard, FilteredNewsCard, FilterButtons} from '../components';
import {useAppDispatch} from '../../hooks/reduxHook';
import {storeCategoryNews, storeLatestNews} from '../../redux/NewsSlice';

const HomeScreen: FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({navigation}) => {

  //defining states for holding variables
  const [category, setCategory] = useState('health');
  const [tab, setTab] = useState('home');
  const [latestNews, setLatestNews] = useState<NewsArticles[]>([]);
  const [categoryArticles, setCategoryArticles] = useState<NewsArticles[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();

  // available categories as provided by newsapi docs
  const categories = [
    {value: 'health', key: 'Health'},
    {value: 'technology', key: 'Technology'},
    {value: 'business', key: 'Finance'},
    {value: 'entertainment', key: 'Art'},
    {value: 'general', key: 'General'},
    {value: 'science', key: 'Science'},
    {value: 'sports', key: 'Sports'},
  ];

  // function to fetch the latest news
  const fetchLatestNews = async () => {
    setIsLoading(true);
    setIsError(false)
    try {
      const latestNews = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=23b71f7eadcc410f839e666ab8eac26f',
      );
      const latestNewsData = await latestNews.json();
      setLatestNews(latestNewsData.articles);
      //onsuccess store the data received using redux
      dispatch(storeLatestNews(latestNewsData.articles));
    } catch (error) {
      setIsError(true);
      console.log({error})
    } finally {
      setIsLoading(false);
      setIsError(false)
    }
  };

  // function to fetch the news based on categories
  const fetchCategoryNews = async () => {
    try {
      const categoryNews = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=23b71f7eadcc410f839e666ab8eac26f`,
      );
      const categoryNewsData = await categoryNews.json();
      setCategoryArticles(categoryNewsData.articles);
      //onsuccess store the data received using redux
      dispatch(storeCategoryNews(categoryNewsData.articles));
    } catch (error) {
      console.log({error})
    }
  };

  //fetch latest news once on screen mount
  useEffect(() => {
    fetchLatestNews();
  }, []);

  //fetch the category news whenever the category state changes
  useEffect(() => {
    fetchCategoryNews();
  }, [category]);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        {/* search and notification header */}
        <View style={styles.searchContainer}>
          <Pressable
            onPress={() => navigation.navigate('search')}
            style={styles.searchBox}>
            <Text style={{flex: 1, color: '#818181'}}>
              Dogecoin to the moon...
            </Text>
            <ICONS.Search />
          </Pressable>
          <View style={styles.notification}>
            <ICONS.Notification />
          </View>
          <View></View>
        </View>

        {/* see all */}
        <View style={styles.latest}>
          <Text style={styles.latestNews}>Latest News</Text>
          <Pressable
            onPress={() => navigation.navigate('feed')}
            style={styles.seeAllContainer}>
            <Text style={styles.seeAll}>See All</Text>
            <ICONS.ForwardArrow />
          </Pressable>
        </View>
        {
          isLoading && (
            <View style={styles.isLoading}>
              <ActivityIndicator/>
              <Text>Loading...</Text>
            </View>

          )
        }
        {
          isError && (
            <View style={styles.isLoading}>
              <Text style={{color:COLORS.primary}}>Error</Text>
              <Text>An error occurred... Please try again</Text>
            </View>

          )
        }
        {/* Latest News */}
        <View>
          <FlatList
            data={latestNews}
            renderItem={({item}) => <HeroCard data={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.title + index}
          />
        </View>

       

        {/* filter buttons */}
        <View>
          <FlatList
            data={categories}
            renderItem={({item}) => (
              <FilterButtons
                item={item}
                category={category}
                onPress={() => setCategory(item.value)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginVertical: 20}}
            keyExtractor={item => item.key}
          />
        </View>

        {/* filtered news card */}
        <FlatList
          data={categoryArticles}
          renderItem={({item}) => (
            <FilteredNewsCard screen="category" data={item} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.title + index}
        />

        {/* bottom tab */}
        <View style={styles.bottomTabContainer}>
          <View style={styles.divider}></View>
          <View style={styles.bottomTab}>
            {/* Home tab */}
            <Pressable
              onPress={() => setTab('home')}
              style={styles.bottomTabIcon}>
              <ICONS.Home active={tab === 'home'} />
              <Text
                style={[
                  styles.bottomTabIconText,
                  {color: tab === 'home' ? 'black' : '#A6A6A6'},
                ]}>
                Home
              </Text>
            </Pressable>

            {/* Favorite tab */}
            <Pressable
              onPress={() => setTab('favorite')}
              style={styles.bottomTabIcon}>
              <ICONS.Favorite active={tab === 'favorite'} />
              <Text
                style={[
                  styles.bottomTabIconText,
                  {color: tab === 'favorite' ? 'black' : '#A6A6A6'},
                ]}>
                Favorite
              </Text>
            </Pressable>

            {/* Profile tab */}
            <Pressable
              onPress={() => setTab('profile')}
              style={styles.bottomTabIcon}>
              <ICONS.Profile active={tab === 'profile'} />
              <Text
                style={[
                  styles.bottomTabIconText,
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
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.grey,
    paddingLeft: 16,
    borderRadius: 20,
    marginRight: 20,
    height: 40,
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
    color: 'black',
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
  bottomTabContainer: {
    width: '77%',
    alignItems: 'center',
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
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 30,
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  bottomTabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabIconText: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    color: 'black',
  },
  modalContainer: {
    backgroundColor: 'red',
    padding: 60,
    marginTop: 'auto',
    height: '38.8%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  divider: {
    height: 4,
    backgroundColor: '#e0e0e0',
    width: 32,
    borderRadius: 8,
    marginBottom: 10,
  },
  isLoading:{
      height: 240,
      backgroundColor: COLORS.grey,
      borderRadius: 8,
      width: '100%',
      marginRight: 10,
      alignItems:'center',
      justifyContent:'center'

  }
});

export default HomeScreen;
