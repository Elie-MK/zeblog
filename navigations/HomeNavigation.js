import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainHome from "../pages/Home/MainHome";
import HomeBottomNavigation from "./HomeBottomNavigation";
import TopTabNavigation from "./TopTabNavigation";
import MyBookMark from "../pages/Home/Bookmark/MyBookMark";

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
      <Stack.Screen name="notification" component={TopTabNavigation} />
      <Stack.Screen name="bookmark" component={MyBookMark} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
