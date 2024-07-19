import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../utilities/Color";
import { Octicons } from "@expo/vector-icons";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { formatDistanceToNow } from "date-fns";

const CommentItem = ({ datas }) => {
  const [createAt, setCreateAt] = useState("");

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const updateTimeAgo = () => {
      const distance = formatDistanceToNow(datas?.createAt);
      const createAt = distance.replace(/^about /, "");
      setCreateAt(createAt);
    };

    updateTimeAgo();
    const intervalId = setInterval(updateTimeAgo, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [datas, timeZone]);

  const progress = useSharedValue(0);
  const scale = useSharedValue(0);

  const progressStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }],
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(1);
    scale.value = withTiming(1, { duration: 700 });
  }, []);

  return (
    <Animated.View style={progressStyle}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <Image
          resizeMode="contain"
          style={{ width: 60, height: 60, borderRadius: 50 }}
          source={
            datas
              ? { uri: datas?.user?.pictureProfile }
              : require("../assets/images/vectorPeople.jpg")
          }
        />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {datas?.user?.fullName}
          </Text>
          <Text style={{ color: colors.gray }}>@{datas?.user?.username}</Text>
        </View>
      </View>
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Text>{datas?.contents}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 25,
            marginTop: 10,
          }}
        >
          {/* <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
              <Octicons
                name={isLiked ? "heart-fill" : "heart"}
                size={20}
                color={isLiked ? colors.main : colors.gray}
              />
            </TouchableOpacity>
            <Text>35</Text>
          </View> */}
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={{ color: colors.gray }}>{createAt} ago</Text>
          </View>
        </View>
      </View>
      <CardDivider />
    </Animated.View>
  );
};

export default CommentItem;
