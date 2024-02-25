import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../../utilities/Color";
import NotifGeneral from "../../pages/Home/Notifications/NotifGeneral";
import NotifSystem from "../../pages/Home/Notifications/NotifSystem";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@rneui/base";
import InfosWriter from "../../components/InfosWriter";
import ArticlesWriter from "./ArticlesWriter";
import AboutWriter from "./AboutWriter";


const WriterDetail = () => {
  const Top = createMaterialTopTabNavigator();
  const [isFollow, setIsFollow] = useState(false);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ marginHorizontal: 15 }}>
       <View>
       <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <TouchableOpacity>
              <Ionicons name="share-outline" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                size={25}
                color="black"
              />
            </TouchableOpacity>
          </View>
          
        </View>
       
      </View>

      <View style={{marginTop:20, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Image
            resizeMode="contain"
            style={{ width: 80, height: 80, borderRadius: 50 }}
            source={require("../../assets/images/vectorPeople.jpg")}
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Elie Doe</Text>
            <Text style={{ fontSize: 16, color: "gray", marginTop:5 }}>@elie_doe</Text>
          </View>
        </View>
        <TouchableOpacity >
        {isFollow ? (
          <Button
            titleStyle={{ fontWeight: "600" }}
            buttonStyle={{
              backgroundColor: colors.main,
              padding: 8,
              borderRadius: 22,
            }}
            title="Follow"
          />
        ) : (
          <Button
            buttonStyle={{
              backgroundColor: colors.white,
              padding: 8,
              borderRadius: 22,
              borderWidth:2, 
              borderColor:colors.main
            }}
            titleStyle={{color:colors.main}}
            title={"Following"}
          />
        )}
      </TouchableOpacity>
      </View>
      <View style={{marginTop:20, marginBottom:20,  borderTopWidth:1, borderBottomWidth:1, borderColor:colors.lightGray}}>
      <View style={{flexDirection:"row", justifyContent:"space-around", padding:15}}>
      <View >
          <InfosWriter numbers={"364"} texts={"articles"} />
        </View>
        <View style={{borderRightWidth:1, borderLeftWidth:1, borderColor:colors.lightGray}}>
        <View style={{marginLeft:30, marginRight:30}}>
        <InfosWriter numbers={"146"} texts={"following"} />
        </View>
        </View>
        <View>
        <InfosWriter numbers={"129,5K"} texts={"followers"} />
        </View>
      </View>
      </View>
       </View>

      <Top.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarLabel: ({ focused }) => {
            let label;
            if (route.name === "article") {
              label = "Article";
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
          tabBarStyle: { marginHorizontal: 15 },
        })}
      >
        <Top.Screen name="article" component={ArticlesWriter} />
        <Top.Screen name="about" component={AboutWriter} />
      </Top.Navigator>
    </SafeAreaView>
  );
};

export default WriterDetail;
