import React from 'react'
import { SCREENS } from '../../utils/screens'
import { LocationListScreen } from './LocationListScreen'
import { LocationDetailScreen } from '../location-detail/LocationDetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const LocationListStack = createNativeStackNavigator()

export const LocationListStackScreen = () => {
  return (
    <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
      <LocationListStack.Screen name={SCREENS.LIST} component={LocationListScreen} />
      <LocationListStack.Screen name={SCREENS.DETAILS} component={LocationDetailScreen} />
    </LocationListStack.Navigator>
  )
}
