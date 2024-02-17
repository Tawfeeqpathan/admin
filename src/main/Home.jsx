import React,{useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Carousel, { ProductCarousel } from './components/Carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../../images/logo.png"
import Search, { SearchBar } from './components/Search';
import Shoping from './shoping/Shoping';
import Food from './food/Food';
import Services from './services/Services';
import Fitness from './fitness/Fitness';
import Travel from './travel/Travel';
import {PhoneBestProduct,ClothesBestProuct} from "./components/HomeProduct"
import Header from './components/Header';
export default function Home() {
const componentsarr = [
<Header/>,
<Carousel/>,
<Shoping/>,
<Food/>,
<Travel/>,
<Services/>,
<Fitness/>,]
  return (
    <SafeAreaView style={{backgroundColor:'black',height:'auto'}}>

     <FlatList
    data={componentsarr}
    renderItem={({item})=>(
<View>
 {item}
</View>

    )}
    key={({item,index})=>index}
    />
    

    </SafeAreaView>
  )
}

const mystyle = StyleSheet.create({
  box:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
 
  },
  text:{
    color:'#fff',
    fontSize:20
  }
})