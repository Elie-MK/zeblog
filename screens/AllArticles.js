import { View, Text, FlatList, SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import NavHeader from "../components/NavHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utilities/Color";
import SecondCardArticles from "../components/SecondCardArticles";
import NoArticles from "../components/NoArticles";
import { getAllArticle } from "../utilities/AllUrlPathRequests";
import useGetRequestApi from "../hooks/useGetRequestApi";

const AllArticles = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { fetchDatas, datas } = useGetRequestApi(getAllArticle);
  function handleRefresh() {
    setIsRefreshing(true);
    fetchDatas()
      .then(() => {
        setIsRefreshing(false);
      })
      .catch(() => {
        setIsRefreshing(false);
      });
  }
  useEffect(() => {
    handleRefresh();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <NavHeader screenTitle={"Recent Article"}>
          <View style={{ marginTop: 20, flex: 1 }}>
            <View style={{ marginTop: 15, flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Sort by
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <Text style={{ color: colors.main, fontSize: 14 }}>
                    Most Popular
                  </Text>
                  <MaterialCommunityIcons
                    name="sort"
                    size={30}
                    color={colors.main}
                  />
                </View>
              </View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={datas}
                keyExtractor={(item) => item.idArticles}
                renderItem={({ item }) => (
                  <View style={{ marginTop: 15 }}>
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
                ListEmptyComponent={
                  <NoArticles title={"There no articles found"} />
                }
                onRefresh={handleRefresh}
                refreshing={isRefreshing}
              />
            </View>
          </View>
        </NavHeader>
      </View>
    </SafeAreaView>
  );
};

export default AllArticles;
