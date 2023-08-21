import { SafeAreaView, View, Text, StyleSheet, FlatList, Modal } from "react-native";
import { RootStackParamList} from "../types";
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import { FC } from "react";
import { NewsFeedcard } from "../components";
const hero = require('../../assets/images/hero.png');


const SearchModal: FC<NativeStackScreenProps<RootStackParamList, 'feed'>>  = () => {
    const filters = [
        'Healthy',
        'Technology',
        'Finance',
        'Arts',
        'Sports',
        'Politics',
      ];
    return(
        <Modal style={styles.container}>
            <FlatList
            data={filters}
            renderItem={({item}) => <NewsFeedcard/>}
            showsVerticalScrollIndicator={false}
            />
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})

export default SearchModal