import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { PhoneBestProduct } from '../components/HomeProduct'

export default function Offer({navigation }) {
  return (
    <View style={{backgroundColor:'black'}}>
   <ScrollView>
    <TouchableOpacity onPress={()=>navigation.navigate("productdetails")}>
       <PhoneBestProduct/>
    </TouchableOpacity>
  
   </ScrollView>
    </View>
  )
}
