import React, { useState } from 'react';
import { FlashList } from '@shopify/flash-list'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image';
export const Lists = ({ listdata }) => {
  const images = ({img})=>{
    const imgUri = Image.resolveAssetSource(img).uri;
    return imgUri
  }
  return (
    <View style={[mystyle.box, {
      height: 170,
      justifyContent: 'flex-start',
      flexDirection: 'row', gap: 5,
      marginLeft: 30,
      flexWrap: 'wrap'
    }]}>
      <FlashList
        data={listdata}
        horizontal={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={[mystyle.item, mystyle.box]} key={item.id}>
            <FastImage source={{uri:Image.resolveAssetSource(item.img).uri,priority:FastImage.priority.high}} style={{ width: 50, height: 50, borderRadius: 50 }}  />
            <Text style={{ color: '#fff', paddingLeft: 10 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={4}
        estimatedItemSize={200}
      />
    </View>
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
    width: 90,
    marginTop: 10,
    marginRight: -10
  }
})
