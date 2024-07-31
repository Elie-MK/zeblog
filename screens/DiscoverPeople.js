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
import usePostRequestApi from "../hooks/usePostRequestApi";
import useGetRequestApi from "../hooks/useGetRequestApi";
import ActivityIndicatorGlobal from "../components/ActivityIndicatorGlobal";
import EmptyData from "../components/EmptyData";

const getWritersUrl = "writers";
const RegisterUrl = "auth/register";

const DiscoverPeople = ({ navigation, route }) => {
  const data = route.params;
  const { datas, loading, error } = useGetRequestApi(getWritersUrl, true);

  const [follow, setFollow] = useState([]);
  const [inProgress, setInProgress] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFollow = (username) => {
    const isFollow = follow.includes(username);
    if (isFollow) {
      setFollow((prevFollow) => prevFollow.filter((item) => item !== username));
    } else {
      setFollow([...follow, username]);
    }
  };

  const registerUser = new FormData();
  registerUser.append("fullName", data.fullName);
  registerUser.append("dateOfBirth", data.dateOfBirth);
  registerUser.append("username", data.username);
  registerUser.append("email", data.email);
  registerUser.append("countryName", data.country);
  registerUser.append("streetAdress", data.streetAdress);
  registerUser.append("password", data.password);
  registerUser.append("gender", data.gender);
  const picture = data.picture;
  registerUser.append("pictureProfile", {
    uri: picture,
    type: "image/jpg",
    name: "profile",
  });

  const { postSendRequest } = usePostRequestApi(
    RegisterUrl,
    registerUser,
    true
  );
  const handleFinish = async () => {
    setInProgress(true);
    try {
      const response = await postSendRequest();
      if (response.status === 201) {
        setInProgress(false);
        navigation.replace("signin");
      }
    } catch (error) {
      console.log("Error occurred:", error.message);
      setInProgress(false);
      setIsError(true);
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
        {data?.length > 0 && !loading && (
          <View>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Discover People
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10, color: colors.gray }}>
              Pick some people to follow 😍
            </Text>
          </View>
        )}

        <View style={{ flex: 1, marginTop: 20 }}>
          {loading && !datas && <ActivityIndicatorGlobal />}
          {datas?.length > 0 && !loading && (
            <FlatList
              data={datas}
              keyExtractor={(item) => item.idUser.toString()}
              renderItem={({ item }) => <PeopleFollowItem datas={item} />}
            />
          )}
          {datas?.length === 0 && <EmptyData />}
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
