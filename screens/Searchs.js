import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../utilities/Color";

const Searchs = () => {
  const [isSelected, setIsSelected] = useState("articles");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
          <SearchInput placeholder={"Search by title or author"} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom:10 }}>
          <TouchableOpacity
            onPress={() => setIsSelected("articles")}
            style={{
              backgroundColor:
                isSelected == "articles" ? colors.main : undefined,
              borderColor: colors.main,
              borderWidth: 2,
              padding: 15,
              width: "47%",
              borderRadius: 40,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: isSelected == "articles" ? colors.white : colors.main,
                fontWeight: "700",
                fontSize: 15,
              }}
            >
              Articles
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsSelected("writers")}
            style={{
              backgroundColor:
                isSelected == "writers" ? colors.main : undefined,
              borderColor: colors.main,
              borderWidth: 2,
              padding: 15,
              width: "47%",
              borderRadius: 40,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: isSelected == "writers" ? colors.white : colors.main,
                fontWeight: "700",
                fontSize: 15,
              }}
            >
              Writers
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView  style={{
            flex: 1
          }}>


        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../assets/images/notfound.png")}
            />
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Not Found
              </Text>
              <Text
                style={{ textAlign: "center", marginTop: 20, fontSize: 18 }}
              >
                We're sorry, the keyword you were looking for could not be
                found. Please search with another keyworkds.
              </Text>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Searchs;
