import { View, Text, Image } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'
import { Avatar, Badge } from '@rneui/themed';


const ItemNotifGeneral = () => {
  return (
  <View style={{flexDirection:"row", justifyContent:"center"}}>
      <View style={{flexDirection:"row", alignItems:"center",  gap:15 }}>
      <Avatar
          size="medium"
          rounded
          source={require('../assets/images/vectorPeople.jpg')}
        >
             <Badge
            // status="warning"
            badgeStyle={{width:15, height:15, borderRadius:45, backgroundColor:colors.main}}
            containerStyle={{ position: 'absolute', top: 33, left: 35, }}
          />
        </Avatar>
      {/* <Image style={{width:50, height:50, borderRadius:22}} source={require('../assets/images/vectorPeople.jpg')} /> */}
    <View style={{width:180}}>
        <Text style={{fontSize:16, fontWeight:"bold"}}>Jane Cooper has published a new article</Text>
        <Text style={{marginTop:10, color:colors.gray, fontWeight:"600"}}>Today | 09:24 AM</Text>
    </View>
    <View>
      <Image style={{width:75, height:75, borderRadius:10}} source={require('../assets/images/exemple.jpg')} />
    </View>
    </View>
  </View>
  )
}

export default ItemNotifGeneral