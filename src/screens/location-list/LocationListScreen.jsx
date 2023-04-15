import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { SCREENS } from '../../utils/screens'
import { styles } from './LocationListScreen.styles'
// import { data } from '../../api/data'
import { SearchBar, LocationCard } from '../../components'
import { getLocationList } from '../../api/location.service'

export const LocationListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [locationList, setLocationList] = useState([])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredLocations = locationList.filter(location => (
    location.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  useEffect(() => {
    getLocationList()
      .then(data => {
        setLocationList(data)
      })
      .catch(err => console.log(err))
  }, [])

  const renderItem = ({ item }) => (
    <LocationCard
      location={item}
      onPress={() => navigation.navigate(SCREENS.LOCATION_DETAIL, { item })}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredLocations}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
