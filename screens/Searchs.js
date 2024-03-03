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
import NotFoundComponent from "../components/NotFoundComponent";
import SearchArticleComponent from "../components/SearchArticleComponent";
import SearchWriterComponent from "../components/SearchWriterComponent";

const Searchs = ({navigation}) => {
  const [isSelected, setIsSelected] = useState("articles");
  const [isFound, setIsFound] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1, marginTop:20 }}>
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

        <View style={{flexDirection:"row", justifyContent:"center", marginTop:20}}>
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

        </View>

        
        <View  style={{
            flex: 1
          }}>
            {
              isFound?isSelected ==="articles" ?<SearchArticleComponent/> : <SearchWriterComponent />:<NotFoundComponent />
            }
            
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Searchs;
