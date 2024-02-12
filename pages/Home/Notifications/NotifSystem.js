import { View, Text, Image } from 'react-native'
import React from 'react'
import { colors } from '../../../utilities/Color'
import EmptyNotification from '../../../components/EmptyNotification'
import ItemNotifSystem from '../../../components/ItemNotifSystem'

const NotifSystem = () => {
  return (
    <View style={{flex:1, backgroundColor:colors.white }}>
      {/* <EmptyNotification /> */}
      <View style={{flex:1,  marginTop:20, marginHorizontal:15}}>
      <ItemNotifSystem />
      </View>
  </View>
  )
}

export default NotifSystem