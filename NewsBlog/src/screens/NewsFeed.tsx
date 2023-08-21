import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import {RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {NewsFeedcard} from '../components';
import { useAppSelector } from '../../hooks/reduxHook';

const NewsFeeds: FC<
  NativeStackScreenProps<RootStackParamList, 'feed'>
> = () => {

 const latestNews = useAppSelector(state => state.news.latestNews)

  const filters = [
    'Healthy',
    'Technology',
    'Finance',
    'Arts',
    'Sports',
    'Politics',
  ];

  console.log(latestNews, 'feed')
  return (
    <View style={styles.container}>
      <FlatList
        data={latestNews}
        renderItem={({item}) => <NewsFeedcard data={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default NewsFeeds;
