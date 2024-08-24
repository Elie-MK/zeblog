import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../utilities/Color";
import * as ImagePicker from "expo-image-picker";
import Buttons from "../../../components/Buttons";
import ProfileImage from "../../../components/ProfileImage";
import { KeyboardAvoidingView } from "react-native";
import { Androids } from "../../../utilities/Platform";
import InputSettings from "../../../components/InputSettings";
import useGetRequestApi from "../../../hooks/useGetRequestApi";
import ActivityIndicatorGlobal from "../../../components/ActivityIndicatorGlobal";
import usePutRequestApi from "../../../hooks/usePutRequestApi";

const EditProfile = ({ navigation }) => {
  const personalInfoUrl = "profile";
  const { datas, loading, error } = useGetRequestApi(personalInfoUrl);

  const [updateInfo, setUpdateInfo] = useState({
    fullName: "",
    username: "",
    picture: null,
    description: "",
    facebookLink: "",
    XLink: "",
    InstagramLink: "",
  });
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    if (datas) {
      setUpdateInfo({
        fullName: datas?.fullName || "",
        username: datas.username || "",
        description: datas.description || "",
        facebookLink: datas.facebookLink || "",
        XLink: datas.XLink || "",
        InstagramLink: datas.InstagramLink || "",
      });
    }
  }, [datas]);

  const updateUserInfo = new FormData();
  if (updateInfo.fullName) {
    updateUserInfo.append("fullName", updateInfo.fullName);
  }
  if (updateInfo.username) {
    updateUserInfo.append("username", updateInfo.username);
  }
  if (updateInfo.picture) {
    const picture = updateInfo.picture;
    updateUserInfo.append("pictureProfile", {
      uri: picture,
      type: "image/jpg",
      name: "profile",
    });
  }
  if (updateInfo.description) {
    updateUserInfo.append("description", updateInfo.description);
  }
  if (updateInfo.facebookLink) {
    updateUserInfo.append("facebookLink", updateInfo.facebookLink);
  }
  if (updateInfo.XLink) {
    updateUserInfo.append("XLink", updateInfo.XLink);
  }
  if (updateInfo.InstagramLink) {
    updateUserInfo.append("InstagramLink", updateInfo.InstagramLink);
  }

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

      if (!image.canceled) {
        const result = image.assets[0].uri;
        handleInputsChange("picture", result);
      }
    } else {
      alert("Permission to access Library is required!");
    }
  };

  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(\:[0-9]{1,5})?(\/[^\s]*)?$/;

  function handleInputsChange(field, value) {
    if (
      field === "facebookLink" ||
      field === "XLink" ||
      field === "InstagramLink"
    ) {
      if (value.length > 0 && !urlRegex.test(value)) {
        return;
      }
    }
    setUpdateInfo((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  const { handlePutRequest } = usePutRequestApi(
    personalInfoUrl,
    updateUserInfo,
    true
  );

  const handleFinish = async () => {
    setInProgress(true);
    try {
      const response = await handlePutRequest();
      if (response.status === 200) {
        setInProgress(false);
        navigation.goBack();
      }
    } catch (error) {
      console.log("Error occurred:", error.message);
      setInProgress(false);
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
        {loading && <ActivityIndicatorGlobal />}
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
              profileImage={updateInfo.picture ?? datas?.pictureProfile}
              handleProfileImage={handleProfileImage}
            />
          </View>

          <InputSettings
            onChangeText={(text) => handleInputsChange("fullName", text)}
            value={updateInfo.fullName}
            title={"Display Name"}
            disabled={inProgress}
          />
          <InputSettings
            onChangeText={(text) => handleInputsChange("username", text)}
            value={updateInfo.username}
            disabled={inProgress}
            title={"username"}
          />
          <InputSettings
            onChangeText={(text) => handleInputsChange("description", text)}
            title={"Description"}
            value={updateInfo.description}
            disabled={inProgress}
          />

          <Text
            style={{ marginLeft: 10, fontWeight: "bold", color: colors.gray }}
          >
            Social Media
          </Text>
          <InputSettings
            onChangeText={(text) => handleInputsChange("facebookLink", text)}
            title={"Facebook"}
            value={updateInfo.facebookLink}
            disabled={inProgress}
          />
          <InputSettings
            onChangeText={(text) => handleInputsChange("XLink", text)}
            title={"X"}
            value={updateInfo.XLink}
            disabled={inProgress}
          />
          <InputSettings
            onChangeText={(text) => handleInputsChange("InstagramLink", text)}
            title={"Instagram"}
            value={updateInfo.InstagramLink}
            disabled={inProgress}
          />
          <Buttons
            onPress={handleFinish}
            title={"Save"}
            disabled={inProgress}
            isLoading={inProgress}
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
