import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'

const InfosWriter = ({numbers, texts}) => {
  return (
    <View>
    <Text style={{fontSize:20, fontWeight:"bold"}}>{numbers}</Text>
    <Text style={{marginTop:10, fontSize:16, textAlign:"center", color:colors.gray, fontWeight:"600"}}>{texts}</Text>
  </View>
  )
}

export default InfosWriter