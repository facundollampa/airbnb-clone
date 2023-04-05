import React from 'react'
import { LocationListScreen } from './LocationListScreen'
import { LocationDetailScreen } from '../location-detail/LocationDetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const LocationListStack = createNativeStackNavigator()

export const LocationListStackScreen = () => {
  return (
    <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
      <LocationListStack.Screen name='ExplorarLista' component={LocationListScreen} />
      <LocationListStack.Screen name='Detalle' component={LocationDetailScreen} />
    </LocationListStack.Navigator>
  )
}
