import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../utilities/Color";

const CategoryArticle = ({ title, selected, onPress, ...props }) => {
  return (
    <TouchableOpacity
        {...props}
      activeOpacity={0.5}
      style={{
        padding: 15,
        backgroundColor: selected == title ? colors.main : colors.subGray,
        borderRadius: 10,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: selected == title ? colors.white : colors.black,
          fontWeight: selected == title ? 600 : 400,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryArticle;
