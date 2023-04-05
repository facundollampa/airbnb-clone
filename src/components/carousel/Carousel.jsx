import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { styles } from './styles'

export function Carousel ({ images = [] }) {
  return (
    <View style={styles.imageContainer}>
      <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
        {images.map((image, idx) => (
          <Image key={idx} source={image} style={styles.image} resizeMode='cover' />
        ))}
      </ScrollView>
    </View>
  )
}
