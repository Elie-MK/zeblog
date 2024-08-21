import { View, ImageBackground } from "react-native";
import React, { useEffect, useRef } from "react";
import Loading from "../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import verifyToken from "../utilities/VerifyToken";

const Welcome = ({ navigation }) => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current?.play();
    setTimeout(() => {
      AsyncStorage.getItem("alreadyLaunched").then((value) => {
        if (value !== null) {
          verifyToken(navigation);
        } else {
          navigation.replace("onboarding");
        }
      });

      animation.current?.pause();
    }, 3000);
  }, [navigation]);

  return (
    <View>
      <ImageBackground
        source={require("../assets/images/animateSplash.gif")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Loading
            animationRef={animation}
            styles={{ width: 170, height: 170 }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
