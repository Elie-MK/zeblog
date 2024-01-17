import { View, Text } from 'react-native'
import React from 'react'
import {Button} from '@rneui/base'
import { colors } from '../utilities/Color'


const Buttons = ({title, buttonStyle, titleStyle, onPress}) => {
  return (
    <Button onPress={onPress} title={title} titleStyle={{fontWeight:"800"}} buttonStyle={{backgroundColor:colors.main, width:300, padding:15, borderRadius:20}} />
  )
}

export default Buttons