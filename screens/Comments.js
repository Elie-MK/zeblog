import { View, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native'
import React from 'react'
import CommentItem from '../components/CommentItem'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { colors } from '../utilities/Color';
import { ScrollView } from 'react-native';
import CommentInput from '../components/CommentInput';
import { SafeAreaView } from 'react-native-safe-area-context';


const Comments = ({navigation}) => {
  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    behavior={Platform.select({ ios: 'padding', android: null })}
    style={{ flex: 1 }}
  >
      <View style={{flex:1, marginHorizontal:20, marginTop:20 }}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color={colors.black} />
          </TouchableOpacity>
          <Text style={{fontSize:20, fontWeight:"bold"}}>Comments (10)</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, marginTop:20 }}>
          {
            [1,2,3,4,5,6,7,8,9,10].map((item, index)=><CommentItem key={index} />)
          }
         
        </ScrollView>
        <View style={{marginTop:10, marginBottom:10}}>
          <CommentInput />
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}

export default Comments