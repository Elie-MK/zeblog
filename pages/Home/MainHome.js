import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { colors } from "../../utilities/Color";
import CardArticles from "../../components/CardArticles";
import { Androids, fontSizeTitleAndroid } from "../../utilities/Platform";
import AnnounceHome from "../../components/AnnounceHome";

const MainHome = ({navigation}) => {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingBottom:10,
          marginTop:Androids?30:null
        }}
      >
        <View>
          <View>
            <Image
              style={{ width: 120, height: 70 }}
              source={require("../../assets/images/secondLogo.png")}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <TouchableOpacity onPress={()=>navigation.navigate('notification')} >
          <Octicons name="bell" size={24} color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('bookmark')}>
          <MaterialCommunityIcons
            name="bookmark-minus-outline"
            size={30}
            color={colors.gray}
          />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/* Announce */}
       <AnnounceHome />

        {/* Recent Articles */}
        <View style={{ flex: 1, marginLeft: 20, marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: Androids?fontSizeTitleAndroid:25 }}>
              Recent Articles
            </Text>
            <Octicons name="arrow-right" size={24} color={colors.main} />
          </View>
          <View style={{ marginTop: 15 }}>
            <CardArticles onPress={()=>navigation.navigate('viewArticle')} />
          </View>
        </View>

        {/* Your Article */}
        <View style={{ flex: 1, marginLeft: 20, marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: Androids?fontSizeTitleAndroid:25 }}>
              Your Articles
            </Text>
            <Octicons name="arrow-right" size={24} color={colors.main} />
          </View>
          <View style={{ marginTop: 15 }}>
            <CardArticles />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainHome;
