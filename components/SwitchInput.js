import { View, Text, Switch } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'

const SwitchInput = ({title, ...props}) => {
  return (
    <View style={{marginTop:20}}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
      <Text style={{fontSize:16, fontWeight:"500"}}>{title}</Text>
      <Switch thumbColor={colors.white}
            trackColor={{ true: colors.main }} {...props} />
      </View>
    </View>
  )
}

export default SwitchInput