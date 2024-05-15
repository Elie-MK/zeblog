import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { colors } from "../utilities/Color";
import { Androids } from "../utilities/Platform";
import ActivityIndicatorGlobal from "./ActivityIndicatorGlobal";

const Buttons = ({ title, onPress, disabled, isLoading }) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      activeOpacity={0.8}
      titleStyle={{ fontWeight: "800", fontSize:15 }}
      disabled={disabled}
      buttonStyle={{
        backgroundColor: colors.main,
        padding: 15,
        marginBottom:Androids?20:null,
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
      loading={isLoading}
      disabledStyle={{backgroundColor:colors.mainSecond}}
    />
  );
};

export default Buttons;
