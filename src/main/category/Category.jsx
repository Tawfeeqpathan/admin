import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Search from '../components/Search'
import birimg from "../../../images/biryani.png"
import burimg from "../../../images/burger.png"
import chiimg from "../../../images/chinese.png"
import pizimg from "../../../images/pizza.png"
import moimg from "../../../images/momo.png"
import ckimg from "../../../images/chicken.png"
import frenchimg from "../../../images/french.png"
import swimg from "../../../images/sweet.png"
import CategoryList from '../components/List';
import Food from '../food/Food'
import Travel from '../travel/Travel'
import Shoping from '../shoping/Shoping'
import Fitness from '../fitness/Fitness'
import Services from '../services/Services'
import Carousel from '../components/Carousel'
export default function Category() {
  const componentsarr = [
    <Search/>,
    <Carousel/>,
    <Shoping/>,
    <Food/>,
    <Travel/>,
    <Services/>,
   <Fitness/>,
  ]
  return (
    <SafeAreaView >
     <View style={{backgroundColor:'#fff'}}>
     <View style={{marginBottom:10}}>

     </View>
    <FlatList
    data={componentsarr}
    renderItem={({item})=>item}
    key={({item,index})=>index}
    />
     </View>
    </SafeAreaView>
  )
}
const mystyle = StyleSheet.create({
  box: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  },
  text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 600
  },
  item: {
      borderRadius: 50,
      width: 70,
      marginTop:10,
  }
})
