import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/Fontisto';
import eleimg from "../../../images/electronic.png"
import appaimg from "../../../images/apparel.png"
import accesinimg from "../../../images/accessories.png"
import cosimg from "../../../images/cosmetic.png"
import toyimg from "../../../images/toys.png"
import furimg from "../../../images/furniture.png"
import spimg from "../../../images/sports.png"
import shimg from "../../../images/shoes.png"
import { Lists } from '../components/List';
export default function Shoping() {
    const listdata = [
        {
            id: 1,
            img:eleimg ,
            title: "Electronic"
        },
        {
            id: 2,
            img:appaimg,
            title: "Apparel"
        },
        {
            id: 3,
            img: accesinimg,
            title: "Accessories"
        },
        {
            id: 4,
            img: cosimg,
            title: "Cosmetic"
        },
        {
            id: 5,
            img: toyimg,
            title: "Toys"
        },
        {
            id: 6,
            img: spimg,
            title: "Sports"
        },
        {
            id: 7,
            img: furimg,
            title: "Furniture"
        },
        {
            id: 8,
            img: shimg,
            title: "Shoes"
        },
    ]
    return (
        <SafeAreaView>
            <View>
                <View style={[mystyle.box, { justifyContent:'flex-start', flexDirection: "row", marginTop: 20, marginLeft: 20 }]}>
                    <TouchableOpacity style={[mystyle.box, { flexDirection: 'row', gap: 6 }]}>
                        <Icon name="shopping-bag-1" size={25} color={"black"} />
                        <Text style={[mystyle.text]}>Shoping</Text>
                    </TouchableOpacity>
                </View>
                <Lists listdata= {listdata}/>
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
        color: 'black',
        fontSize: 20,
        fontWeight: 600
    },
    item: {
        borderRadius: 50,
        width: 70,
        marginTop:10,
    }
})
