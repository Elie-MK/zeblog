import { View, Text } from "react-native";
import React from "react";
import Buttons from "./Buttons";

const NoArticles = ({ isMyArticle, navigation, title }) => {
  return (
    <View style={{ flex: 1 }}>
      {isMyArticle ? (
        <View
          style={{
            flex: 1,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 14 }}>You have no articles yet.</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Buttons
              onPress={() => navigation.navigate("create")}
              title={"Create your first article"}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 14 }}>{title}</Text>
        </View>
      )}
    </View>
  );
};

export default NoArticles;
