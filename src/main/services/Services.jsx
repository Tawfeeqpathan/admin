import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon  from 'react-native-vector-icons/dist/AntDesign';
import Eimg  from "../../../images/Erepair.png"
import Simg  from "../../../images/salon.png"
import Pbimg from "../../../images/plumber.png"
import ptimg from "../../../images/painter.png"
import climg from "../../../images/cleaner.png"
import acimg from "../../../images/ac.png"
import { Lists } from '../components/List';
export default function Services() {
    const listdata= [
        {
            id: 1,
            img:Eimg ,
            title: "E-repair"
        },
        {
            id: 2,
            img:Simg,
            title: "Salon"
        },
        {
            id: 3,
            img: Pbimg,
            title: "Plumber"
        },
        {
            id: 4,
            img: ptimg,
            title: "Painter"
        },
        {
            id: 5,
            img: climg,
            title: "Cleaner"
        },
        {
            id: 6,
            img: acimg,
            title: "Ac service"
        },
    ]
    return (
        <SafeAreaView>
            <View>
                <View style={[mystyle.box, { justifyContent:'flex-start', flexDirection: "row", marginTop: 20, marginLeft: 20 }]}>
                    <TouchableOpacity style={[mystyle.box, { flexDirection: 'row', gap: 6 }]}>
                        <Icon name="customerservice" size={25} color={"#fff"} />
                        <Text style={[mystyle.text]}>Services (Coming soon)</Text>
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
