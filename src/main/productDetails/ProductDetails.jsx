import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel, { ProductCarousel } from '../components/Carousel'
import Icon from 'react-native-vector-icons/dist/Fontisto';
import Star from 'react-native-vector-icons/dist/FontAwesome';
import earimg from "../../../images/earbud.png";
import img1 from "../../../images/iphone.png";
import img2 from "../../../images/sumsung.png";
import img3 from "../../../images/tab.png";
export default function ProductDetails() {
    const data = [
        {id:1,price:79900,img:img1},
        {id:2,price:59990,img:img2},
        {id:3,price:5999,img:img3},
        {id:4,price:699,img:earimg}
    ]
    return (
        <SafeAreaView>
           <ScrollView>
           <View style={{ backgroundColor: 'black' }}>
                <View style={[mystyle.box, mystyle.top]}>
                    <Text style={mystyle.text}>60% off</Text>
                    <TouchableOpacity>
                        <Icon name="share" size={20} color={'#fff'} />
                    </TouchableOpacity>
                </View>
                <View style={[mystyle.box,{ height: 200 }]}>
                   <Image source={earimg} style={{width:350,height:200,backgroundColor:'#fff'}}/>
                </View>
                <View>
                    <View style={[mystyle.box, mystyle.top]}>
                        <View style={{ marginLeft:3, flexDirection: 'column', gap: 2 }}>
                            <Text style={mystyle.text}>Earbud</Text>
                            <Text style={[mystyle.text, { fontSize: 10 }]}>Noise Buds VS106</Text>
                        </View>
                        <Text style={mystyle.text}>₹ 999</Text>

                    </View>
                    <View style={[mystyle.box, mystyle.top]}>
                        <View style={[{ flexDirection: 'column' }]}>
                            <Text style={mystyle.text}>Store</Text>
                            <Text style={[mystyle.text, { fontSize: 10 }]}>Khan Electronics</Text>
                        </View>
                        <View style={[mystyle.box, { flexDirection: 'row', gap: 2 }]}>
                            <Star name="star" color={'orange'} />
                            <Star name="star" color={'orange'} />
                            <Star name="star" color={'orange'} />
                            <Star name="star" color={'orange'} />
                            <Star name="star" color={'orange'} />
                        </View>
                    </View>
                    <View style={[{ marginLeft: 10, flexDirection: 'column', gap: 2 }]}>
                        <Text style={mystyle.text}>Description</Text>
                        <Text style={[mystyle.text, { fontSize: 13, fontWeight: '200' }]}>Built-in 3 EQ Modes- Personalise your audio experience to suit your preferences with bass mode, gaming mode, and normal mode, ensuring you have the perfect audio setup for any occasion.</Text>
                    </View>
                    <View style={[mystyle.box, mystyle.top]}>
                        <Text style={mystyle.text}>Expected Delivery Time</Text>
                        <Text style={[mystyle.text, { fontSize: 15, fontWeight: '300' }]}>1 hour</Text>

                    </View>
                    <View style={[mystyle.box, mystyle.top]}>
                        <Text style={mystyle.text}>Location</Text>
                        <Text style={[mystyle.text, { fontSize: 15, fontWeight: '300' }]}>Srinagar</Text>

                    </View>
                    <View >
                        <Text style={[mystyle.text, { marginLeft: 10,marginBottom:10 }]}>Suggestions</Text>
<View style={[mystyle.box,{flexDirection:'row',marginBottom:20,gap:10}]}>
{
    data.map((item)=>(
        <View key={item.id} style={[mystyle.box,{flexDirection:'column'}]} >
<Image source={item.img} style={{width:70,height:70,backgroundColor:'#fff',borderRadius:10}} />
<Text style={mystyle.text}>From ₹{item.price}</Text>
        </View>
    ))
}
</View>
                    </View>
                    <View>
                    <View style={[mystyle.box,{flexDirection:'row',gap:10}]}>
                       <TouchableOpacity style={[mystyle.btn,mystyle.box]}>
                       <Text style={[ { fontSize:20,color:'black',fontWeight:'bold'}]}>Add to Cart </Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={[mystyle.btn,mystyle.box,{backgroundColor:'#fa8200'}]} >
                       <Text style={[ { fontSize:20,color:'#fff',fontWeight:'bold'}]}>Buy Now</Text>
                       </TouchableOpacity>

                    </View>
                    </View>
                </View>
            </View>
           </ScrollView>
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