import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NotifGeneral from "../pages/Home/Notifications/NotifGeneral";
import NotifSystem from "../pages/Home/Notifications/NotifSystem";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utilities/Color";

const TopTabNavigation = () => {
  const Top = createMaterialTopTabNavigator();

  return (
    <>
      <SafeAreaView style={{ backgroundColor:colors.white}}>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:15}}>

        <View style={{flexDirection:"row", alignItems:"center", gap:15}}>
          <AntDesign name="arrowleft" size={25} color="black" />
          <Text style={{fontSize:20, fontWeight:"bold"}} >Notifications</Text>
        </View>
        <View>
          <Ionicons name="settings-outline" size={25} color="black" />
        </View>
        </View>
      </SafeAreaView>

      <Top.Navigator  screenOptions={({ route, navigation })=>({
        tabBarLabel:({focused})=>{
          let label;
          if(route.name === "general"){
            label = "General"
          }else if(route.name === "system"){
            label = "System"
          }
          return <Text style={{color:focused?colors.main:colors.gray, fontSize:16, fontWeight:"bold"}}>{label}</Text>
        },
        tabBarIndicatorStyle:{backgroundColor:colors.main, height:4},
      })} > 
        <Top.Screen name="general"  component={NotifGeneral} />
        <Top.Screen name="system" component={NotifSystem} />
      </Top.Navigator>
    </>
  );
};

export default TopTabNavigation;
