import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utilities/Color";
import { Androids } from "../utilities/Platform";
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

const CardArticles = ({ onPress, datas }) => {
  const currentUser = useGetRequestApi(currentUserUrl);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.setFavorite);

  const text = datas?.Title?.substring(0, 35) + "...";

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
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View>
          <View>
            <Image
              style={{ width: 170, height: 160, borderRadius: 22 }}
              source={
                datas?.pictures
                  ? { uri: datas?.pictures }
                  : require("../assets/images/exemple.jpg")
              }
            />
          </View>
          <TouchableOpacity
            onPress={handleFavoriteArticle}
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
              name={favorite ? "bookmark-minus" : "bookmark-minus-outline"}
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
              source={
                datas?.user?.pictureProfile
                  ? { uri: datas?.user?.pictureProfile }
                  : require("../assets/images/vectorPeople.jpg")
              }
            />
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: colors.main,
                  }}
                >
                  {datas?.user?.username}
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 14, color: colors.gray }}>
                  {formatDistanceToNow(parseISO(datas?.CreateAt))} ago
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CardArticles;
