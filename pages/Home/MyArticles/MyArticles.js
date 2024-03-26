import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../utilities/Color";
import SearchInput from "../../../components/SearchInput";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DraftArticles from "./DraftArticles";
import PublishedArticles from "./PublishedArticles";


const MyArticles = ({navigation}) => {
    const [isSearch, setIsSearch] = useState(false)

    const Top = createMaterialTopTabNavigator();


  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1, marginTop:20, marginHorizontal:15}}>
   <View>
   <View style={{flexDirection:"row", alignItems:"center", gap:10,  justifyContent:"space-between"}}>
      <View>
            <Image
              style={{ width: 120, height: 70 }}
              source={require("../../../assets/images/myArticle.png")}
            />
          </View>

      <TouchableOpacity  onPress={()=>setIsSearch(!isSearch)}>
          <AntDesign name="search1" size={25} color="black" />
        </TouchableOpacity>
    </View>

    {
        isSearch && 
          <SearchInput />
    }
       
   </View>

   <Top.Navigator
   sceneContainerStyle={{backgroundColor:colors.white}}
        screenOptions={({ route, navigation }) => ({
          
          tabBarLabel: ({ focused }) => {
            let label;
            if (route.name === "draft") {
              label = "Draft (14)";
            } else if (route.name === "published") {
              label = "Published (123)";
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
        <Top.Screen name="draft" component={DraftArticles} />
        <Top.Screen name="published" component={PublishedArticles} />
      </Top.Navigator>

    
    </View>
  </SafeAreaView>
  )
}

export default MyArticles