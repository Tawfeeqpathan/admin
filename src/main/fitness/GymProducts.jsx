import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Search from '../components/Search'
import FastImage from 'react-native-fast-image'
import img from "../../../images/gym1.png"
import coin from "../../../images/coin.png"
import { ProductCarousel } from '../components/Carousel'
import { FlashList } from '@shopify/flash-list'
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
export default function GymProducts() {

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{ backgroundColor: 'black', paddingTop: 10 }}>
        <Search />
       <View style={[mystyle.box]}>
     <View style={{width:350,height:150,marginBottom:10}}>
     <Swiper
    style={{height:210}}
      showsPagination={true}
      autoplay={true}
      autoplayTimeout={2}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    > 
          {
          [1,2,3].map((item)=>(
            <FastImage
            key={item}
            style={{ width: 350, height: 150, borderRadius: 10 }}
            source={{
              uri: Image.resolveAssetSource(img).uri,
              priority: FastImage.priority.high
            }}
          />
          ))
         }
    </Swiper>
     </View>
       </View>
  
   
        <View style={[{height:460,gap:10}]}>
        <FlashList
            data={[1, 2,3,4]}
            renderItem={({ item }) =><ProductList id={item} />}
            keyExtractor={item => item.toString()}
         estimatedItemSize={300}
            numColumns={2}
          />
        </View>
      </View>
      <View>

      </View>
    </SafeAreaView>
  )
}
const ProductList = ({id}) => {
  const navigation = useNavigation()
  return (
     <TouchableOpacity onPress={()=>navigation.navigate("GymDetails",{id})}>
      <View style={[mystyle.box, mystyle.item]}>
        <View style={[mystyle.box]}>
          <Text style={[mystyle.text, { fontWeight: 'bold' }]}>1 months*</Text>
          <FastImage
            style={{ width: 170, height: 150, borderRadius: 10 }}
            source={{
              uri: Image.resolveAssetSource(img).uri,
              priority: FastImage.priority.high
            }}
          />
          <View style={[mystyle.box,mystyle.info]}>
            <Text style={[mystyle.text,]}>coin</Text>
            <View style={[mystyle.box, { flexDirection: 'row' }]}>
              <Text style={[mystyle.text,]}>1050</Text>
              <FastImage
                style={{ width: 25, height: 25, borderRadius: 20 }}
                source={{
                  uri: Image.resolveAssetSource(coin).uri,
                  priority: FastImage.priority.normal
                }}
              />
            </View>
          </View>
          <View style={[mystyle.box,mystyle.feature]}>
            <Text style={[mystyle.textsm]}>personl Trainer</Text>
            <Text style={[mystyle.textsm]}>Deit PLan</Text>
            <Text style={[mystyle.textsm]}>Fitness Dashboard</Text>
            <Text style={[mystyle.textsm]}>Workout anywhere</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>

  )
}
const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'black',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -31,
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -31,
    
  },
};
const mystyle = StyleSheet.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    marginTop:5,
    width: 175,
    height: 320,
    backgroundColor: '#fa8200',
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  info:{ 
    justifyContent: 'space-between',
   margin: 10,
    flexDirection: 'row',
     width: 170 },
     feature:{
      flexWrap:'wrap',
      flexDirection:'row',
     },
     textsm:{
      color:'black',
      fontSize:10,
      fontWeight:'bold',
      width:80,
      paddingLeft:15
     }
});
