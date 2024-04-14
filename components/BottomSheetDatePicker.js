import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DatePicker from "@react-native-community/datetimepicker";
import { BottomSheet } from "@rneui/themed";
import { BlurView } from "expo-blur";
import { colors } from "../utilities/Color";

const BottomSheetDatePicker = ({date, handleDatePicker, isVisible, onBackdropPress}) => {
  const { height } = Dimensions.get("window");

  return (
    <BottomSheet isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <TouchableWithoutFeedback>
        <BlurView
          style={{ flex: 1, overflow: "hidden", height: height }}
          intensity={20}
        >
          <View
            style={{
              backgroundColor: colors.white,
              height: height / 2.6,
              bottom: 0,
              position: "absolute",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              borderTopStartRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <View>
              <TouchableOpacity
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
                onPress={onBackdropPress}
              >
                <Text
                  style={{
                    fontSize: 20,
                    paddingTop: 10,
                    marginBottom: -5,
                    fontWeight: "900",
                    color: colors.main,
                  }}
                >
                  OK
                </Text>
              </TouchableOpacity>
              <DatePicker
                style={{}}
                testID="dateTimePicker"
                display="inline"
                value={date}
                maximumDate={new Date()}
                minimumDate={new Date(1980, 0, 1)}
                accentColor={colors.main}
                mode="date"
                onChange={handleDatePicker}
              />
            </View>
          </View>
        </BlurView>
      </TouchableWithoutFeedback>
    </BottomSheet>
  );
};

export default BottomSheetDatePicker;
