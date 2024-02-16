import React from 'react'
import { ScrollView, View } from 'react-native'
import { PhoneBestProduct } from '../components/HomeProduct'

export default function Offer() {
  return (
    <View style={{backgroundColor:'black'}}>
   <ScrollView>
   <PhoneBestProduct/>
   </ScrollView>
    </View>
  )
}
