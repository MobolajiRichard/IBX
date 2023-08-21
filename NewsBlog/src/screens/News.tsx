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
} from 'react-native';
import {RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {ICONS} from '../constant';
const hero = require('../../assets/images/hero.png');

const NewsFeeds: FC<NativeStackScreenProps<RootStackParamList, 'news'>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Pressable onPress={() => navigation.goBack()} style={styles.navigation}>
        <ICONS.Back />
      </Pressable>
      <View style={styles.imageContainer}>
        <Image source={hero} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.content}>
        <View style={styles.details}>
          <Text style={styles.date}>Sunday, 9 May 2021 </Text>
          <Text style={styles.title}>
            Crypto investors should be prepared to lose all their money, BOE
            governor says
          </Text>
          <Text style={styles.publisher}>Published by Ryan Browne</Text>
        </View>
        <View style={styles.favorite}>
          <ICONS.FAB />
        </View>
        <View style={{marginTop:'20%'}}></View>
        <ScrollView style={styles.newsContainer}>
          <Text style={styles.news}>
            LONDON — Cryptocurrencies “have no intrinsic value” and people who
            invest in them should be prepared to lose all their money, Bank of
            England Governor Andrew Bailey said. Digital currencies like
            bitcoin, ether and even dogecoin have been on a tear this year,
            reminding some investors of the 2017 crypto bubble in which bitcoin
            blasted toward $20,000, only to sink as low as $3,122 a year later.
            Asked at a press conference Thursday about the rising value of
            cryptocurrencies, Bailey said: “They have no intrinsic value. That
            doesn’t mean to say people don’t put value on them, because they can
            have extrinsic value. But they have no intrinsic value.” “I’m going
            to say this very bluntly again,” he added. “Buy them only if you’re
            prepared to lose all your money.” Bailey’s comments echoed a similar
            warning from the U.K.’s Financial Conduct Authority. “Investing in
            cryptoassets, or investments and lending linked to them, generally
            involves taking very high risks with investors’ money,” the
            financial services watchdog said in January. “If consumers invest in
            these types of product, they should be prepared to lose all their
            money.” Bailey, who was formerly the chief executive of the FCA, has
            long been a skeptic of crypto. In 2017, he warned: “If you want to
            invest in bitcoin, be prepared to lose all your money.”
          </Text>
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
    backgroundColor: 'rgba(245, 245, 245, 0.8)',
    borderRadius: 16,
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 24,
    position: 'absolute',
    left: '8.5%',
    top: '-18%',
  },
  publisher: {
    fontFamily: 'Nunito',
    fontWeight: '800',
    fontSize: 10,
  },
  title: {
    fontFamily: 'New York',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 17.2,
    width: '90%',
  },
  date: {
    fontFamily: 'Nunito',
    fontWeight: '600',
    fontSize: 12,
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
  },
});

export default NewsFeeds;
