import { View, Text } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import { colors } from "../utilities/Color";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
        backgroundColor: colors.lightGray,
        borderBottomWidth: 0,
        width: "90%",
      }}
      onFocus={onFocus}
      value={value}
      onChangeText={onChangeText}
      inputStyle={{ paddingLeft: 7, paddingRight: 7 }}
      leftIconContainerStyle={{ marginLeft: 10 }}
      rightIconContainerStyle={{ marginRight: 10 }}
      leftIcon={<Feather name="search" size={24} color={colors.gray} />}
      rightIcon={() => (
        <TouchableOpacity>
          <FontAwesome name="remove" size={24} color={colors.gray} />
        </TouchableOpacity>
      )}
      disabled={disabled}
    />
  );
};

export default SearchInput;
