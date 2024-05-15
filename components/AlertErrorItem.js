import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'
import { Entypo } from '@expo/vector-icons'

const AlertErrorItem = ({errorTitle, errorMessage, onDismiss }) => {
  return (
    <View style={{backgroundColor:colors.white, width:"80%", borderRadius:10}}>
      <View style={{marginHorizontal:20, marginVertical:20}}>
        <TouchableOpacity onPress={onDismiss} style={{flexDirection:"row", justifyContent:"flex-end"}}>
          <Entypo name="circle-with-cross" size={24} color={colors.gray} />
        </TouchableOpacity>
        <View style={{flexDirection:"row", justifyContent:"center"}}>
          <View>
          <View style={{backgroundColor:colors.subGray, padding:15, borderRadius:99}}>
            <Image source={require('../assets/images/icons/warning.png')} style={{height:60, width:60, padding:15}} />
          </View>
          </View>
        </View>
        <View style={{marginTop:20}}>
          <Text style={{textAlign:"center", fontSize:20, fontWeight:"bold", color:colors.gray}}>{errorTitle}</Text>
          <Text style={{textAlign:"center", fontSize:14, marginTop:15, color:colors.gray}}>{errorMessage}</Text>
          </View>
      </View>
    </View>
  )
}

export default AlertErrorItem