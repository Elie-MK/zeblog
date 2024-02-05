import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { Dialog } from "@rneui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../utilities/Color";
import Loading from "./Loading";

const ModalGlobal = ({isVisible,  onBackdropPress}) => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current?.play();
    // setTimeout(() => {
    // //   navigation.replace("onboarding");
    // //   animation.current?.pause()
    // }, 5000);
  }, []);
  return (
    <Dialog isVisible={true} onBackdropPress={onBackdropPress} overlayStyle={{ borderRadius: 22 }}>
      <View  style={{padding:20}}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: colors.main,
              padding: 40,
              borderRadius: 70,
            }}
          >
            <FontAwesome5 name="user-alt" size={40} color={colors.white} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            marginBottom:-60,
            justifyContent: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: colors.main,
                textAlign: "center",
              }}
            >
              Sign Up Successful!
            </Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                marginTop: 15,
              }}
            >
              Your account has been created. Please wait a moment we are
              preparing for you.
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Loading animationRef={animation} styles={{ width: 150 }} />
            </View>
          </View>
        </View>
      </View>
    </Dialog>
  );
};

export default ModalGlobal;
