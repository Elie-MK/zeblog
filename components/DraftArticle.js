import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../utilities/Color";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { currentUserUrl } from "../utilities/AllUrlPathRequests";
import useGetRequestApi from "../hooks/useGetRequestApi";
import { formatDistanceToNow, parseISO } from "date-fns";

const DraftArticle = ({ datas }) => {
  const text = datas?.Title.substring(0, 34) + "...";
  const navigation = useNavigation();

  const currentUser = useGetRequestApi(currentUserUrl);

  return (
    <View style={{ width: "60%" }}>
      <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
        <View>
          <Image
            style={{ width: 140, height: 140, borderRadius: 22 }}
            source={
              { uri: datas.pictures } ?? require("../assets/images/exemple.jpg")
            }
          />
        </View>
        <View style={{ width: "100%" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{text}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 10,
            }}
          >
            <Image
              style={{ width: 25, height: 25, borderRadius: 22 }}
              source={
                currentUser.datas
                  ? { uri: currentUser.datas.pictureProfile }
                  : require("../assets/images/vectorPeople.jpg")
              }
            />
            <Text
              style={{ fontSize: 14, fontWeight: "600", color: colors.main }}
            >
              {currentUser.datas?.username}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: colors.gray, fontWeight: "600" }}>
              {formatDistanceToNow(parseISO(datas?.createdAt))} ago
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("create", { idDraft: datas.id })
              }
            >
              <Feather name={"edit-3"} size={25} color={colors.gray} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DraftArticle;
