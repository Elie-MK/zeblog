import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainHome from "../pages/Home/MainHome";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { colors } from "../utilities/Color";
import Discover from "../pages/Home/Discover/Discover";
import CreateArticles from "../pages/Home/CreateArticles/CreateArticles";
import MyArticles from "../pages/Home/MyArticles/MyArticles";
import ProfileOverallView from "../pages/Home/MyProfile/ProfileOverallView";

const HomeBottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    sceneContainerStyle={{backgroundColor:colors.white}}
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "mainhome") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "discover") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "myArticles") {
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
          tabBarStyle:{display:"none"}
          
        }}
        component={CreateArticles}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "My Articles",
        }}
        name="myArticles"
        component={MyArticles}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
        }}
        name="profile"
        component={ProfileOverallView}
        
      />
    </Tab.Navigator>
  );
};

export default HomeBottomNavigation;
