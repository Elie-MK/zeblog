import { View, Text } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const EmptyData = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LottieView
        autoPlay
        style={{ width: 170, height: 180 }}
        source={require("../utilities/noDataAnimation.json")}
      />
    </View>
  );
};

export default EmptyData;
