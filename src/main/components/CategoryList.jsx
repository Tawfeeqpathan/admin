import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Search from '../components/Search'
import birimg from "../../../images/biryani.png"
import burimg from "../../../images/burger.png"
import chiimg from "../../../images/chinese.png"
import pizimg from "../../../images/pizza.png"
import moimg from "../../../images/momo.png"
import ckimg from "../../../images/chicken.png"
import frenchimg from "../../../images/french.png"
import swimg from "../../../images/sweet.png"
const data = [
  {
      id: 1,
      img:pizimg,
      title:"Pizza",
      cat:'pizza',
      icon:"fast-food",
  },
  {
    id: 2,
    img:pizimg,
    title:"Pizza",
    cat:'pizza',
    icon:"fast-food",
},
{
    id: 3,
    img:pizimg,
    title:" Pizza",
    cat:'pizza',
    icon:"fast-food",
},
  {
      id: 4,
      img: birimg,
      title:"Biryani",
      cat:'pizza',
      icon:"fast-food",
  },
  {
      id: 5,
      img: ckimg,
      title:"Chicken",
      cat:'pizza',
      icon:"fast-food",
  },
  {
      id: 6,
      img: moimg,
      title:"Momos",
      cat:'pizza',
      icon:"fast-food",
  },
  {
      id: 7,
      img: frenchimg,
      title:"F-fries",
      cat:'pizza',
      icon:"fast-food",
  },
  {
      id: 8,
      img: swimg,
      title:"Sweet",
      cat:'pizza',
      icon:"fast-food",
  },
]
export default function CategoryList({icon,listdata}) {
  return (
    <View style={{backgroundColor:'black',paddingTop:10,paddingBottom:100}}>
      <Search/>
     <FlatList
     data={data}
     renderItem={({item})=>(
      <View style={[ { justifyContent:'flex-start', flexDirection:'column', marginTop: 20, marginLeft: 20 }]}>
      <TouchableOpacity style={[ { flexDirection: 'row', gap: 6 }]} >
            <Icon name={item.icon} size={25} color={"#fff"} />
            <Text style={[mystyle.text]}>{item.cat}</Text>
        </TouchableOpacity>
        </View>
        )
     
    }
    keyExtractor={item=>item.id}
 
     />

    </View>
  )
}
export const Lists = ({listdata})=>{
  return(
    <View>
  <View style={[mystyle.box, { justifyContent:'flex-start',
     flexDirection: 'row',gap:5,marginLeft:30 ,flexWrap:'wrap'}]}>
      <FlatList
      
      data={listdata}
      horizontal={false}
      renderItem={({item})=>(  
      
        <TouchableOpacity style={[mystyle.item,mystyle.box]} key={item.id}>
                    <Image source={item.img} style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode="contain" />
                    <Text style={{ color: '#fff',paddingLeft:10 }}>{item.title}</Text>
                </TouchableOpacity> 
               
      )}
      keyExtractor={item=>item.id}
      numColumns={4}
      />
    </View>
</View>
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
      width: 90,
      marginTop:10,
  }
})
