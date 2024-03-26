import { View, Text, Dimensions } from "react-native";
import React from "react";
import { BottomSheet } from "@rneui/themed";
import { colors } from "../utilities/Color";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import { BlurView } from "expo-blur";
import { TouchableWithoutFeedback } from "react-native";

const BottomSheetModal = ({
  isVisible,
  onBackdropPress,
  onDismiss,
  children,
  title,
}) => {
  const { height } = Dimensions.get("window");
  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      onDismiss={onDismiss}
    >
      <TouchableWithoutFeedback onPress={onBackdropPress}>
        <BlurView
          style={{ flex: 1, overflow: "hidden", height: height }}
          intensity={20}
        >
          <View
            style={{
              backgroundColor: colors.white,
              height: height / 3.5,
              bottom: 0,
              position: "absolute",

              width: "100%",
              borderTopStartRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <View style={{ marginHorizontal: 20, marginTop: 25 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 15,
                }}
              >
                {title}
              </Text>
              <CardDivider />
              {children}
            </View>
          </View>
        </BlurView>
      </TouchableWithoutFeedback>
    </BottomSheet>
  );
};

export default BottomSheetModal;
