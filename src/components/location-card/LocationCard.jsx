import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { styles } from './LocationCard.styles'

export const LocationCard = ({ location, onPress }) => (
  <Pressable onPress={onPress}>
    <View style={styles.itemContainer}>
      <Image source={{ uri: `https://drive.google.com/uc?id=${location.images[0]}` }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{location.title}</Text>
      <Text style={styles.itemPrice}>{location.price}</Text>
    </View>
  </Pressable>
)
