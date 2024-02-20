import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
export const Lists = ({ listdata }) => {
  return (
    <View>
      <View style={[mystyle.box, {
        justifyContent: 'flex-start',
        flexDirection: 'row', gap: 5, marginLeft: 30, flexWrap: 'wrap'
      }]}>
        <FlatList
          data={listdata}
          horizontal={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={[mystyle.item, mystyle.box]} key={item.id}>
              <Image source={item.img} style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode="contain" />
              <Text style={{ color: '#fff', paddingLeft: 10 }}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={4}
        />
      </View>
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
    marginRight:-10
  }
})
