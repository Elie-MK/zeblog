import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Slider, Icon } from "@rneui/base";
import { colors } from "../utilities/Color";
import Buttons from "./Buttons";
import { ProgressBar } from "react-native-paper";

const GlobalSteps = ({ children, value }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
          <ProgressBar
            style={{ width: "70%", height: 8, borderRadius: 20 }}
            progress={value}
            color={colors.main}
          />
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default GlobalSteps;
