import React from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './LocationListScreen.styles'
import { data } from '../../api/data'

function LocationCard ({ location, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.itemContainer}>
        <Image source={location.images[0]} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{location.title}</Text>
        <Text style={styles.itemPrice}>{location.price}</Text>
      </View>
    </Pressable>
  )
}

export const LocationListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <LocationCard
      location={item}
      onPress={navigation.navigate('Detalle', { item })}
    />
  )

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
