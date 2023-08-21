import {Text, View, StyleSheet, ImageBackground, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constant';
import {useNavigation} from '@react-navigation/native';
const hero = require('../../assets/images/hero.png');

const HeroCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('news', {newsId: data?.title})}>
      <ImageBackground
        source={{uri: data?.urlToImage}}
        imageStyle={{borderRadius: 8}}
        resizeMode="cover"
        style={styles.container}>
        <LinearGradient
          colors={['rgba(98, 98, 98, 0)', 'rgba(0, 0, 0, 0.8)']}
          style={styles.wrapper}>
          <View>
            <Text style={styles.author}>by {data?.author}</Text>
            <Text style={styles.title}>
              {data?.title?.length > 70
                ? data?.title?.substring(0, 70) + '...'
                : data?.title}
            </Text>
          </View>

          <Text style={styles.desc}>
            {data?.description ? data?.description?.substring(0, 100) + '...' : ''}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 240,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    width: 321,
    marginRight: 10,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    // backgroundColor:'rgba(255, 255, 255, 0)',
    padding: '3.5%',
    paddingTop: 80,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  author: {
    fontFamily: 'Nunito',
    color: 'white',
    fontSize: 10,
    fontWeight: '800',
  },
  title: {
    fontFamily: 'New York',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20.6,
    width: '90%',
  },
  desc: {
    fontFamily: 'Nunito',
    color: 'white',
    fontSize: 10,
    fontWeight: '400',
  },
});

export default HeroCard;
