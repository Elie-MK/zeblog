import { View, Text } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";
import { colors } from "../utilities/Color";

const InputGlobal = ({
  rightIcon,
  isError,
  title,
  onBlur,
  keyboardType,
  focus,
  errorMessage,
  value,
  onChangeText,
  placeholder,
  secure,
  disabled,
}) => {
  return (
    <View>
      <Input
        label={title}
        labelStyle={{ marginLeft: 5, fontSize: 14, fontWeight: "bold" }}
        onBlur={onBlur}
        keyboardType={keyboardType}
        placeholder={placeholder}
        inputContainerStyle={{
          width: "auto",
          paddingBottom: 3,
          borderBottomColor: colors.main,
          borderBottomWidth: 1.5,
        }}
        onFocus={focus}
        value={value}
        onChangeText={onChangeText}
        inputStyle={{ paddingLeft: 7, paddingRight: 7, fontSize: 14 }}
        rightIcon={rightIcon}
        secureTextEntry={secure}
        disabled={disabled}
        errorMessage={isError && errorMessage}
      />
    </View>
  );
};

export default InputGlobal;
