import { Animated, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'

const Paginator = ({data, scrollX}) => {
    const {width} = useWindowDimensions()

  return (
    <View  style={{flexDirection:"row", height:64}}>
      {data.map((_, i)=>{
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width ]
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange:[10, 35, 10],
            extrapolate:"clamp"
        })

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange:[0.3, 1, 0.3],
            extrapolate:"clamp"
        
        })
        return <Animated.View style={[styles.dot, {width:dotWidth, opacity}]} key={i.toString()}/>
      })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    dot:{
        height:10, 
        borderRadius:5, 
        backgroundColor:colors.main, 
        marginHorizontal:8
    }
})