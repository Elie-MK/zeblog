import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../utilities/Color";
import * as ImagePicker from "expo-image-picker";
import { Input } from "@rneui/themed";
import Buttons from "../../../components/Buttons";
import ProfileImage from "../../../components/ProfileImage";
import { KeyboardAvoidingView } from "react-native";
import { Androids } from "../../../utilities/Platform";
import InputSettings from "../../../components/InputSettings";
import useGetRequestApi from "../../../hooks/useGetRequestApi";
import ActivityIndicatorGlobal from "../../../components/ActivityIndicatorGlobal";

const EditProfile = ({ navigation }) => {
  const personalInfoUrl = "profile";
  const { datas, loading, error } = useGetRequestApi(personalInfoUrl);
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImage = async () => {
    const requestLibrary =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (requestLibrary.granted) {
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        aspect: [4, 3],
      });
      console.log(image);
      if (!image.canceled) {
        setProfileImage(image.assets[0].uri);
      }
    } else {
      alert("Permission to access Library is required!");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={{ flex: 1, marginHorizontal: 20, marginTop: Androids ? 30 : 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            marginBottom: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Edit Profile</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          {loading && !datas && <ActivityIndicatorGlobal />}
          <View style={{ marginBottom: 20 }}>
            <ProfileImage
              profileImage={profileImage ?? datas?.pictureProfile}
              handleProfileImage={handleProfileImage}
            />
          </View>

          <InputSettings value={datas?.fullName} title={"Display Name"} />
          <InputSettings value={datas?.username} title={"username"} />
          <InputSettings title={"Description"} />

          <Text
            style={{ marginLeft: 10, fontWeight: "bold", color: colors.gray }}
          >
            Social Media
          </Text>
          <InputSettings title={"Whatsapp"} />
          <InputSettings title={"Facebook"} />
          <InputSettings title={"X"} />
          <InputSettings title={"Instagram"} />
          <Buttons title={"Save"} />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
