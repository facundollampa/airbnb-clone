import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Carousel, Map } from '../../components'
import { COLORS } from '../../utils/theme'
import { styles } from './LocationDetailScreen.styles'

export const LocationDetailScreen = ({ route }) => {
  const { item } = route.params
  return (
    <ScrollView style={styles.container}>
      <Carousel images={item.images} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name='star' size={20} color={COLORS.primary} />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <Map
        title={item.title}
        latitude={item.locationCoordinates.latitude}
        longitude={item.locationCoordinates.longitude}
      />
    </ScrollView>
  )
}
