import { View, Text, Image } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'

const EmptyNotification = () => {
  return (
    <View style={{flex:1, flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
    <View>
       <View style={{flexDirection:"row", justifyContent:"center",marginBottom:20}}>
       <Image style={{width:300, height:300}} source={require('../assets/images/empty.png')} />
       </View>
       <View >
       <Text style={{fontSize:20, fontWeight:"bold", textAlign:"center"}}>Empty</Text>
     <Text style={{color:colors.gray, fontSize:18, textAlign:"center", marginTop:10}}>You don't have any notification at this time</Text>
       </View>
    </View>
     </View>
  )
}

export default EmptyNotification