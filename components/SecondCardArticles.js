import { View, Text, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../utilities/Color";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { formatDistanceToNow, parseISO } from "date-fns";
import {
  currentUserUrl,
  favoriteArticleUrl,
} from "../utilities/AllUrlPathRequests";
import useGetRequestApi from "../hooks/useGetRequestApi";
import usePostRequestApi from "../hooks/usePostRequestApi";
import { handleVibrateButtonPress } from "../utilities/HapticVibrationClick";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, setFavorite } from "../redux/favoriteSlice";

const SecondCardArticles = ({ datas, onPress }) => {
  const { width } = Dimensions.get("window");
  const text = datas?.Title.substring(0, 34) + "...";

  const currentUser = useGetRequestApi(currentUserUrl);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.setFavorite);

  const favorite = favorites?.find(
    (article) => article?.idArticles === datas?.idArticles
  );

  const { postSendRequest } = usePostRequestApi(
    `${favoriteArticleUrl}/${datas.idArticles}`
  );
  useEffect(() => {
    if (currentUser.datas?.favoriteArticles) {
      currentUser.datas.favoriteArticles.map((articles) =>
        dispatch(setFavorite(articles))
      );
    }
  }, [currentUser.datas]);
  const handleFavoriteArticle = () => {
    postSendRequest().then(() => {
      if (favorite) {
        dispatch(removeFavorite(datas));
      } else {
        dispatch(setFavorite(datas));
      }
      handleVibrateButtonPress();
    });
  };

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
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={{ width: width / 2 }}>
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <View>
              <Image
                style={{ width: 140, height: 140, borderRadius: 22 }}
                source={
                  datas?.pictures
                    ? { uri: datas?.pictures }
                    : require("../assets/images/exemple.jpg")
                }
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{text}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <Image
                  style={{ width: 25, height: 25, borderRadius: 22 }}
                  source={
                    datas?.user
                      ? { uri: datas?.user.pictureProfile }
                      : require("../assets/images/vectorPeople.jpg")
                  }
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: colors.main,
                  }}
                >
                  {datas?.user?.username}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: colors.gray, fontWeight: "600" }}>
                  {formatDistanceToNow(parseISO(datas?.CreateAt))} ago
                </Text>
                <TouchableOpacity onPress={handleFavoriteArticle}>
                  <MaterialCommunityIcons
                    name={
                      favorite ? "bookmark-minus" : "bookmark-minus-outline"
                    }
                    size={25}
                    color={favorite ? colors.main : colors.gray}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SecondCardArticles;
