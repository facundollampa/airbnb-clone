import React, { useContext } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { styles } from './LocationDetailScreen.styles'
import { Ionicons } from '@expo/vector-icons'
import { Carousel, Map } from '../../components'
import { COLORS } from '../../utils/theme'
import { Link } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'

export const LocationDetailScreen = ({ route }) => {
  const { item } = route.params
  const { currentUser } = useContext(UserContext)

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
        {currentUser && (
          <Link style={styles.webButton} to={{ screen: 'LocationDetailWeb', params: { url: item.url } }}>
            Ir a la web
          </Link>
        )}
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
