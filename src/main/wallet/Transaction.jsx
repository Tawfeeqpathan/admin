import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import coin from "../../../images/coin.png"
export default function Transactions() {
  return (
    <View style={{ height:260,}}>
      <Text style={[mystyle.headline]}>MJ King all Transaction:</Text>
      <FlashList
        data={[1, 2, 3, 4,5,6]}
        renderItem={({ item }) => (
          <View style={[mystyle.box, mystyle.innerbox,]} >
            <View style={[mystyle.box,]}>
              <Text style={[mystyle.text]} >pesron</Text>
              <View style={[mystyle.box, { flexDirection: 'row', gap: 2 }]}>
                <Image source={coin} style={{ width: 20, height: 20 }} />
                <Text style={[mystyle.text]}>100</Text>
              </View>
            </View>
            <View style={[mystyle.box]}>
                <Text style={[mystyle.text]}>12 jan 2024</Text>
                <Text style={[mystyle.text,{color:'tomato'}]}>send</Text>
              </View>
          </View>
        )}
        estimatedItemSize={400}
        keyExtractor={item => item}
        scrollbarColor= {'white'}
      />

    </View>
  )
}
const mystyle = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor:'gray'
  },
  text: {
    color: '#fff',
    fontSize: 17,
  },
  headline: { 
    color:'#fff',
    margin:10,
    fontSize:20,
    borderBottomColor:"#fff",
    borderBottomWidth:2 }
})