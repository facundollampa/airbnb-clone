import React from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './LocationListScreen.styles'
import { data } from '../../api/data'

const location = ({ item }) => (
  <Pressable onPress={() => console.warn(`Elemento: ${item.title}`)}>
    <View style={styles.itemContainer}>
      <Image source={item.images[0]} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  </Pressable>
)

export const LocationListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={data}
        renderItem={location}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
