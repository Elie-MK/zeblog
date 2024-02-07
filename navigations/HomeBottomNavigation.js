import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainHome from "../pages/Home/MainHome";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HomeBottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="mainhome"
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={24} color="black" />
          ),
        }}
        component={MainHome}
      />
      <Tab.Screen
        name="discover"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="compass" size={24} color="black" />
          ),
        }}
        component={MainHome}
      />

      <Tab.Screen
        name="create"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="plus" size={24} color="black" />
          ),
        }}
        component={MainHome}
      />
      <Tab.Screen
        name="my articles"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text-outline" size={24} color="black" />
          ),
        }}
        component={MainHome}
      />
      <Tab.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color="black" />
          ),
        }}
        component={MainHome}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomNavigation;
