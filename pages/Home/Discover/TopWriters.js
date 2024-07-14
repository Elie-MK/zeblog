import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import NavHeader from "../../../components/NavHeader";
import PeopleFollowItem from "../../../components/PeopleFollowItem";
import { FakeFollowers } from "../../../utilities/FakeFollowers";
import { colors } from "../../../utilities/Color";

const TopWriters = ({ navigation, route }) => {
  const { datas } = route.params;
  const [follow, setFollow] = useState([]);

  const handleFollow = (username) => {
    const isFollow = follow.includes(username);
    if (isFollow) {
      setFollow((prevFollow) => prevFollow.filter((item) => item !== username));
    } else {
      setFollow([...follow, username]);
    }
  };
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
