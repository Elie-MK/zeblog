import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchInput from "../../../components/SearchInput";
import { AntDesign } from "@expo/vector-icons";
import SecondCardArticles from "../../../components/SecondCardArticles";
import { Androids } from "../../../utilities/Platform";
import useGetRequestApi from "../../../hooks/useGetRequestApi";

const MostPopular = ({ navigation }) => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [mostPopular, setMostPopular] = useState(null);
  const getAllArticle = "articles/all";
  const AllArticles = useGetRequestApi(getAllArticle);

  useEffect(() => {
    if (AllArticles.datas) {
      const mostPopular = AllArticles.datas?.filter(
        (article) => article?.likes?.length >= 1
      );
      setMostPopular(mostPopular);
    }
  }, [AllArticles.datas]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ marginHorizontal: 15, flex: 1, marginTop: Androids ? 30 : 20 }}
      >
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
                Most Popular
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setIsActiveSearch(!isActiveSearch)}
              >
                <AntDesign name="search1" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          {isActiveSearch && (
            <SearchInput placeholder={"Search by title or author"} />
          )}
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={mostPopular}
            keyExtractor={(item) => item.idArticles}
            renderItem={({ item }) => (
              <View style={{ marginLeft: 15 }} key={item.idArticles}>
                <SecondCardArticles
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
      </View>
    </SafeAreaView>
  );
};

export default MostPopular;
