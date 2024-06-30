import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utilities/Color";
import { Androids } from "../utilities/Platform";
import { formatDistanceToNow, parseISO } from "date-fns";

const CardArticles = ({ onPress, datas }) => {
  const [isBook, setIsBook] = useState(false);
  const text = datas?.Title.substring(0, 35) + "..."

  return (
    <>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View>
          <View>
            <Image
              style={{ width: 170, height: 160, borderRadius: 22 }}
              source={datas?.pictures?{uri:datas?.pictures}:require("../assets/images/exemple.jpg")}
            />
          </View>
          <TouchableOpacity
            onPress={() => setIsBook(!isBook)}
            style={{
              position: "absolute",
              marginTop: 15,
              marginLeft: 120,
              backgroundColor: colors.main,
              padding: 8,
              borderRadius: 22,
            }}
          >
            <MaterialCommunityIcons
              name={isBook ? "bookmark-minus" : "bookmark-minus-outline"}
              size={25}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, width: 170 }}>
          <Text style={{ fontSize: Androids ? 15 : 18, fontWeight: "bold" }}>
            {text}
          </Text>
        </View>
      <View style={{ width: 170 }}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Image
            style={{ width: 30, height: 30, borderRadius: 22 }}
            source={datas?.user?.pictureProfile? {uri:datas?.user?.pictureProfile}:require("../assets/images/vectorPeople.jpg")}
          />
          <View>
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: colors.main }}
              >
                {datas?.user?.username}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, color: colors.gray }}>
              {formatDistanceToNow(parseISO(datas?.CreateAt))} ago
              </Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </>
  );
};

export default CardArticles;
