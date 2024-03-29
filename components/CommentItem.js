import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../utilities/Color'
import { Octicons } from '@expo/vector-icons';
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import Animated, {useSharedValue,  useAnimatedStyle, withTiming } from 'react-native-reanimated'

const CommentItem = () => {
  
  const [isLiked, setIsLiked]=useState(false)

  const progress = useSharedValue(0)
  const scale = useSharedValue(0)


  const progressStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform:[{scale:scale.value}]
    };
  }, []);

  useEffect(()=>{
    progress.value = withTiming(1)
    scale.value = withTiming(1, {duration:700})
  },[])

  return (
    <Animated.View style={progressStyle}>
      <View style={{flexDirection:"row", alignItems:"center", gap:15}}>
        <Image
            resizeMode="contain"
            style={{ width: 60, height: 60, borderRadius: 50 }}
            source={require("../assets/images/vectorPeople.jpg")}
        />
        <Text style={{fontSize:18, fontWeight:"bold"}}>Elie Mulumba</Text>
      </View>
      <View style={{marginTop:10, marginBottom:10}}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        <View style={{flexDirection:"row", alignItems:"center", gap:25, marginTop:10}}>
            <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
                <TouchableOpacity onPress={()=>setIsLiked(!isLiked)}>
                    <Octicons name={isLiked?"heart-fill":"heart"} size={20} color={isLiked?colors.main:colors.gray} />
                </TouchableOpacity>
                <Text>35</Text>
            </View>
            <View style={{flexDirection:"row", alignSelf:"center"}}>
                <Text style={{color:colors.gray}}>3 days ago</Text>
            </View>
        </View>
      </View>
      <CardDivider />
    </Animated.View>
  )
}

export default CommentItem