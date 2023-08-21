import { Text, View, StyleSheet, ImageBackground, Pressable } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { NewsArticles, RootStackParamList } from "../types"
import { FC, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { COLORS } from "../constant"
import { StackNavigationProp } from "@react-navigation/stack"
const hero = require('../../assets/images/hero.png')

const FilteredNewsCard = ({data, screen}:{data:NewsArticles, screen:string}) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
    return (
        <Pressable onPress = {() => navigation.navigate('news', {newsId: data?.title, screen })}>
            <ImageBackground source={{uri: data?.urlToImage}} imageStyle={{borderRadius:8}} resizeMode="cover" style={styles.container}>
            <LinearGradient colors={['rgba(98, 98, 98, 0)', 'rgba(0, 0, 0, 0.8)']} style={styles.wrapper}>
                <View>
                    <Text style={styles.title}>{data?.title?.length > 70 ? data?.title?.substring(0, 70) + '...' : data?.title}</Text>
                </View>
                <View style={styles.details}>
                <View>
                    <Text style={styles.info}>{data?.author}</Text>
                </View>
                <View>
                    <Text style={styles.info}>{data?.publishedAt?.split('T')[0]}</Text>
                </View>
                </View>
            </LinearGradient >
        </ImageBackground>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
       height:128,
       borderRadius:8,
       marginBottom:15,
       backgroundColor:COLORS.primary
    },
    wrapper:{
        width:'100%',
        height:'100%',
        padding:'3.5%',
       borderRadius:8,
       justifyContent:'space-between'
        },
    title:{
        fontFamily:'NewYorkMedium-Semibold',
        color:'white',
        fontSize:14,
        lineHeight:20.6,
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    info:{
        color:'white',
        fontSize:12,
        fontFamily:'Nunito-Semibold',
    }
})

export default FilteredNewsCard