import { View, Text } from "react-native";
import React from "react";
import { colors } from "../utilities/Color";
import { FontAwesome5 } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Buttons from "./Buttons";
import { useNavigation } from "@react-navigation/native";

const ErrorItem = () => {
    const navigation = useNavigation()
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: colors.main,
            padding: 40,
            borderRadius: 70,
          }}
        >
          <MaterialIcons name="error" size={40} color={colors.white} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          marginBottom: -60,
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
            Signup failed
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginTop: 15,
            }}
          >
            An error occurred while signing up. Please try again later.
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Buttons title={"Try again"} onPress={()=>navigation.replace("login")} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ErrorItem;
