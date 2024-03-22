import { View, Text } from "react-native";
import React from "react";
import { SearchBar } from '@rneui/themed';
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
      <SearchBar
      placeholder={placeholder}
      containerStyle={{
        padding: 3,
        borderColor: colors.gray,
        borderRadius: 7,
        backgroundColor: colors.subGray,
        borderBottomWidth: 0,
        width: "auto",
      }}
      lightTheme={true}
      showCancel={true}
      inputContainerStyle={{backgroundColor:colors.subGray}}
      onFocus={onFocus}
      value={value}
      onChangeText={onChangeText}
      leftIconContainerStyle={{ marginLeft: 10 }}
      rightIconContainerStyle={{ marginRight: 10 }}
    searchIcon={<Feather name="search" size={24} color={colors.gray} />}
      clearIcon={<FontAwesome name="remove" size={24} color={colors.gray} />}
      disabled={disabled}
    />
  );
};

export default SearchInput;
