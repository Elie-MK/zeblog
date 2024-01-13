import { View, Text, SafeAreaView, Image, ImageBackground } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import Loading from "../components/Loading";

const Welcome = ({ navigation }) => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current?.play()
    setTimeout(() => {
      navigation.replace("onboarding");
      animation.current?.pause()
    }, 3000);
  }, []);
  
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
            styles={{ width: 170,
                height: 170,}}
            />
       
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
