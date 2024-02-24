import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { OfferProductList } from '../components/OfferProductList'

export default function Offer({ navigation }) {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <ScrollView>
        <TouchableOpacity >
          <OfferProductList navigation={navigation} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
