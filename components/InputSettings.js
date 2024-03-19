import { View, Text } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";

const InputSettings = ({title, onFocus, value}) => {
  return (
    <View>
      <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize:18 }}>{title}</Text>
      <Input onFocus={onFocus} value={value} />
    </View>
  );
};

export default InputSettings;
