import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackScreen } from './src/screens/location-list/MainStackScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LocationDetailScreen } from './src/screens/location-detail/LocationDetailScreen'
import { LocationDetailWebScreen } from './src/screens/location-detail/LocationDetailWebScreen'
import { UserProvider } from './src/contexts/UserContext'
import { SCREENS } from './src/utils/screens'

const LocationListStack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
            {/* //Pantallas con Tab */}
            <LocationListStack.Screen name={SCREENS.MAIN} component={MainStackScreen} />
            {/* //Pantallas sin Tab */}
            <LocationListStack.Screen name={SCREENS.LOCATION_DETAIL} component={LocationDetailScreen} />
            <LocationListStack.Screen name={SCREENS.LOCATION_DETAIL_WEB} component={LocationDetailWebScreen} />
          </LocationListStack.Navigator>
        </NavigationContainer>
      </UserProvider>

      <StatusBar style='auto' />
    </>
  )
}
