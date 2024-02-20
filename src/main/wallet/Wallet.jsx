import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import img from "../../../images/coin.png";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import OIcon from 'react-native-vector-icons/dist/Octicons';
import AIcon from 'react-native-vector-icons/dist/AntDesign';
import IIcon from 'react-native-vector-icons/dist/Ionicons';
const Wallet = () => {
  const [scanner, setScanner] = useState(false)



  return (

    scanner ? (<QRCodeScanner
      onRead={({ data }) => alert(data)}
      reactivate={true}
      reactivateTimeout={500}

      showMarker={true}
      topContent={
        <Text>Scan the qr code</Text>
      }
      bottomContent={
        <TouchableOpacity onPress={() => setScanner(false)} style={[mystyle.btn, mystyle.box]} >
          <Text style={{ color: '#fff', fontSize: 20 }} >CANCLE</Text>
        </TouchableOpacity>
      }
    />) : (<SafeAreaView style={{backgroundColor:'black'}}>
<View>
     <View style={[mystyle.box,mystyle.top]}>
     <TouchableOpacity>
       <Icon name="grip-lines" size={20} color={'#fff'}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Icon name="inbox" size={20} color={'#fff'}/>
      </TouchableOpacity>
     </View>
     <View style={[mystyle.box,{flexDirection:'row',gap:5}]}>
      <Text style={mystyle.text}>Balance :1200</Text>
      <Image source={img} style={{width:20,height:20}}/>
     </View>
  <View style={[mystyle.box]}>
<View style={[mystyle.box,{borderWidth:2,padding:5,backgroundColor:'#fff'}]}>
<QRCode
        size={200}
        value="mj king"
        logo={img}
        logoSize={40}
        logoBackgroundColor="black"
        logoBorderRadius={10}
      />
      <Text>@Tawfeeq</Text>
</View>
  </View>
       <View style={[mystyle.box,{flexDirection:'row',gap:30,marginTop:30}]}>
       <TouchableOpacity onPress={() => setScanner(true)} style={[mystyle.box,{flexDirection:'column'}]}>
        <AIcon name="scan1" size={30} color={'#4285F4'}/>
        <Text style={[mystyle.smtext]}>Scan Now</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[mystyle.box,{flexDirection:'column'}]}>
        <AIcon name="wallet" size={30} color={'#4285F4'}/>
        <Text style={[mystyle.smtext]}>Pay Wallet Id</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[mystyle.box,{flexDirection:'column'}]}>
        <OIcon name="diff-added" size={30} color={'#4285F4'}/>
        <Text style={[mystyle.smtext]}>Add Coins</Text>
      </TouchableOpacity>


       </View>
      </View>
    </SafeAreaView>)
  );
};

export default Wallet;

const mystyle = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    marginTop: 40,
    width: 200,
    height: 40,
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  top:{justifyContent:'space-between',
  margin:10,
  flexDirection:'row'},
  text:{
    color:'#fff',
    fontSize:20
  },
  smtext:{
    color:'#fff',
    fontSize:15
  },
})