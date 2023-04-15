import MapView, { Marker } from 'react-native-maps'
import React from 'react'
import { styles } from './styles'

export function Map ({ title, latitude, longitude }) {
  const DELTA = 0.002

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: DELTA,
        longitudeDelta: DELTA
      }}
    >
      <Marker
        coordinate={{
          latitude,
          longitude
        }}
        title={title}
      />
    </MapView>
  )
}
