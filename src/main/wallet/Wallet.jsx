import React from 'react'
import { Image, Text, View } from 'react-native'
import img  from "../../../images/coin.png"
export default function Wallet() {
  return (
  <View >
    <Image source={img} style={{width:250,height:250}}/>
  </View>
  )
}
