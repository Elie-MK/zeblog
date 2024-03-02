import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "@rneui/base";
import { colors } from "../utilities/Color";

const FollowersItem = ({ names, username,  onPress, isFollow }) => {
  return (
    <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom:10
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
        <Text style={{ fontSize: 16, color: "gray", marginTop:5 }}>{username}</Text>
      </View>
    </View>
    <TouchableOpacity >
      {isFollow ? (
        <Button
          titleStyle={{ fontWeight: "600" }}
          buttonStyle={{
            backgroundColor: colors.main,
            padding: 8,
            borderRadius: 22,
          }}
          title="Follow"
          onPress={onPress}
        />
      ) : (
        <Button
          buttonStyle={{
            backgroundColor: colors.white,
            padding: 8,
            borderRadius: 22,
            borderWidth:2, 
            borderColor:colors.main
          }}
          titleStyle={{color:colors.main}}
          title={"Following"}
          onPress={onPress}
        />
      )}
    </TouchableOpacity>
  </View>
  )
}

export default FollowersItem