import { View, Text } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../utilities/Color";

const InputGlobal = ({rightIcon, onFocus, value, onChangeText, placeholder, secure, disabled}) => {
  return (
      <Input
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
  );
};

export default InputGlobal;
