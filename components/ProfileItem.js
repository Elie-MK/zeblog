import { View, Text, Image } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { colors } from "../utilities/Color";
import InfosWriter from "./InfosWriter";

const ProfileItem = ({ names, username, onPress }) => {
  
  return (
    <View style={{ marginTop: 30 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Image
            resizeMode="contain"
            style={{ width: 80, height: 80, borderRadius: 50 }}
            source={require("../assets/images/vectorPeople.jpg")}
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{names}</Text>
            <Text style={{ fontSize: 16, color: "gray", marginTop: 5 }}>
              {username}
            </Text>
          </View>
        </View>
        <Button
          buttonStyle={{
            backgroundColor: colors.white,
            padding: 8,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: colors.main,
          }}
          icon={{ name: "edit", size: 20, color: colors.main }}
          titleStyle={{ color: colors.main }}
          title={"Edit"}
          onPress={onPress}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: colors.lightGray,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 15,
          }}
        >
          <View>
            <InfosWriter numbers={"364"} texts={"articles"} />
          </View>
          <View
            style={{
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderColor: colors.lightGray,
            }}
          >
            <View style={{ marginLeft: 30, marginRight: 30 }}>
              <InfosWriter numbers={"146"} texts={"following"} />
            </View>
          </View>
          <View>
            <InfosWriter numbers={"129,5K"} texts={"followers"} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileItem;
