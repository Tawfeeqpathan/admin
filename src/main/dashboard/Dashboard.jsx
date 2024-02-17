import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Main from '../Main'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
export default function Dashboard() {
  return (
  <SafeAreaView>
    <View style={{backgroundColor:'black'}}>
      <ScrollView>
        <View style={[mystyle.box,{gap:10,height:100,paddingBottom:1,backgroundColor:'#fa8200',}]}>
             <Text style={mystyle.text}>Financial Analysis</Text>
             <View style={[mystyle.box,{flexDirection:'row',gap:10}]}>
              <Icon name="coins" color={'#fff'} size={20} />
             <Text style={[mystyle.text,{fontSize:25}]}>₹ 0</Text>
             </View>
        </View>
        <View style={[mystyle.box,{backgroundColor:"#fa8200"}]}>
         <View style={[mystyle.box,{width:50,height:50,borderWidth:2,borderRadius:50,borderColor:'#fff'}]}>
          <Icon name="user" size={30} color={'#fff'}/>
         </View>
         <Text style={mystyle.text}>Tawfeeq</Text>
        </View>
        <View style={[mystyle.top,{height:400}]}>
          <View>
            <TouchableOpacity style={[mystyle.box,mystyle.btn]}>
              <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>History</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={[mystyle.box,mystyle.btn]}>
              <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Fitness</Text>
            </TouchableOpacity>
            <Text style={[mystyle.text,{marginLeft:-95,marginTop:60}]}>No record available!</Text>
          </View>
         
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
  )
}
const mystyle = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    btn:{
        width:160,
        height:50,
        backgroundColor:'#fff',
        color:'black',
        borderRadius:10
    }
})