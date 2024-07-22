import { View, Text } from "react-native";
import React from "react";
import Buttons from "./Buttons";
import { CommonActions, useRoute } from "@react-navigation/native";

const ErrorFetching = ({ navigation, data }) => {
  const route = useRoute();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 15 }}>
          Problem with your network please verify that and try again !
        </Text>
        <Buttons title={"Try Again"} onPress={data} />

        {route.name !== "mainhome" && (
          <Buttons
            title={"Home"}
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "home" }],
                })
              )
            }
          />
        )}
      </View>
    </View>
  );
};

export default ErrorFetching;
