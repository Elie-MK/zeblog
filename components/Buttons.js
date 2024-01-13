import { View, Text } from 'react-native'
import React from 'react'
import {Button} from '@rneui/base'


const Buttons = ({title, buttonStyle, titleStyle}) => {
  return (
    <Button title={title} titleStyle={titleStyle} buttonStyle={buttonStyle} />
  )
}

export default Buttons