import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import NavHeader from "../../../components/NavHeader";
import PeopleFollowItem from "../../../components/PeopleFollowItem";
import { colors } from "../../../utilities/Color";
import NoArticles from "../../../components/NoArticles";

const TopWriters = ({ navigation, route }) => {
  const { datas } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <NavHeader screenTitle={"Top Writers"}>
        <FlatList
          data={datas}
          style={{ marginTop: 20 }}
          keyExtractor={(item) => item.idUser.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("writerdetail")}
            >
              <PeopleFollowItem datas={item} />
            </TouchableOpacity>
          )}
          ListEmptyComponent={<NoArticles title={"There no top writers yet"} />}
        />
      </NavHeader>
    </SafeAreaView>
  );
};

export default TopWriters;
