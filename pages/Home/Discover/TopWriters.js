import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import NavHeader from "../../../components/NavHeader";
import PeopleFollowItem from "../../../components/PeopleFollowItem";
import { colors } from "../../../utilities/Color";

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
        />
      </NavHeader>
    </SafeAreaView>
  );
};

export default TopWriters;
