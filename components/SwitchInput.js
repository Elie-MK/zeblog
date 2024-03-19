import { View, Text, Switch } from 'react-native'
import React from 'react'

const SwitchInput = ({title, ...props}) => {
  return (
    <View style={{marginTop:20}}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
      <Text style={{fontSize:16, fontWeight:"500"}}>{title}</Text>
      <Switch {...props} />
      </View>
    </View>
  )
}

export default SwitchInput