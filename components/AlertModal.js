import {
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import AlertSuccessItem from "./AlertSuccessItem";
import AlertErrorItem from "./AlertErrorItem";
import { BlurView } from "expo-blur";
import { BottomSheet } from "@rneui/themed";

const { height } = Dimensions.get("window");

const AlertModal = ({
  alertType,
  message,
  title,
  messageSuccess,
  isVisible,
  onDismiss,
}) => {
  return (
    <BottomSheet isVisible={isVisible} onDismiss={onDismiss}>
      <TouchableWithoutFeedback onPress={onDismiss}>
        <BlurView
          style={{
            flex: 1,
            overflow: "hidden",
            height: height,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          intensity={20}
        >
          {alertType == "success" ? (
            <AlertSuccessItem />
          ) : (
            <AlertErrorItem
              onDismiss={onDismiss}
              errorMessage={message}
              errorTitle={title}
            />
          )}
        </BlurView>
      </TouchableWithoutFeedback>
    </BottomSheet>
  );
};

export default AlertModal;
