import { View, Animated } from "react-native";
import React, { useRef } from "react";
import { Button } from "@rneui/base";
import { colors } from "../utilities/Color";

const SkipAndNextButton = ({ scrollTo, scrollSkip }) => {
  // const progressAnimation = useRef(new Animated.Value(0)).current
  // const progressRef = useRef(null)
  return (
    <View style={{ flexDirection: "row", gap: 60 }}>
      <Button
        style={{
          margin: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
        }}
        containerStyle={{ width: 150 }}
        titleStyle={{ color: colors.main, fontWeight: "800" }}
        buttonStyle={{
          padding: 15,
          backgroundColor: colors.second,
          borderRadius: 20,
        }}
        title="Skip"
        onPress={scrollSkip}
      />
      <Button
        style={{
          margin: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
        }}
        containerStyle={{ width: 150 }}
        titleStyle={{ fontWeight: "800" }}
        buttonStyle={{
          backgroundColor: colors.main,
          padding: 15,
          borderRadius: 20,
        }}
        title="Next"
        onPress={scrollTo}
      />
    </View>
  );
};

export default SkipAndNextButton;
