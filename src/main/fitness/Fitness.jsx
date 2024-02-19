import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MIcon from 'react-native-vector-icons/dist/MaterialIcons';
import gymimg from "../../../images/gym.png"
import supimg from "../../../images/supplement.png"
import deitimg from "../../../images/diets.png"
import goalimg from "../../../images/goal.png"
import { Lists } from '../components/CategoryList';
export default function Fitness() {
    const listdata = [
        {
            id: 1,
            img:gymimg,
            title: "Gym"
        },
        {
            id: 2,
            img: goalimg,
            title: "Goal"
        },
        {
            id: 3,
            img:deitimg,
            title: "Diet"
        },
        {
            id: 4,
            img:supimg,
            title: "Supple"
        },
      
       
    ]
    return (
        <SafeAreaView>
            <View>
                <View style={[mystyle.box, { justifyContent:'flex-start', flexDirection: "row", marginTop: 20, marginLeft: 20 }]}>
                    <TouchableOpacity style={[mystyle.box, { flexDirection: 'row', gap: 6 }]}>
                        <MIcon name="fitness-center" size={25} color={"#fff"} />
                        <Text style={[mystyle.text]}>Fitness</Text>
                    </TouchableOpacity>
                </View>
                <Lists listdata={listdata} />
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
        fontSize: 25,
        fontWeight: 700
    },
    item: {
        borderRadius: 50,
        width: 70,
        marginTop:10,
    }
})
