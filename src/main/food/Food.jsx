import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import birimg from "../../../images/biryani.png"
import burimg from "../../../images/burger.png"
import chiimg from "../../../images/chinese.png"
import pizimg from "../../../images/pizza.png"
import moimg from "../../../images/momo.png"
import ckimg from "../../../images/chicken.png"
import frenchimg from "../../../images/french.png"
import swimg from "../../../images/sweet.png"
import { Lists } from '../components/List';
export default function Food() {
    const listdata = [
        {
            id: 1,
            img:pizimg,
            title:"Pizza"
        },
        {
            id: 2,
            img:burimg,
            title:"Burger"
        },
        {
            id: 3,
            img: chiimg,
            title:"chinese"
        },
        {
            id: 4,
            img: birimg,
            title:"Biryani"
        },
        {
            id: 5,
            img: ckimg,
            title:"Chicken"
        },
        {
            id: 6,
            img: moimg,
            title:"Momos"
        },
        {
            id: 7,
            img: frenchimg,
            title:"F-fries"
        },
        {
            id: 8,
            img: swimg,
            title:"Sweet"
        },
    ]
    return (
        <SafeAreaView>
            <View>
                <View style={[mystyle.box, { justifyContent:'flex-start', flexDirection: "row", marginTop: 20, marginLeft: 20 }]}>
                    <TouchableOpacity style={[mystyle.box, { flexDirection: 'row', gap: 6 }]}>
                        <Icon name="fast-food" size={25} color={"#fff"} />
                        <Text style={[mystyle.text]}>Food (Coming soon)</Text>
                    </TouchableOpacity>
                </View>
               <Lists listdata={listdata}/>
            </View>
        </SafeAreaView>
    )
}
const mystyle = StyleSheet.create({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 600
    },
    item: {
        borderRadius: 50,
        width: 70,
        marginTop:10,
    }
})
