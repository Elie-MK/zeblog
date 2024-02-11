import { View, Text, Image } from 'react-native'
import React from 'react'
import { colors } from '../../../utilities/Color'
import EmptyNotification from '../../../components/EmptyNotification'

const NotifGeneral = () => {
  return (
    <View style={{flex:1, backgroundColor:colors.white }}>
   <EmptyNotification />
    </View>
  )
}

export default NotifGeneral