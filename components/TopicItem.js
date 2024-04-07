import { Text } from "react-native";
import React from "react";
import { colors } from "../utilities/Color";
import { TouchableOpacity } from "react-native";

const TopicItem = ({ select, onPress, names, items }) => {
  const isSelected = select.includes(items.title);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={{
        borderWidth: 2,
        marginLeft: 8,
        padding: 10,
        borderRadius: 22,
        borderColor: colors.main,
        backgroundColor: isSelected ? colors.main : colors.white,
      }}
    >
      <Text
        style={{ fontSize: 16, fontWeight:isSelected?"bold":"normal", color: isSelected ? colors.white : colors.main }}
      >
        {names}
      </Text>
    </TouchableOpacity>
  );
};

export default TopicItem;
