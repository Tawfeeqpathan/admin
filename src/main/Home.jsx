import React from 'react';
import { StyleSheet, View } from 'react-native'
import Carousel from './components/Carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import Shoping from './shoping/Shoping';
import Food from './food/Food';
import Services from './services/Services';
import Fitness from './fitness/Fitness';
import Travel from './travel/Travel';
import Header from './components/Header';
import { FlashList } from '@shopify/flash-list';
export default function Home() {
  const componentsarr = [
    <Header />,
    <Carousel />,
    <Fitness />,
    <Shoping />,
    <Food />,
    <Travel />,
    <Services />,
   
  ]
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <FlashList
        data={componentsarr}
        renderItem={({ item }) => (
          <View>
            {item}
          </View>

        )}
        key={({ item, index }) => index}
        estimatedItemSize={1000}
      />

    </SafeAreaView>
  )
}

const mystyle = StyleSheet.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  text: {
    color: '#fff',
    fontSize: 20
  }
})