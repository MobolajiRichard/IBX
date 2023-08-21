import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constant';
import {useAppSelector} from '../../hooks/reduxHook';
import {useNavigation} from '@react-navigation/native';
const hero = require('../../assets/images/hero.png');

const NewsFeedcard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{uri: data?.urlToImage}}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.date}>{data?.publishedAt?.split('T')[0]}</Text>
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.description}>
        {data?.content?.substring(0, 400) + '...'}
        <Pressable
          onPress={() => navigation.navigate('news', {newsId: data?.title})}>
          <Text style={[styles.description, {color: COLORS.secondary}]}>
            Read More
          </Text>
        </Pressable>
      </Text>
      <Text style={styles.publisher}>Published by {data?.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '3.5%',
    marginBottom: 30,
  },
  image: {
    height: 128,
    width: '100%',
    borderRadius: 8,
  },
  date: {
    fontFamily: 'Nunito-Light',
    fontSize: 12,
    fontWeight: '300',
    marginVertical: 10,
    color:COLORS.textBlack
  },
  title: {
    fontFamily: 'NewYorkMedium-Semibold',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    color:'#121212'
  },
  description: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    lineHeight: 20,
    color:COLORS.textBlack
  },
  publisher: {
    fontFamily: 'Nunito-Bold',
    color:'rgba(46, 5, 5, 1)',
    fontSize: 12,
    marginTop: 10,
  },
});

export default NewsFeedcard;
