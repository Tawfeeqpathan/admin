import React,{useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Carousel from './components/Carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../../images/logo.png"
import Search from './components/Search';
import Shoping from './shoping/Shoping';
import Food from './food/Food';
import Services from './services/Services';
import Fitness from './fitness/Fitness';
import Travel from './travel/Travel';
import {PhoneBestProduct,ClothesBestProuct} from "./components/HomeProduct"
export default function Home() {
  const data=[
    {
    id:1,
    title:"I phone",
    price:9999
  },
  {
    id:2,
    title:"I phone",
    price:9999
  },
  {
    id:3,
    title:"I phone",
    price:9999
  },
  {
    id:4,
    title:"I phone",
    price:9999
  },
  {
    id:5,
    title:"I phone",
    price:9999
  },
  {
    id:6,
    title:"I phone",
    price:9999
  },
  {
    id:7,
    title:"I phone",
    price:9999
  }
]
  return (
    <SafeAreaView style={{backgroundColor:'black',height:'auto'}}>
     
     <ScrollView style={{display:'flex'}}>
        <View style={[mystyle.box,{flexDirection:'row',margin:20}]}>
       <View>
        <Image source={logo} style={{width:50,height:50}} resizeMode="contain"  />
       </View>
       <View style={[mystyle.box,{flexDirection:'row',gap:4}]}>
       <TouchableOpacity>
     <Ionicons name="notifications-outline" size={33} color={'#fff'}/>
     </TouchableOpacity>
       <TouchableOpacity>
       <Icon name="user-o" size={30} color={'#fff'}/>
       </TouchableOpacity>
       
       </View>
        </View>
      
        <Search/>
        <View style={[{flexDirection:'row',width:200,marginBottom:5,marginLeft:5}]}>
        <Entypo name="location-pin" size={22} color={'#fff'}/>
        <Text style={{fontSize:15,color:'#fff'}}>kashmir,</Text>
        <Text style={{fontSize:15,color:'#B805DC'}}> 190001</Text>
        
        </View>
        <View>
        <Carousel/>
        </View>
        <View>
          <Shoping/>
        </View>
        <View>
        <Food/>
        </View>
        <View>
    <Travel/>
        </View>
        <View>
        <Services/>
        </View>
      
        <View>
        <Fitness/>
        </View>
        <View>
        <PhoneBestProduct/>
        <ClothesBestProuct/>
        </View>
      </ScrollView>
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