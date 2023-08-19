import { Text, View, StyleSheet, ImageBackground } from "react-native"
import LinearGradient from "react-native-linear-gradient"
const hero = require('../../assets/images/hero.png')

const HeroCard = () => {
    return (
        <ImageBackground source={hero} imageStyle={{borderRadius:8}} resizeMode="cover" style={styles.container}>
            <LinearGradient colors={['rgba(98, 98, 98, 0)', 'rgba(0, 0, 0, 0.8)']} style={styles.wrapper}>
                <View>
                <Text style={styles.author}>by Ryan Browe</Text>
                <Text style={styles.title}>Crypto Investor Should be aready to Lose all their money, BOE governor says</Text>  
                </View>
   
                <Text style={styles.desc}>“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”</Text>
            </LinearGradient >
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
       height:240,
       backgroundColor:'red',
       borderRadius:8,
       width:321,
       marginRight:10
    
    },
    wrapper:{
        width:'100%',
        height:'100%',
        // backgroundColor:'rgba(255, 255, 255, 0)',
        padding:'3.5%',
        paddingTop:80,
       borderRadius:8,
       justifyContent:'space-between'
        },
    author:{
        fontFamily:'Nunito',
        color:'white',
        fontSize:10,
        fontWeight:'800',
    },
    title:{
        fontFamily:'New York',
        color:'white',
        fontSize:16,
        fontWeight:'700',
        lineHeight:20.6,
        width:'90%'
    },
    desc:{
        fontFamily:'Nunito',
        color:'white',
        fontSize:10,
        fontWeight:'400',
    }
})

export default HeroCard