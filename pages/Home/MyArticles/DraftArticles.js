import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import DraftArticle from "../../../components/DraftArticle";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DraftArticles = () => {
  const [articlesSaved, setArticlesSaved] = useState(null);

  const getOldsArticle = async () => {
    try {
      const existingArticles = await AsyncStorage.getItem("oldsArticles");
      if (existingArticles !== null) {
        setArticlesSaved(JSON.parse(existingArticles));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOldsArticle();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View>
          {articlesSaved !== null && (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {articlesSaved?.length ?? 0} Article(s)
            </Text>
          )}
          {articlesSaved === null && (
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>No articles found</Text>
            </View>
          )}
        </View>
      </View>

      <FlatList
        data={articlesSaved}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginTop: 5 }}
        renderItem={({ item }) => (
          <View style={{ marginRight: 20, marginTop: 20 }}>
            <DraftArticle datas={item} />
          </View>
        )}
      />
    </View>
  );
};

export default DraftArticles;
