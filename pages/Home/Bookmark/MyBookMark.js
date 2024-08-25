import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../utilities/Color";
import CardArticles from "../../../components/CardArticles";
import SecondCardArticles from "../../../components/SecondCardArticles";
import { Androids } from "../../../utilities/Platform";
import useGetRequestApi from "../../../hooks/useGetRequestApi";
import { currentUserUrl } from "../../../utilities/AllUrlPathRequests";
import ActivityIndicatorGlobal from "../../../components/ActivityIndicatorGlobal";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import NoArticles from "../../../components/NoArticles";

const MyBookMark = ({ navigation }) => {
  const { datas, loading, fetchDatas } = useGetRequestApi(currentUserUrl);
  const favorites = useSelector((state) => state.setFavorite);

  const [isGrid, setIsGrid] = useState("nogrid");
  useEffect(() => {
    if (favorites.length === 1) {
      setIsGrid("nogrid");
    }
  }, [favorites]);

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 15 }}>
      <View style={{ flex: 1, marginTop: Androids ? 30 : 20 }}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color="black" />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                My Bookmarks
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("search")}>
                <AntDesign name="search1" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {favorites.length >= 1 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {favorites.length}{" "}
              {favorites.length >= 1 ? "Articles" : "Article"}
            </Text>

            {favorites.length > 1 && (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => setIsGrid("nogrid")}>
                  <Entypo
                    name="text-document-inverted"
                    size={30}
                    color={isGrid === "nogrid" ? colors.main : colors.gray}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsGrid("grid")}>
                  <Entypo
                    name="grid"
                    size={40}
                    color={isGrid === "grid" ? colors.main : colors.gray}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

        {loading && <ActivityIndicatorGlobal />}

        {!loading && datas && (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.idArticles.toString()}
            numColumns={isGrid === "nogrid" ? 1 : 2}
            showsVerticalScrollIndicator={false}
            {...(isGrid === "nogrid"
              ? null
              : {
                  columnWrapperStyle: {
                    flexDirection: "row",
                    justifyContent: "center",
                    marginLeft: 10,
                  },
                })}
            style={{ flex: 1, marginTop: 5 }}
            key={isGrid === "nogrid" ? "oneColumn" : "twoColumns"}
            renderItem={({ item }) => (
              <View
                style={{
                  marginRight: isGrid === "nogrid" ? 0 : 20,
                  marginTop: 20,
                }}
              >
                {isGrid === "nogrid" ? (
                  <SecondCardArticles
                    datas={item}
                    onPress={() =>
                      navigation.navigate("viewArticle", {
                        idArticle: item.idArticles,
                      })
                    }
                  />
                ) : (
                  <CardArticles
                    datas={item}
                    onPress={() =>
                      navigation.navigate("viewArticle", {
                        idArticle: item.idArticles,
                      })
                    }
                  />
                )}
              </View>
            )}
            ListEmptyComponent={
              <NoArticles title={"No favorite articles found"} />
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MyBookMark;
