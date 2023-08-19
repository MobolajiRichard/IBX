import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constant';
const hero = require('../../assets/images/hero.png');

const NewsFeedcard = () => {
  const text = `A World Health Organization official said Monday it is reclassifying the highly contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become aA World Health Organization official said Monday it is reclassifying the highl contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become a...Read MorevvvA World Healt Organization official said Monday it is reclassifying the highly contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become a...Read MoreA World Health  Organization official said Monday it is reclassifying the highly contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become a...Read MorevvA World Health  Organization official said Monday it is reclassifying the highly contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become a...Read More`;
  return (
    <View style={styles.container}>
      <Image source={hero} style={styles.image} resizeMode="cover" />
      <Text style={styles.date}>Monday, 10 May 2021</Text>
      <Text style={styles.title}>
        WHO classifies triple-mutant Covid variant from India as global health
        risk
      </Text>
      <Text style={styles.description}>
        {text.substring(0, 400) + '...'}
        <Pressable>
          <Text style={[styles.description, {color: COLORS.secondary}]}>
            Read More
          </Text>
        </Pressable>
      </Text>
      <Text style={styles.publisher}>Published by Jamal Junior</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '3.5%',
    marginBottom:30
  },
  image: {
    height: 128,
    width: '100%',
    borderRadius: 8,
  },
  date: {
    fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '300',
    marginVertical: 10,
  },
  title: {
    fontFamily: 'New York',
    fontSize: 14,
    fontWeight: '600',
    marginBottom:10
  },
  description: {
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    // marginVertical: 10,m7y
  },
  publisher: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: 12,
    marginTop:10
  },
  
});

export default NewsFeedcard;
