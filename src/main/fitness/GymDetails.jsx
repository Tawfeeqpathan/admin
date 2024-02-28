import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/Fontisto';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Ficons from 'react-native-vector-icons/dist/FontAwesome';
import Star from 'react-native-vector-icons/dist/FontAwesome';
import earimg from "../../../images/earbud.png";
import mapimg from "../../../images/map.png";
import coin from "../../../images/coin.png";
import img1 from "../../../images/anywhere.png";
import img2 from "../../../images/lifetime.png";
import img3 from "../../../images/fitnessdashboard.png";
import {  useNavigation } from '@react-navigation/native';
export default function GymDetails() {
    const navigation = useNavigation()
    const data = [
        { id: 1, text: "Workout Anywhere", img: img1 },
        { id: 2, text: "lifetime Coin Validaty", img: img2 },
        { id: 3, text: "Fitness Dashboard", img: img3 }
    ]
    const howtouse = [
        { id: 1, msg:"Buy a plan you will get coins"},
        { id: 2, msg:"Go to any Gym(linked with mjking) scan QR.code of gym"  },
        { id: 3, msg:"Pay from your wallet 30coins/day" },
        { id: 4, msg:"Enjoy your workout" },
    ]
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ backgroundColor: 'black' }}>
                    <View style={[mystyle.box, mystyle.top]}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Ionicons name={'arrow-back'} size={20} color={'#fff'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={mystyle.text}>view full map</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[mystyle.box, { height: 200 }]}>
                        <Image source={mapimg} style={{ width: 350, height: 200, backgroundColor: '#fff' }} />
                    </View>
                    <View>
                        <View style={[mystyle.box]}>
                            <Text style={[mystyle.text,{fontSize:20,borderBottomWidth:2,borderBottomColor:'#fff'}]}>1 Month plan*</Text>
                        </View>
                        <View style={[mystyle.box, mystyle.top]}>

                            <View style={{ marginLeft: 3, flexDirection: 'column', gap: 2 }}>
                                <Text style={mystyle.text}>Price</Text>
                            </View>
                            <Text style={mystyle.text}>₹ 999</Text>

                        </View>
                        <View style={[mystyle.box, mystyle.top]}>
                            <View style={[{ flexDirection: 'column' }]}>
                                <Text style={mystyle.text}>Coins</Text>
                                <Text style={[mystyle.text, { fontSize: 12 }]}>you get</Text>
                            </View>
                            <View style={[mystyle.box, { flexDirection: 'row', gap: 3 }]}>
                                <Text style={mystyle.text}>1050</Text>
                                <Image source={coin} style={{ width: 20, height: 20 }} />
                            </View>
                        </View>
                        <View style={[{ marginLeft: 10, flexDirection: 'column', gap: 2 }]}>
                            <Text style={mystyle.text}>More about</Text>
                            <Text style={[mystyle.text, { fontSize: 13, fontWeight: '200' }]}>Unlock your fitness potential with our gym membership. Gain access to state-of-the-art equipment, expert trainers, and a supportive community dedicated to your goals. Whether you're a beginner or a seasoned athlete, our diverse classes and personalized programs cater to all levels. Join us and embark on your journey to a healthier you.</Text>
                        </View>
                        <View style={[mystyle.box, mystyle.top]}>
                            <Text style={mystyle.text}>Rating</Text>
                            <View style={[mystyle.box, { flexDirection: 'row', gap: 2 }]}>
                                <Star name="star" color={'orange'} />
                                <Star name="star" color={'orange'} />
                                <Star name="star" color={'orange'} />
                                <Star name="star" color={'orange'} />

                            </View>
                        </View>
                        <View >
                            <View style={[mystyle.box]}>
                                <Text style={[mystyle.text, { marginLeft: 10, marginBottom: 10, fontSize: 20,borderBottomWidth:2,borderBottomColor:'#fff' }]}>Features</Text>
                            </View>
                            <View style={[mystyle.box, { flexDirection: 'row', marginBottom: 20, gap: 10, flexWrap: 'wrap' }]}>
                                {
                                    data.map((item) => (
                                        <View key={item.id} style={[mystyle.box, { flexDirection: 'column' }]} >
                                            <Image source={item.img} style={{ width: 90, height: 70, backgroundColor: '#fff', borderRadius: 10 }} />
                                            <Text style={[mystyle.text,{fontSize:12}]}>{item.text}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                        <View >
                            <View style={[mystyle.box]}>
                                <Text style={[mystyle.text, { marginLeft: 10, marginBottom: 10, fontSize: 20 }]}>Easy to Use:</Text>
                            </View>
                            <View style={[mystyle.box, { flexDirection: 'column', marginBottom: 20, gap: 10, flexWrap: 'wrap' }]}>
                                {
                                   howtouse.map((item) => (
                                        <View key={item.id} style={[mystyle.box, { flexDirection: 'row' ,gap:10, marginLeft:30}]} >
                                            <Ficons name={"dot-circle-o"} size={20} color={'#fff'} />
                                            <View style={[mystyle.box,{width:300}]}>
                                            <Text style={mystyle.text}>{item.msg}</Text>
                                                </View>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                        <View>
                            <View style={[mystyle.box]}>
                                <TouchableOpacity style={[mystyle.btn, mystyle.box, { backgroundColor: '#fa8200' }]} >
                                    <Text style={[{ fontSize: 20, color: '#fff', fontWeight: 'bold' }]}>Pay Now</Text>
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
    btn: {
        width: 160,
        height: 50,
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: 10
    }
})