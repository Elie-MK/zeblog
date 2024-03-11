import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { colors } from "../utilities/Color";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ActivityIndicatorGlobal from "./ActivityIndicatorGlobal";

const CommentInput = ({ isCommented, setIsCommented, valueComments, onChangeText }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <Image
        resizeMode="contain"
        style={{ width: 40, height: 40, borderRadius: 22 }}
        source={require("../assets/images/vectorPeople.jpg")}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{
            borderWidth: 2,
            width: 320,
            paddingBottom: 10,
            borderRadius: 5,
            paddingTop: 10,
            borderColor: colors.main,
            height: 50,
            paddingLeft: 15,
            paddingRight: 38,
          }}
          value={valueComments}
          onChangeText={(text)=>onChangeText(text)}
          multiline
          placeholder="Add a comment..."
        />
        {isCommented ? (
          <View style={{ marginLeft: -35 }}>
            <ActivityIndicatorGlobal />
          </View>
        ) : (
          <TouchableOpacity
            onPress={setIsCommented}
            activeOpacity={0.5}
            style={{ marginLeft: -35 }}
          >
            <FontAwesome name="send" size={20} color={colors.main} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CommentInput;
