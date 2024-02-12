import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utilities/Color";

const ItemNotifSystem = () => {
  return (
    <View>
      <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <View
            style={{
              backgroundColor: colors.subGray,
              flexDirection: "row",
              alignSelf: "center",
              padding: 15,
              borderRadius: 30,
            }}
          >
            <MaterialCommunityIcons
              name="shield-check"
              size={24}
              color={colors.main}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Security Updates !
            </Text>
            <Text
              style={{ marginTop: 10, color: colors.gray, fontWeight: "600" }}
            >
              Today | 09:24 AM
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.main,
            padding: 10,
            alignSelf: "center",
            borderRadius:5
          }}
        >
          <Text style={{color:colors.white, fontWeight:"700"}}>New</Text>
        </View>
      </View>
      <View style={{marginTop:10}}>
      <Text style={{fontSize:16, fontWeight:"700", color:colors.gray}}>
        Now Zeblog has a Two-Factor Authentication, Try iit now to make your account more secure.
      </Text>
      </View>
      </View>
    </View>
  );
};

export default ItemNotifSystem;
