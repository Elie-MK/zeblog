import { View, FlatList } from 'react-native'
import React from 'react'

import FollowersItem from './FollowersItem';
import { FakeTopics } from '../utilities/FakeTopics';


const SearchWriterComponent = ({names, username, isFollow,onPress}) => {
  return (
        <FlatList 
        data={FakeTopics}
        keyExtractor={(item) => item.id.toString()}
      
        renderItem={({item}) => {
          return (
             <FollowersItem names={names} username={username} isFollow={isFollow} onPress={onPress} />
          )
        }}
        />
  )
}

export default SearchWriterComponent