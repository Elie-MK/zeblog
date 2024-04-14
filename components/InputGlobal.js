import { View, Text } from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/themed";
import { colors } from "../utilities/Color";

const InputGlobal = ({rightIcon, title,  keyboardType, nameInput, value, onChangeText, placeholder, secure, disabled}) => {
  const [isFocused, setIsFocused] = useState("");
  
  const handleOnFocus = ()=>{
    setIsFocused(nameInput)
  }
  console.log(isFocused, nameInput);

  return (
      <View>
        <Text style={{marginLeft:16, fontSize:16, fontWeight:"bold"}}>{title}</Text>
        <Input
      keyboardType={keyboardType}
        placeholder={placeholder}
        inputContainerStyle={{
          width:"auto",
          paddingBottom: 3,
          borderBottomColor: colors.main, 
          borderBottomWidth:1.5,
        }}
        onFocus={handleOnFocus}
        value={value}
        onChangeText={onChangeText}
        inputStyle={{ paddingLeft: 7, paddingRight: 7 }}
        rightIcon={rightIcon}
        secureTextEntry={secure}
        disabled={disabled}
      />
      </View>
  );
};

export default InputGlobal;
