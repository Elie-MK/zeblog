import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import { colors } from "../utilities/Color";

const ProgressBars = ({ value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 25,
        marginBottom: 20,
      }}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
      <ProgressBar
            style={{ width: "70%", height: 8, borderRadius: 20 }}
            progress={value}
            color={colors.main}
          />
    </View>
  );
};

export default ProgressBars;
