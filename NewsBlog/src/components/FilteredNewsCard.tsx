import { Text, View, StyleSheet, ImageBackground } from "react-native"
import LinearGradient from "react-native-linear-gradient"
const hero = require('../../assets/images/hero.png')

const FilteredNewsCard = () => {
    return (
        <ImageBackground source={hero} imageStyle={{borderRadius:8}} resizeMode="cover" style={styles.container}>
            <LinearGradient colors={['rgba(98, 98, 98, 0)', 'rgba(0, 0, 0, 0.8)']} style={styles.wrapper}>
                <View>
                    <Text style={styles.title}>5 things to know about the 'conundrum' of lupus</Text>
                </View>
                <View style={styles.details}>
                <View>
                    <Text style={styles.info}>Matt Vilano</Text>
                </View>
                <View>
                    <Text style={styles.info}>Sunday 28, March 2023</Text>
                </View>
                </View>
            </LinearGradient >
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
       height:128,
       backgroundColor:'red',
       borderRadius:8,
       marginBottom:15
    },
    wrapper:{
        width:'100%',
        height:'100%',
        padding:'3.5%',
       borderRadius:8,
       justifyContent:'space-between'
        },
    title:{
        fontFamily:'New York',
        color:'white',
        fontSize:14,
        fontWeight:'600',
        lineHeight:20.6,
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    info:{
        color:'white',
        fontSize:12,
        fontFamily:'Nunito'
    }
})

export default FilteredNewsCard