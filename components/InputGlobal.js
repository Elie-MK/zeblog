import { View, Text } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";

const InputGlobal = ({rightIcon, title,  keyboardType, onFocus, value, onChangeText, placeholder, secure, disabled}) => {
  return (
      <View>
        <Text style={{marginLeft:16, fontSize:16, fontWeight:"bold"}}>{title}</Text>
        <Input
      keyboardType={keyboardType}
        placeholder={placeholder}
        inputContainerStyle={{
          width:"auto",
          paddingBottom: 3,
        }}
        onFocus={onFocus}
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
