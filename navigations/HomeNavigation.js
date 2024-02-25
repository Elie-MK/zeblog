import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainHome from "../pages/Home/MainHome";
import HomeBottomNavigation from "./HomeBottomNavigation";
import TopTabNavigation from "./TopTabNavigation";
import MyBookMark from "../pages/Home/Bookmark/MyBookMark";
import MostPopular from "../pages/Home/Discover/MostPopular";
import ExploreByTopic from "../pages/Home/Discover/ExploreByTopic";
import DetailArticlesByTopics from "../components/DetailArticlesByTopics";
import TopWriters from "../pages/Home/Discover/TopWriters";

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
      <Stack.Screen name="mostpopular" component={MostPopular} />
      <Stack.Screen name="exploretopic" component={ExploreByTopic} />
      <Stack.Screen name="articlesbytopics" component={DetailArticlesByTopics} />
      <Stack.Screen name="topwriters" component={TopWriters} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
