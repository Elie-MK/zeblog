import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainHome from "../pages/Home/MainHome";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utilities/Color";
import Discover from "../pages/Home/Discover/Discover";
import WriterDetail from "../screens/writer/WriterDetail";

const HomeBottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "mainhome") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "discover") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "my articles") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? colors.main : colors.gray}
            />
          );
        },
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.gray,
      })}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
        }}
        name="mainhome"
        component={MainHome}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Discover",
        }}
        name="discover"
        component={Discover}
      />

      <Tab.Screen
        name="create"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: colors.main,
                padding: 10,
                borderRadius: 22,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              <Entypo name="plus" size={24} color={colors.white} />
            </View>
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
        component={MainHome}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "My Articles",
        }}
        name="my articles"
        component={MainHome}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
        }}
        name="profile"
        component={WriterDetail}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomNavigation;
