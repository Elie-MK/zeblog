import { View, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { A } from "@expo/html-elements";
import { formatDistanceToNow, parseISO } from "date-fns";

import { colors } from "../../utilities/Color";
import useGetRequestApi from "../../hooks/useGetRequestApi";
import { currentUserUrl } from "../../utilities/AllUrlPathRequests";
import { useIsFocused } from "@react-navigation/native";

const AboutWriter = () => {
  const { datas, fetchDatas } = useGetRequestApi(currentUserUrl);
  const [createAt, setCreateAt] = useState("");
  const isFocused = useIsFocused();

  useEffect(() => {
    if (datas) {
      const distance = formatDistanceToNow(parseISO(datas.createAt));
      const createAt = distance.replace(/^about /, "");
      setCreateAt(createAt);
    }
  }, []);

  useEffect(() => {
    fetchDatas();
  }, [isFocused]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 5, marginTop: 10 }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Description</Text>
          <Text style={{ textAlign: "justify", marginTop: 10 }}>
            {datas?.description}
          </Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Social Media</Text>
          <View style={{ marginTop: 15 }}>
            {datas?.facebookLink && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <FontAwesome5 name="facebook" size={24} color={colors.main} />
                <A
                  href={datas?.facebookLink}
                  style={{ fontSize: 16, color: colors.main }}
                >
                  Facebook
                </A>
              </View>
            )}

            {datas?.XLink && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <Entypo name="twitter" size={24} color={colors.main} />
                <A
                  href={datas?.XLink}
                  style={{ fontSize: 16, color: colors.main }}
                >
                  Twitter
                </A>
              </View>
            )}

            {datas?.InstagramLink && (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Entypo name="instagram" size={24} color={colors.main} />
                <A
                  href={datas?.InstagramLink}
                  style={{ fontSize: 16, color: colors.main }}
                >
                  Instagram
                </A>
              </View>
            )}
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>More info</Text>
          <View style={{ marginTop: 15 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 10,
              }}
            >
              <Entypo name="location-pin" size={24} color="black" />
              <Text style={{ fontSize: 15 }}>{datas?.countryName}</Text>
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <AntDesign name="infocirlceo" size={24} color="black" />
              <Text style={{ fontSize: 15 }}>Joined {createAt} ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutWriter;
