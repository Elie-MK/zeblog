import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView } from "react-native";
import ProfileImage from "../../../../components/ProfileImage";
import * as ImagePicker from "expo-image-picker";
import Buttons from "../../../../components/Buttons";
import BottomSheetModal from "../../../../components/BottomSheetModal";
import GenderItem from "../../../../components/GenderItem";
import { Androids } from "../../../../utilities/Platform";
import useGetRequestApi from "../../../../hooks/useGetRequestApi";
import ActivityIndicatorGlobal from "../../../../components/ActivityIndicatorGlobal";
import BottomSheetDatePicker from "../../../../components/BottomSheetDatePicker";
import moment from "moment";
import InputGlobal from "../../../../components/InputGlobal";
import { colors } from "../../../../utilities/Color";
import usePutRequestApi from "../../../../hooks/usePutRequestApi";

const PersonalInfo = ({ navigation }) => {
  const personalInfoUrl = "profile";
  const { datas, loading, error } = useGetRequestApi(personalInfoUrl);
  const [showModal, setShowModal] = useState(false);
  const [showModalDate, setShowModalDate] = useState(false);
  const [isAdult, setIsAdult] = useState(true);

  const [date, setDate] = useState(null);
  const formatDate =
    datas?.dateOfBirth && moment(datas?.dateOfBirth).format("YYYY-MM-DD");

  const [inProgress, setInProgress] = useState(false);

  const [updateInfo, setUpdateInfo] = useState({
    fullName: "",
    email: "",
    picture: null,
    gender: "",
    dateOfBirth: formatDate,
    streetAdress: "",
    countryName: "",
  });

  function handleDatePicker(e, selectedDate) {
    if (!selectedDate) {
      if (Platform.OS === "android") {
        setShowModalDate(false);
      }
      return;
    }

    setDate(selectedDate);

    const formatDate = moment(selectedDate).format("YYYY-MM-DD");

    handleInputsChange("dateOfBirth", formatDate);

    if (Platform.OS === "android") {
      setShowModalDate(false);
    }

    const getYear = selectedDate.getFullYear();
    const age = new Date().getFullYear() - getYear;

    setIsAdult(age >= 18);
  }

  useEffect(() => {
    if (datas?.dateOfBirth) {
      setDate(new Date(datas.dateOfBirth));
    }
  }, [datas]);

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

  useEffect(() => {
    if (datas) {
      setUpdateInfo({
        fullName: datas?.fullName || "",
        email: datas.email || "",
        gender: datas.gender || "",
        dateOfBirth: formatDate || "",
        streetAdress: datas.streetAdress || "",
        countryName: datas.countryName || "",
      });
    }
  }, [datas]);

  function handleInputsChange(field, value) {
    if (field === "gender") {
      setShowModal(false);
    }
    setUpdateInfo((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  const updateUserInfo = new FormData();
  if (updateInfo.fullName) {
    updateUserInfo.append("fullName", updateInfo.fullName);
  }
  if (updateInfo.email) {
    updateUserInfo.append("email", updateInfo.email);
  }
  if (updateInfo.picture) {
    const picture = updateInfo.picture;
    updateUserInfo.append("pictureProfile", {
      uri: picture,
      type: "image/jpg",
      name: "profile",
    });
  }
  if (updateInfo.gender) {
    updateUserInfo.append("gender", updateInfo.gender);
  }
  if (updateInfo.dateOfBirth) {
    updateUserInfo.append("dateOfBirth", updateInfo.dateOfBirth);
  }
  if (updateInfo.streetAdress) {
    updateUserInfo.append("streetAdress", updateInfo.streetAdress);
  }
  if (updateInfo.countryName) {
    updateUserInfo.append("countryName", updateInfo.countryName);
  }

  const { handlePutRequest } = usePutRequestApi(
    personalInfoUrl,
    updateUserInfo,
    true
  );

  const handleUpdate = async () => {
    if (isAdult) {
      try {
        setInProgress(true);
        const response = await handlePutRequest();
        if (response.status === 200) {
          setInProgress(false);
          navigation.goBack();
        }
      } catch (error) {
        console.log("Error occurred:", error.message);
        setInProgress(false);
      }
    } else {
      alert("You must be 18 years old to update your profile");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          marginHorizontal: 20,
          marginTop: Androids ? 30 : null,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={25} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Personal Info
            </Text>
          </View>
          <Feather name="edit-3" size={24} color="black" />
        </View>

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {loading && !datas && <ActivityIndicatorGlobal />}
          <ProfileImage
            profileImage={updateInfo.picture ?? datas?.pictureProfile}
            handleProfileImage={handleProfileImage}
          />
          <InputGlobal
            title={"Full Name"}
            onChangeText={(fullName) =>
              handleInputsChange("fullName", fullName)
            }
            value={updateInfo.fullName}
            placeholder={"full Name"}
            disabled={inProgress}
          />
          <InputGlobal
            title={"Email"}
            onChangeText={(email) => handleInputsChange("email", email)}
            value={updateInfo.email}
            placeholder={"Email"}
            disabled={inProgress}
          />

          <InputGlobal
            title={"Gender"}
            value={updateInfo.gender}
            rightIcon={
              <MaterialIcons
                name="keyboard-arrow-down"
                size={25}
                color={colors.main}
              />
            }
            focus={() => setShowModal(!showModal)}
            disabled={inProgress}
          />

          <InputGlobal
            title={"Date of Birth"}
            placeholder={"YYYY/MM/DD"}
            focus={() => setShowModalDate(!showModalDate)}
            value={updateInfo.dateOfBirth}
            rightIcon={
              <TouchableOpacity onPress={() => setShowModalDate(true)}>
                <Ionicons name="calendar" size={24} color={colors.main} />
              </TouchableOpacity>
            }
            disabled={inProgress}
          />

          <InputGlobal
            title={"Street Adress"}
            onChangeText={(streetAdress) =>
              handleInputsChange("streetAdress", streetAdress)
            }
            value={updateInfo.streetAdress}
            placeholder={"Street Adress"}
            disabled={inProgress}
          />

          <InputGlobal
            title={"Country Name"}
            onChangeText={(countryName) =>
              handleInputsChange("countryName", countryName)
            }
            value={updateInfo.countryName}
            placeholder={"Country Name"}
            disabled={inProgress}
          />

          <Buttons
            disabled={inProgress}
            isLoading={inProgress}
            onPress={handleUpdate}
            title={"Save"}
          />
        </ScrollView>
        <BottomSheetModal
          title={"Choose your gender"}
          isVisible={showModal}
          onBackdropPress={() => setShowModal(!showModal)}
        >
          <GenderItem
            checked={updateInfo.gender}
            selectedGender={(gender) => handleInputsChange("gender", gender)}
          />
        </BottomSheetModal>
        <BottomSheetDatePicker
          date={date}
          handleDatePicker={handleDatePicker}
          isVisible={showModalDate}
          onBackdropPress={() => setShowModalDate(false)}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default PersonalInfo;
