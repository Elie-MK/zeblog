import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { colors } from "../../../utilities/Color";
import ProfileItem from "../../../components/ProfileItem";
import ArticlesWriter from "../../../screens/writer/ArticlesWriter";
import AboutWriter from "../../../screens/writer/AboutWriter";
import { Androids } from "../../../utilities/Platform";
import useGetRequestApi from "../../../hooks/useGetRequestApi";
import ActivityIndicatorGlobal from "../../../components/ActivityIndicatorGlobal";
import { currentUserUrl } from "../../../utilities/AllUrlPathRequests";

const ProfileOverallView = ({ navigation }) => {
  const Top = createMaterialTopTabNavigator();
  const { datas, error, loading, fetchDatas } =
    useGetRequestApi(currentUserUrl);

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      {loading && (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicatorGlobal />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          marginTop: Androids ? 20 : null,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <View>
          <Image
            style={{ width: 120, height: 80 }}
            source={require("../../../assets/images/profile.png")}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <TouchableOpacity>
            <Ionicons name="share-outline" size={30} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <Octicons name="gear" size={24} color={colors.black} />
          </TouchableOpacity>
        </View>
      </View>
      <ProfileItem
        onPress={() => navigation.navigate("editprofile")}
        datas={datas}
      />
      <Top.Navigator
        sceneContainerStyle={{ backgroundColor: colors.white }}
        screenOptions={({ route, navigation }) => ({
          tabBarLabel: ({ focused }) => {
            let label;
            if (route.name === "article") {
              label = "Articles";
            } else if (route.name === "about") {
              label = "About";
            }
            return (
              <Text
                style={{
                  color: focused ? colors.main : colors.gray,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {label}
              </Text>
            );
          },
          tabBarIndicatorStyle: { backgroundColor: colors.main, height: 4 },
        })}
      >
        <Top.Screen name="article" component={ArticlesWriter} />
        <Top.Screen name="about" component={AboutWriter} />
      </Top.Navigator>
    </SafeAreaView>
  );
};

export default ProfileOverallView;
