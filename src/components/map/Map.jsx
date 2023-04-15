import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import React from 'react'
import { styles } from './Map.styles'

export const Map = ({ title, latitude, longitude }) => {
  const DELTA = 0.002

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
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
