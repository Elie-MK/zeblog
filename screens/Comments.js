import { View, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from 'react-native';

import { colors } from '../utilities/Color';
import CommentItem from '../components/CommentItem'
import CommentInput from '../components/CommentInput';
import { Androids } from '../utilities/Platform';


const Comments = ({navigation}) => {
  const [isCommented, setIsCommented]=useState(false)
  const [valueComments, setValueComments]=useState("")
  const [listOfComments, setListOfComments]=useState([1])

  


  const handleComments = ()=>{
    if(valueComments.length>0){
      setIsCommented(true)
      setTimeout(() => {
        setIsCommented(false)
        setListOfComments([...listOfComments, valueComments])
        setValueComments("")
      }, 1000);
    }else{
      alert("Please add a comment")
    }
  }

  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    behavior={Platform.select({ ios: 'padding', android: null })}
    style={{ flex: 1 }}
  >
      <View style={{flex:1, marginHorizontal:20, marginTop:Androids?30:20 }}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color={colors.black} />
          </TouchableOpacity>
          <Text style={{fontSize:20, fontWeight:"bold"}}>Comments (10)</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, marginTop:20 }}>
          {
            listOfComments.map((item, index)=><CommentItem  key={index} />)
          }
         
        </ScrollView>
        <View style={{marginTop:10, marginBottom:10}}>
          <CommentInput onChangeText={setValueComments} valueComments={valueComments} isCommented={isCommented} setIsCommented={handleComments}/>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}

export default Comments