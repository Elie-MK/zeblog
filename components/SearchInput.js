import { View, Text } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import { colors } from "../utilities/Color";

const SearchInput = ({
  onFocus,
  value,
  onChangeText,
  placeholder,
  disabled,
}) => {
  return (
    <Input
      placeholder={placeholder}
      inputContainerStyle={{
        padding: 3,
        borderColor: colors.gray,
        borderRadius: 7,
        backgroundColor: colors.gray,
      }}
      onFocus={onFocus}
      value={value}
      onChangeText={onChangeText}
      inputStyle={{ paddingLeft: 7, paddingRight: 7 }}
      leftIconContainerStyle={{ marginLeft: 10 }}
      leftIcon={<Feather name="search" size={24} color={"gray"} />}
      disabled={disabled}
    />
  );
};

export default SearchInput;
