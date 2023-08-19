import { SafeAreaView, View, Text } from "react-native";
import { RootStackParamList} from "../types";
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import { FC } from "react";


const NewsFeeds: FC<NativeStackScreenProps<RootStackParamList, 'news'>>  = () => {
    return(
        <SafeAreaView>
            <View>
                <Text>News</Text>
            </View>
        </SafeAreaView>
    )
}

export default NewsFeeds