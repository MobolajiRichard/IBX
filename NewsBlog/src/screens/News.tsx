import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
  Alert
} from 'react-native';
import {NewsArticles, RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useEffect, useState} from 'react';
import {COLORS, ICONS} from '../constant';
import {useAppSelector} from '../../hooks/reduxHook';
import LinearGradient from 'react-native-linear-gradient';
import {useCallback} from 'react';

const News: FC<NativeStackScreenProps<RootStackParamList, 'news'>> = ({
  navigation,
  route,
}) => {
  //state to hold the news to view
  const [article, setArticle] = useState<NewsArticles | null>();

  //retrieving the params passed to the routes
  //newsId - To identify the news selected
  //screen - To know the from where the news was selected from
  const {newsId, screen} = route.params;

  //retrieving the right data from redux based on the screen it was selected from
  //and storing it in state
  const getDataType = () => {
    if (screen === 'search') {
      return 'searchResultNews';
    } else if (screen === 'category') {
      return 'categoryNews';
    } else {
      return 'latestNews';
    }
  };
  const articles = useAppSelector(state => state.news[getDataType()]);

  useEffect(() => {
    //Finding the particular news gotten from the store based on the newsId
    let article = articles?.find(news => news.title === newsId);
    setArticle(article);
  }, []);

  //get paragraphs
  const paragraphs = article?.content?.split('\n');

  return (
    <View style={styles.container}>
      {/* change the status bar text color to white */}
      <StatusBar barStyle={'light-content'} />

      {/* Back Button */}
      <Pressable onPress={() => navigation.goBack()} style={styles.navigation}>
        <ICONS.Back />
      </Pressable>

      {/* News cover image */}
      <View style={styles.imageContainer}>
        <Image
          source={{uri: article?.urlToImage}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        {/* news details box */}
        <LinearGradient
          colors={['rgba(192, 192, 192, 0.92)', 'rgba(245, 245, 245, 1)']}
          style={styles.details}>
          <Text style={styles.date}>{article?.publishedAt.split('T')[0]}</Text>
          <Text style={styles.title}>{article?.title}</Text>
          <Text style={styles.publisher}>Published by {article?.author}</Text>
        </LinearGradient>

        {/* favorite action button */}
        <Pressable
          onPress={() => Alert.alert('Added to Favorites')}
          style={styles.favorite}>
          <ICONS.FAB />
        </Pressable>
        <View style={{marginTop: '20%'}}></View>

        {/* news content */}
        <ScrollView style={styles.newsContainer}>
          {paragraphs?.map((p, i) =>
            i === 0 ? (
              <Text key={i} style={styles.news}>
                <Text style={styles.capitalize}>{p.split(' ')[0]} </Text>
                {p.split(' ').slice(1).join(' ')}
              </Text>
            ) : (
              <Text key={i} style={styles.news}>
                {p}
              </Text>
            ),
          )}
          {!paragraphs && (
            <Text style={[styles.news, {textAlign: 'center'}]}>No Content</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  navigation: {
    position: 'absolute',
    backgroundColor: 'rgba(245, 245, 245, 0.5)',
    zIndex: 999,
    top: '6.4%',
    left: '4%',
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    flex: 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    backgroundColor: 'white',
    flex: 0.5,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginTop: -40,
  },
  details: {
    height: '35%',
    width: '83%',
    borderRadius: 16,
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 24,
    position: 'absolute',
    left: '8.5%',
    top: '-18%',
  },
  publisher: {
    fontFamily: 'Nunito-Black',
    fontWeight: '800',
    fontSize: 10,
    color: COLORS.textBlack,
  },
  title: {
    fontFamily: 'NewYorkMedium-Bold',
    fontSize: 16,
    lineHeight: 17.2,
    width: '90%',
    color: COLORS.textBlack,
  },
  date: {
    fontFamily: 'Nunito-Semibold',
    fontWeight: '600',
    fontSize: 12,
    color: COLORS.textBlack,
  },
  favorite: {
    position: 'absolute',
    bottom: '12.8%',
    right: '7%',
    zIndex: 99,
  },
  newsContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  news: {
    textAlign: 'justify',
    fontFamily: 'Nunito-Semibold',
    fontSize: 14,
    color: COLORS.textBlack,
    marginBottom: 20,
  },
  capitalize: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 14,
    color: '#2e0505',
    textTransform: 'capitalize',
  },
});

export default News;
