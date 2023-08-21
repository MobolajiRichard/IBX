import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import {RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {COLORS, ICONS} from '../constant';
import {useAppSelector} from '../../hooks/reduxHook';
const hero = require('../../assets/images/hero.png');
import LinearGradient from 'react-native-linear-gradient';


const NewsFeeds: FC<NativeStackScreenProps<RootStackParamList, 'news'>> = ({
  navigation,
  route,
}) => {
  const latestNews = useAppSelector(state => state.news.latestNews);
  const {newsId} = route.params;
  const article = latestNews?.find(news => news.title === newsId);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Pressable onPress={() => navigation.goBack()} style={styles.navigation}>
        <ICONS.Back />
      </Pressable>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: article?.urlToImage}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.content}>
        <LinearGradient colors={['rgba(192, 192, 192, 0.92)', 'rgba(245, 245, 245, 1)']} style={styles.details}>
          <Text style={styles.date}>{article?.publishedAt.split('T')[0]}</Text>
          <Text style={styles.title}>{article?.title}</Text>
          <Text style={styles.publisher}>Published by {article?.author}</Text>
        </LinearGradient>
       
        <Pressable
          onPress={() => Alert.alert('Added to Favorites')}
          style={styles.favorite}>
          <ICONS.FAB />
        </Pressable>
        <View style={{marginTop: '20%'}}></View>
        <ScrollView style={styles.newsContainer}>
          <Text style={styles.news}>{article?.content}</Text>
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
    // backgroundColor: 'rgba(192, 192, 192, 0.9)',
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
    color:COLORS.textBlack
  },
  date: {
    fontFamily: 'Nunito-Semibold',
    fontWeight: '600',
    fontSize: 12,
    color:COLORS.textBlack
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
    fontFamily:'Nunito-Semibold',
    fontSize:14,
    color:COLORS.textBlack
    },
});

export default NewsFeeds;
