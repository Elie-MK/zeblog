import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utilities/Color";
import { Androids } from "../utilities/Platform";

const CardArticles = ({ onPress }) => {
  const [text, setText] = useState(
    "10 Tips Boosting your productivity and is good for your health."
  );
  const [isBook, setIsBook] = useState(false);

  useEffect(() => {
    if (text.length >= 34) {
      setText(text.substring(0, 34) + "...");
    }
  }, []);

  return (
    <>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View>
          <View>
            <Image
              style={{ width: 170, height: 160, borderRadius: 22 }}
              source={require("../assets/images/exemple.jpg")}
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
      </TouchableOpacity>
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
            source={require("../assets/images/vectorPeople.jpg")}
          />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: colors.main }}
              >
                Doe
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, color: colors.gray }}>
                . 5 days ago
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default CardArticles;
