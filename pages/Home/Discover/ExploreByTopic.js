import { View, SafeAreaView } from "react-native";
import React from "react";
import NavHeader from "../../../components/NavHeader";
import CardTopics from "../../../components/CardTopics";
import { FlatList } from "react-native";
import NoArticles from "../../../components/NoArticles";

const ExploreByTopic = ({ navigation, route }) => {
  const { datas } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader screenTitle={"Explore by Topics"}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            gap: 10,
            marginTop: 25,
          }}
        >
          <FlatList
            numColumns={2}
            data={datas?.catDatas}
            renderItem={({ item }) => (
              <View key={item} style={{ marginTop: 15, marginRight: 10 }}>
                <CardTopics
                  catTitle={item}
                  data={datas?.datas}
                  onPress={() =>
                    navigation.navigate("articlesbytopics", {
                      data: { item, datas: datas.datas },
                    })
                  }
                />
              </View>
            )}
          />
        </View>
        {datas?.catDatas?.length < 1 && (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <NoArticles title={"No topics found"} />
          </View>
        )}
      </NavHeader>
    </SafeAreaView>
  );
};

export default ExploreByTopic;
