import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../utilities/Color";

const SettingsItem = ({ title, IconRight, titleIcon, isLanguage, currentLanguage }) => {
  return (
    <>
      {isLanguage ? (
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <View
              style={{
                backgroundColor: colors.subGray,
                padding: 15,
                borderRadius: 25,
              }}
            >
              <IconRight name={titleIcon} size={20} color={colors.main} />
            </View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>{title}</Text>
          </View>

          <View style={{flexDirection:"row", gap:20, alignItems:"center"}}>
            <Text style={{fontSize:16, color:colors.gray, fontWeight:"500"}}>{currentLanguage}</Text>
            <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <View
              style={{
                backgroundColor: colors.subGray,
                padding: 15,
                borderRadius: 25,
              }}
            >
              <IconRight name={titleIcon} size={20} color={colors.main} />
            </View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>{title}</Text>
          </View>

          <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
        </TouchableOpacity>
      )}
    </>
  );
};

export default SettingsItem;
