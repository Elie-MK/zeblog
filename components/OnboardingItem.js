import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'

const OnboardingItem = ({item}) => {
    const {width} = useWindowDimensions()
  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={[styles.images, {width, resizeMode:'contain'}]} />
        <View style={{flex:0.3}}>
            <Text style={{fontWeight:"800", fontSize:28, marginBottom:10, textAlign:"center"}}>{item.title}</Text>
            <Text style={{fontWeight:"300", textAlign:"center", paddingHorizontal:64}}>{item.description}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }, 
    images:{
        flex:0.7,
        justifyContent:"center",
    }
})

export default OnboardingItem