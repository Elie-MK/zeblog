import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { colors } from "../utilities/Color";
import Buttons from "../components/Buttons";
import PeopleFollowItem from "../components/PeopleFollowItem";
import { FakeFollowers } from "../utilities/FakeFollowers";
import ModalGlobal from "../components/ModalGlobal";

const DiscoverPeople = ({ navigation }) => {
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
      <View style={{ flex: 1, marginTop: 20, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Discover People
        </Text>
        <Text style={{ fontSize: 18, marginTop: 10, color: colors.gray }}>
          Pick some people to follow 😍
        </Text>

        <View style={{ flex: 1, marginTop: 15 }}>
          <FlatList
            data={FakeFollowers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PeopleFollowItem
                onPress={() => handleFollow(item.username)}
                items={item}
                followers={follow}
                names={item.name}
                username={item.username}
              />
            )}
          />
          <Buttons
            onPress={() => navigation.navigate("signup")}
            title={"Finish"}
          />
        </View>
      </View>
      <ModalGlobal />
    </SafeAreaView>
  );
};

export default DiscoverPeople;
