import { useRoute } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, View,Text } from 'react-native'


export default function GymDetails() {
    const route = useRoute()
    const { id } = route.params
  return (
   <SafeAreaView style={{backgroundColor:'black'}}>
    <View>
        <Text style={{color:'#fff'}}>
            jjddi:{id}
        </Text>

    </View>
   </SafeAreaView>
  )
}
