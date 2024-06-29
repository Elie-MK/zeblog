import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { colors } from "../../utilities/Color";
import CardArticles from "../../components/CardArticles";
import { Androids, fontSizeTitleAndroid } from "../../utilities/Platform";
import AnnounceHome from "../../components/AnnounceHome";
import { handleGetAllArticles, handleGetArticlesByUser, source } from "../../utilities/ApiRequestsService";

const MainHome = ({navigation}) => {
  const [articles, setArticles] = useState({
    userArticle:[], 
    recentArticle:[]
  });

  async function fetchUserArticle(){
    try {
     const response = await handleGetArticlesByUser()
     if(response.status === 200){
       setArticles((prevArticle)=>
         ({...prevArticle, userArticle:response.data})
       )
     }
    } catch (error) {
     console.log(error);
    }
   }

   async function fetchAllArticle(){
    try {
     const response = await handleGetAllArticles()
     if(response.status === 200){
       setArticles((prevArticle)=>
         ({...prevArticle, recentArticle:response.data})
       )
     }
    } catch (error) {
     console.log(error);
    }
   }

  useEffect(()=>{
    fetchAllArticle()
    fetchUserArticle()
  },[])

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
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={articles.recentArticle}
            keyExtractor={(item)=>item.idArticles}
            renderItem={({item})=>(
              <View style={{marginLeft:15}} key={item.idArticles}>
                <CardArticles datas={item} onPress={()=>navigation.navigate('viewArticle', {datas:item})} />
              </View>
            )}
            />
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
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={articles.userArticle}
            keyExtractor={(item)=>item.idArticles}
            renderItem={({item})=>(
              <View style={{marginLeft:15}} key={item.idArticles}>
                <CardArticles datas={item} onPress={()=>navigation.navigate('viewArticle', {datas:item})}  />
              </View>
            )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainHome;
