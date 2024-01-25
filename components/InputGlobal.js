import { View, Text } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';

const InputGlobal = ({rightIcon, value, onChangeText, placeholder, secure}) => {
  return (
      <Input
        placeholder={placeholder}
        inputContainerStyle={{
          width: 300,
          padding: 3,
          borderWidth: 1,
          borderRadius: 5,
        }}
        value={value}
        onChangeText={onChangeText}
        inputStyle={{ paddingLeft: 7, paddingRight: 7 }}
        rightIcon={rightIcon}
        secureTextEntry={secure}
      />
  );
};

export default InputGlobal;
