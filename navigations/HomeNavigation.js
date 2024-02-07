import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainHome from "../pages/Home/MainHome";
import HomeBottomNavigation from "./HomeBottomNavigation";

const HomeNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="bottomnavhome"
    >
      <Stack.Screen name="bottomnavhome" component={HomeBottomNavigation} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
