import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { colors } from "../../utilities/Color";
import { Entypo } from "@expo/vector-icons";
import SecondCardArticles from "../../components/SecondCardArticles";
import CardArticles from "../../components/CardArticles";
import useGetRequestApi from "../../hooks/useGetRequestApi";
import ActivityIndicatorGlobal from "../../components/ActivityIndicatorGlobal";

const ArticlesWriter = ({ navigation }) => {
  const [isGrid, setIsGrid] = useState("nogrid");
  const urlGetArticleByUser = "articles/user/articles";
  const { datas, error, loading } = useGetRequestApi(urlGetArticleByUser);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {datas?.length} {datas?.length > 1 ? "Articles" : "Article"}
          </Text>
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
        </View>
        {loading && <ActivityIndicatorGlobal />}

        {!loading && datas && (
          <FlatList
            data={datas}
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
          />
        )}
      </View>
    </View>
  );
};

export default ArticlesWriter;
