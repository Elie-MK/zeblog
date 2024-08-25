import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { colors } from "../../utilities/Color";
import CardArticles from "../../components/CardArticles";
import { Androids, fontSizeTitleAndroid } from "../../utilities/Platform";
import AnnounceHome from "../../components/AnnounceHome";
import useGetRequestApi from "../../hooks/useGetRequestApi";
import ActivityIndicatorGlobal from "../../components/ActivityIndicatorGlobal";
import ErrorFetching from "../../components/ErrorFetching";
import NoArticles from "../../components/NoArticles";
import { useFocusEffect } from "@react-navigation/native";
import {
  getAllArticle,
  urlGetArticleByUser,
} from "../../utilities/AllUrlPathRequests";

const MainHome = ({ navigation }) => {
  const [articles, setArticles] = useState({
    userArticle: [],
    recentArticle: [],
  });

  const { datas, error, loading, fetchDatas } =
    useGetRequestApi(urlGetArticleByUser);

  const AllArticles = useGetRequestApi(getAllArticle);
  useFocusEffect(
    useCallback(() => {
      fetchDatas();
      AllArticles.fetchDatas();
    }, [])
  );

  useEffect(() => {
    if (datas) {
      setArticles((prevArticle) => ({ ...prevArticle, userArticle: datas }));
    }
    if (AllArticles) {
      setArticles((prevArticle) => ({
        ...prevArticle,
        recentArticle: AllArticles.datas,
      }));
    }
  }, [datas, AllArticles.datas]);

  if (error && AllArticles.error) {
    let errorOccured;
    if (error) {
      errorOccured = fetchDatas;
    } else {
      errorOccured = AllArticles.fetchDatas;
    }
    return <ErrorFetching data={errorOccured} navigation={navigation} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ||
        (AllArticles.loading && (
          <View style={{ marginTop: 20 }}>
            <ActivityIndicatorGlobal />
          </View>
        ))}
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingBottom: 10,
          marginTop: Androids ? 30 : null,
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
          <TouchableOpacity onPress={() => navigation.navigate("notification")}>
            <Octicons name="bell" size={24} color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("bookmark")}>
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
            <Text
              style={{
                fontWeight: "bold",
                fontSize: Androids ? fontSizeTitleAndroid : 25,
              }}
            >
              Recent Articles
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("allArticles", {
                  datas: AllArticles.datas,
                })
              }
            >
              <Octicons name="arrow-right" size={24} color={colors.main} />
            </TouchableOpacity>
          </View>
          {articles?.recentArticle?.length < 1 && (
            <NoArticles title={"No articles found"} />
          )}
          {AllArticles.loading && <ActivityIndicatorGlobal />}
          {!AllArticles.loading && AllArticles.datas && (
            <View style={{ marginTop: 15 }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={articles.recentArticle}
                keyExtractor={(item) => item.idArticles}
                renderItem={({ item }) => (
                  <View style={{ marginLeft: 15 }} key={item.idArticles}>
                    <CardArticles
                      datas={item}
                      onPress={() =>
                        navigation.navigate("viewArticle", {
                          idArticle: item.idArticles,
                        })
                      }
                    />
                  </View>
                )}
              />
            </View>
          )}
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
            <Text
              style={{
                fontWeight: "bold",
                fontSize: Androids ? fontSizeTitleAndroid : 25,
              }}
            >
              Your Articles
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("myArticles")}>
              <Octicons name="arrow-right" size={24} color={colors.main} />
            </TouchableOpacity>
          </View>
          {articles?.userArticle?.length < 1 && (
            <NoArticles isMyArticle navigation={navigation} />
          )}
          {loading && <ActivityIndicatorGlobal />}
          <View style={{ marginTop: 15 }}>
            {!loading && datas && (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={articles.userArticle}
                keyExtractor={(item) => item.idArticles}
                renderItem={({ item }) => (
                  <View style={{ marginLeft: 15 }} key={item.idArticles}>
                    <CardArticles
                      datas={item}
                      onPress={() =>
                        navigation.navigate("viewArticle", {
                          idArticle: item.idArticles,
                        })
                      }
                    />
                  </View>
                )}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainHome;
