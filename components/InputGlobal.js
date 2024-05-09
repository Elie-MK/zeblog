import { View, Text } from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/themed";
import { colors } from "../utilities/Color";

const InputGlobal = ({rightIcon, isError, title, onBlur,  keyboardType, focus, errorMessage, value, onChangeText, placeholder, secure, disabled}) => {

  return (
      <View>
        <Text style={{marginLeft:16, fontSize:14, fontWeight:"bold"}}>{title}</Text>
        <Input
        onBlur={onBlur}
      keyboardType={keyboardType}
        placeholder={placeholder}
        inputContainerStyle={{
          width:"auto",
          paddingBottom: 3,
          borderBottomColor: colors.main, 
          borderBottomWidth:1.5,
        }}
        onFocus={focus}
        value={value}
        onChangeText={onChangeText}
        inputStyle={{ paddingLeft: 7, paddingRight: 7, fontSize:14 }}
        rightIcon={rightIcon}
        secureTextEntry={secure}
        disabled={disabled}
      />
      {isError && <Text style={{marginLeft:16, fontSize:14, marginTop:-16, marginBottom:15, color:'red'}}>{errorMessage}</Text>}
      </View>
  );
};

export default InputGlobal;
