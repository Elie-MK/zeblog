import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../utilities/Color";
import CommentItem from "../components/CommentItem";
import CommentInput from "../components/CommentInput";
import { Androids } from "../utilities/Platform";
import useGetRequestApi from "../hooks/useGetRequestApi";
import usePostRequestApi from "../hooks/usePostRequestApi";

const Comments = ({ navigation, route }) => {
  const { articleId } = route.params;
  const findComments = `article/comments/${articleId}`;
  const { datas, error, loading, fetchDatas } = useGetRequestApi(findComments);

  const [isCommented, setIsCommented] = useState(false);
  const [valueComments, setValueComments] = useState({
    contents: "",
  });
  const postCommentUrl = `articles/comments/${articleId}`;
  const { postSendRequest } = usePostRequestApi(postCommentUrl, valueComments);

  const handleComments = () => {
    if (valueComments.contents.length > 0) {
      setIsCommented(true);
      postSendRequest()
        .then(() => {
          setValueComments({ contents: "" });
          fetchDatas();
          setIsCommented(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please add a comment");
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      behavior={Platform.select({ ios: "padding", android: null })}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 1, marginHorizontal: 20, marginTop: Androids ? 30 : 20 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color={colors.black} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Comments ({datas?.length})
          </Text>
        </View>

        <View style={{ marginTop: 10, marginBottom: 10, flex: 1 }}>
          <FlatList
            data={datas}
            keyExtractor={(item) => item.idComments.toString()}
            renderItem={({ item }) => (
              <CommentItem key={item.idComments} datas={item} />
            )}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <CommentInput
            onChangeText={setValueComments}
            valueComments={valueComments.contents}
            isCommented={isCommented}
            setIsCommented={handleComments}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Comments;
