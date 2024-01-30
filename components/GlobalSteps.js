import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Slider, Icon } from "@rneui/base";
import { colors } from "../utilities/Color";
import Buttons from "./Buttons";

const GlobalSteps = ({children, value}) => {
  return (
    <SafeAreaView style={{flex:1, marginHorizontal: 20,}}>
      <View style={{ flexDirection:"row", alignItems:"center", gap:60 }}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Slider
          animateTransitions
          animationType="timing"
          maximumTrackTintColor={colors.gray}
          maximumValue={100}
          minimumTrackTintColor={colors.main}
          minimumValue={0}
          onSlidingComplete={() => console.log("onSlidingComplete()")}
          onSlidingStart={() => console.log(alert('stop'))}
          onValueChange={(value) => console.log(alert('stop'), value)}
          orientation="horizontal"
          step={1}
          style={{ width: "70%"}}
          thumbStyle={{ height: 1, width: 2 }}
         
          trackStyle={{ height: 10, borderRadius: 20 }}
          value={value}
        />
      </View>
        {children}
    </SafeAreaView>
  );
};

export default GlobalSteps;
