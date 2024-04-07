import { View, Text } from 'react-native'
import React from 'react'
import { CheckBox } from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../utilities/Color';
import { TouchableOpacity } from 'react-native';


const LanguageItem = ({ language, setLanguage, titleLanguage }) => {

  return (
    <View >
      <TouchableOpacity onPress={() => setLanguage(titleLanguage)} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <Text style={{color:colors.black, fontSize:16, fontWeight:"500"}}>{titleLanguage}</Text>
        <CheckBox
           checked={language === titleLanguage}
           checkedIcon={<FontAwesome name="dot-circle-o" size={24} color={colors.main}/>}
           uncheckedIcon={<FontAwesome name="circle-o" size={24} color={colors.main}/>}
           containerStyle={{backgroundColor: "transparent", borderWidth: 0}}
         />
      </TouchableOpacity>
    </View>
  )
}

export default LanguageItem