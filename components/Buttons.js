import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { colors } from "../utilities/Color";

const Buttons = ({ title, onPress, disabled }) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      activeOpacity={0.8}
      titleStyle={{ fontWeight: "800" }}
      disabled={disabled}
      buttonStyle={{
        backgroundColor: colors.main,
        padding: 15,
        borderRadius: 7,
      }}
      style={{
        margin: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
      }}
    />
  );
};

export default Buttons;
