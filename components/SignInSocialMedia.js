import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { colors } from "../utilities/Color";

const SignInSocialMedia = ({ onPress, image }) => {
  const SocialMedias = [
    {
      id: 1,
      name: "Google",
      image: require("../assets/images/icons/google.png"),
    },
    {
      id: 2,
      name: "Facebook",
      image: require("../assets/images/icons/apple.png"),
    },
    {
      id: 3,
      name: "Twitter",
      image: require("../assets/images/icons/facebook.png"),
    },
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
     {
        SocialMedias.map(({image, id})=>(
            <TouchableOpacity
            key={id}
            onPress={onPress}
            activeOpacity={0.5}
            style={{
              borderWidth: 1,
              width: 120,
              borderRadius: 20,
              borderColor: colors.lightGray,
              padding: 8,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image style={{ width: 30, height: 30 }} source={image} />
          </TouchableOpacity>
        ))
     }
    </View>
  );
};

export default SignInSocialMedia;
