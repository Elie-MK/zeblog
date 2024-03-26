import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../utilities/Color";
import Buttons from "../components/Buttons";
import PeopleFollowItem from "../components/PeopleFollowItem";
import { FakeFollowers } from "../utilities/FakeFollowers";
import ModalGlobal from "../components/ModalGlobal";
import ProgressBar from "../components/ProgressBar";
import { Octicons } from "@expo/vector-icons";

const DiscoverPeople = ({ navigation }) => {
  const [follow, setFollow] = useState([]);
  const [validate, setValidate] = useState(false);

  const handleFollow = (username) => {
    const isFollow = follow.includes(username);
    if (isFollow) {
      setFollow((prevFollow) => prevFollow.filter((item) => item !== username));
    } else {
      setFollow([...follow, username]);
    }
  };

  const handleFinish = () => {
    setValidate(!validate)
   setTimeout(()=>{
    navigation.replace("signin")
    setValidate(false)
  }, 3000)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginTop: 20, marginHorizontal: 20 }}>
      <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Octicons name="arrow-left" size={25} color={colors.black} />
          </TouchableOpacity>
          <ProgressBar step={100} />
        </View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Discover People
        </Text>
        <Text style={{ fontSize: 18, marginTop: 10, color: colors.gray }}>
          Pick some people to follow 😍
        </Text>

        <View style={{ flex: 1, marginTop: 20 }}>
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
            onPress={handleFinish}
            title={"Finish"}
          />
        </View>
      </View>
      <ModalGlobal isVisible={validate}  />
    </SafeAreaView>
  );
};

export default DiscoverPeople;
