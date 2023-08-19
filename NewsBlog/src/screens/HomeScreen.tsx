import { SafeAreaView, View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { RootStackParamList} from "../types";
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import { FC } from "react";
import { ICONS } from "../constant";

const HomeScreen: FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({navigation}) => {
    return(
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBox}>
                    <TextInput placeholder="Dogecoin to the moon.."/>
                    </View>
                    <ICONS.Notification/>
                    <View>

                    </View>
                </View>
                <Text style={{fontFamily:'New York', fontWeight:'600', fontSize:20}}>Home Screen</Text>
               
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    searchContainer:{
        flexDirection: "row"
    },
    searchBox:{
        flexDirection:'column',
        alignItems:'center',
        borderWidth:1,
        
    }
})

export default HomeScreen