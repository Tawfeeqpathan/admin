import React from 'react'
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import mainimg from "../../../images/sumsung.png";
import p1img from "../../../images/p1.jpg";
import p2img from "../../../images/p2.jpg";

const data = [
  {
    id: 1,
    title: "I phone",
    price: 9999,
    image: p1img
  },
  {
    id: 2,
    title: "Sumsung",
    price: 9999,
    image: p2img
  },
  {
    id: 3,
    title: "I phone",
    price: 9999,
    image: p1img
  },
  {
    id: 4,
    title: "Sumsung",
    price: 9999,
    image: p2img
  },
  {
    id: 5,
    title: "I phone",
    price: 9999,
    image: p1img
  },
  {
    id: 6,
    title: "Sumsung",
    price: 9999,
    image: mainimg
  }
]
export const PhoneBestProduct = () => {

  return (
    <SafeAreaView>
      <View>
        <View>
          <Text style={[mystyle.text, { borderBottomColor: '#fff', borderBottomWidth: 2, width: 150 }]}>  Smart Phone</Text>
          <View style={mystyle.outerBox} >
            <TouchableOpacity>
              <View style={[mystyle.box, mystyle.headbox]}>
                <View style={[mystyle.headinfo, { marginLeft: 20, marginTop: 10 }]}>
                  <Text style={[mystyle.text, { fontWeight: 'bold', fontSize: 30 }]}>Just</Text>
                  <Text style={[mystyle.text, { fontWeight: 'bold' }]}>₹ 79,999</Text>
                  <Text style={[mystyle.text]}>Glaxy S24</Text>
                  <Text style={[{ backgroundColor: '#fff', color: 'black', padding: 3, fontWeight: 'bold', fontSize: 15 }]}>+ 5% mj coin</Text>
                  <Text style={[mystyle.bottomText]}>Price inclusive of all offer</Text>
                </View>
                <View style={[mystyle.box]}>
                  <Text style={{ backgroundColor: '#fff', color: 'black', padding: 3, fontWeight: 'bold' }}>Sumsung</Text>
                  <Image source={mainimg} style={{ width: 160, height: 160 }} />
                </View>

              </View>
            </TouchableOpacity>
            {
              data.map((item, index) => (
                <View key={index} style={[mystyle.innerBox, mystyle.box]}>
                  <ScrollView horizontal={true}>
                    <View style={[mystyle.inner, mystyle.box]}>
                      <TouchableOpacity>
                        <Text style={[mystyle.text,{fontWeight:'bold',color:"#ffff"}]}>From ₹{item.price}*</Text>
                        <Text style={[mystyle.text,mystyle.title]}>Best deals on {item.title}</Text>
                        <Image source={item.image} style={[mystyle.proImg]} />
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              ))
            }</View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export const ClothesBestProuct = () => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text style={[mystyle.text]}>Clothes</Text>
          <View style={mystyle.outerBox} >
            {
              data.map((item, index) => (
                <View key={index} style={[mystyle.box, mystyle.innerBox]}>
                  <ScrollView horizontal={true}>
                    <TouchableOpacity>
                      <Text style={[mystyle.text]}>{item.title}</Text>
                      <Text style={[mystyle.text]}  >{item.price}</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              ))
            }</View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export const ElectronicBestProduct = () => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text style={[mystyle.text]}>Electronic</Text>
          <View style={mystyle.outerBox} >
            {
              data.map((item, index) => (
                <View key={index} style={[mystyle.box, mystyle.innerBox]}>
                  <ScrollView horizontal={true}>

                    <TouchableOpacity>
                      <Text style={[mystyle.text]}>{item.title}</Text>
                      <Text style={[mystyle.text]}  >{item.price}</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              ))
            }</View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export const FoodBestProduct = () => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text style={[mystyle.text]}>Electronic</Text>
          <View style={mystyle.outerBox} >
            {
              data.map((item, index) => (
                <View key={index} style={[mystyle.box, mystyle.innerBox]}>
                  <ScrollView horizontal={true}>

                    <TouchableOpacity>
                      <Text style={[mystyle.text]}>{item.title}</Text>
                      <Text style={[mystyle.text]}  >{item.price}</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              ))
            }</View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export const mystyle = StyleSheet.create({
  title:{
    backgroundColor: 'rgba(0,0,0,0.6)',
    fontSize:13,
    margin:2,
    padding:2,
    borderRadius:6
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  outerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
  },
  innerBox: {
    borderWidth: 2,
    margin: 5,
    width: 180,
    height: 230,
    backgroundColor: '#FA8200'
  },
  headbox: {
    borderWidth: 2,
    width: 360,
    height: 200,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fa8200'
  },
  headinfo: {
    flexDirection: 'column',
    gap: 5,
    marginLeft: 10
  },
  bottomText: {
    fontSize: 12,
    marginTop: 20,
    backgroundColor: 'gray',
    color: '#fff',
    padding: 3,
    borderRadius: 5,

  },
  proImg: {
    width: 150,
    height: 150,
    zIndex: 10,
    borderRadius:2,
  },
  inner: {
    marginBottom: 2,
    width: 170,
    height: 220,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,

  }
})

