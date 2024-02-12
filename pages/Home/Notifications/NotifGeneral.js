import { View, Text, Image } from 'react-native'
import React from 'react'
import { colors } from '../../../utilities/Color'
import EmptyNotification from '../../../components/EmptyNotification'
import ItemNotifGeneral from '../../../components/ItemNotifGeneral'

const NotifGeneral = () => {
  return (
    <View style={{flex:1, backgroundColor:colors.white }}>
   {/* <EmptyNotification /> */}
   <View style={{flex:1, marginHorizontal:15, marginTop:20}}>
   <ItemNotifGeneral />
   </View>
    </View>
  )
}

export default NotifGeneral