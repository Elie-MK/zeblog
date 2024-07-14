import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { colors } from "../utilities/Color";

const PeopleFollowItem = ({ datas }) => {
  return (
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
          style={{ width: 80, height: 80, borderRadius: 50 }}
          source={
            datas.pictureProfile
              ? { uri: datas.pictureProfaile }
              : require("../assets/images/vectorPeople.jpg")
          }
        />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {datas?.fullName}
          </Text>
          <Text style={{ fontSize: 16, color: "gray", marginTop: 5 }}>
            @{datas?.username}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        {true ? (
          <Button
            titleStyle={{ fontWeight: "600" }}
            buttonStyle={{
              backgroundColor: colors.main,
              padding: 8,
              borderRadius: 22,
            }}
            title="Follow"
          />
        ) : (
          <Button
            buttonStyle={{
              backgroundColor: colors.white,
              padding: 8,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: colors.main,
            }}
            titleStyle={{ color: colors.main }}
            title={"Following"}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PeopleFollowItem;
