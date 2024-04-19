import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from "@rneui/base";
import { colors } from '../utilities/Color';

const ButtonWithIcon = ({title, img, onPress}) => {
  return (
    <Button
      buttonStyle={{ width: 300, padding:15, borderRadius:15, borderColor:colors.black }}
      containerStyle={{ margin: 5 }}
      type="outline"
      onPress={onPress}
      icon={<Image resizeMode='contain' style={{width:20, height:20}} source={img} />}
    //   iconContainerStyle={{ background: "#000" }}
    style={{marginTop:5}}
      title={title}
      titleStyle={{ marginHorizontal: 10, color:colors.black, fontWeight:"bold", fontSize:15 }}
    />

  )
}

export default ButtonWithIcon