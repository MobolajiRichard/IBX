import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import { RootStackParamList} from "../types";
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import { FC } from "react";
import { NewsFeedcard } from "../components";


const NewsFeeds: FC<NativeStackScreenProps<RootStackParamList, 'feed'>>  = () => {
    const filters = [
        'Healthy',
        'Technology',
        'Finance',
        'Arts',
        'Sports',
        'Politics',
      ];
    return(
        <View style={styles.container}>
            <FlatList
            data={filters}
            renderItem={({item}) => <NewsFeedcard/>}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})

export default NewsFeeds