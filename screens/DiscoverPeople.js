import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../utilities/Color";
import Buttons from "../components/Buttons";
import PeopleFollowItem from "../components/PeopleFollowItem";
import { FakeFollowers } from "../utilities/FakeFollowers";
import ModalGlobal from "../components/ModalGlobal";
import ProgressBar from "../components/ProgressBar";
import { Octicons } from "@expo/vector-icons";
import axios from "axios";

const API_URL = "http://192.168.1.114:3000/api/auth/register";
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

const DiscoverPeople = ({ navigation, route }) => {
  const datas = route.params;

  const [follow, setFollow] = useState([]);
  const [inProgress, setInProgress] = useState(false);
  const [isError, setIsError]= useState(false)

  const handleFollow = (username) => {
    const isFollow = follow.includes(username);
    if (isFollow) {
      setFollow((prevFollow) => prevFollow.filter((item) => item !== username));
    } else {
      setFollow([...follow, username]);
    }
  };

  const handleFinish = async () => {
    setInProgress(true);
    const registerUser = new FormData();
    registerUser.append("fullName", datas.fullName);
    registerUser.append("dateOfBirth", datas.dateOfBirth);
    registerUser.append("username", datas.username);
    registerUser.append("email", datas.email);
    registerUser.append("countryName", datas.country);
    registerUser.append("streetAdress", datas.streetAdress);
    registerUser.append("password", datas.password);
    registerUser.append("gender", datas.gender);
    const picture = datas.picture;
    registerUser.append("pictureProfile", {
      uri: picture,
      type: "image/jpg",
      name: "profile",
    });
    try {
      const response = await instance.post(API_URL, registerUser);
      if (response.status === 201) {
        setInProgress(false);
        navigation.replace("signin");
      }
    } catch (error) {
      console.log("Error occurred:", error.message);
      setInProgress(false);
      setIsError(true)
    }
  };

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
          <ProgressBar lastStep={90} step={10} />
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
            disabled={inProgress}
            onPress={handleFinish}
            title={"Finish"}
          />
        </View>
      </View>
      <ModalGlobal isVisible={inProgress} />
    </SafeAreaView>
  );
};

export default DiscoverPeople;
