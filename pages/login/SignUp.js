import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";

import { colors } from "../../utilities/Color";
import InputGlobal from "../../components/InputGlobal";
import ProfileImage from "../../components/ProfileImage";
import SignupParentComponent from "../../components/SignupParentComponent";
import BottomSheetModal from "../../components/BottomSheetModal";
import GenderItem from "../../components/GenderItem";
import BottomSheetDatePicker from "../../components/BottomSheetDatePicker";

function handleValidData(signupData, isNotAdult) {
  if (
    signupData.fullName === "" ||
    signupData.gender === "Gender" ||
    signupData.streetAdress === "" ||
    signupData.picture === null ||
    isNotAdult
  ) {
    return false;
  } else {
    return true;
  }
}

export default function SignUp({ route }) {
  const { datas } = route.params;
  const [isNotAdult, setIsNotAdult] = useState(true);
  const [date, setDate] = useState(new Date());
  const formatDate = moment(date).format("YYYY-MM-DD");

  const [signupData, setSignupData] = useState({
    fullName: "",
    gender: "Gender",
    picture: null,
    streetAdress:"",
    dateOfBirth: formatDate,
    country: datas,
  });

  const [showModal, setShowModal] = useState(false);
  const [showModalDate, setShowModalDate] = useState(false);

  function handleInputsChange(name, value) {
    if(name === "gender"){
      setShowModal(false)
    }
    setSignupData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
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

  function handleDatePicker(e, selectedDate) {
    setDate(selectedDate);

    const formatDate = moment(selectedDate).format("YYYY-MM-DD");

    handleInputsChange("dateOfBirth", formatDate);
    if (Platform.OS === "android") {
      setShowModalDate(false);
    }
    const getYear = selectedDate.getFullYear();
    const age = new Date().getFullYear() - getYear;
    return age >= 18 ? setIsNotAdult(false) : setIsNotAdult(true);
  }

  const isValidData = handleValidData(signupData, isNotAdult);

  return (
    <SignupParentComponent
      titleButton={"Continue"}
      navigationRoute={"createAccount"}
      sharedData={signupData}
      step={25}
      lastStep={25}
      disableBtn={isNotAdult || !isValidData}
      title={"Complete your profile 📋"}
      subTitle={
        "Don't worry, only you can see your personal data. No one else will be able to see it."
      }
    >
      <ProfileImage
        profileImage={signupData.picture}
        handleProfileImage={handleProfileImage}
      />
      <View>
        {isNotAdult && (
          <Text style={{ color: "red", fontSize: 16, marginTop: 15 }}>
            You must be at least 18 years old to use this app.{" "}
          </Text>
        )}
      </View>
      <View style={{ marginTop: 30, marginHorizontal: -15 }}>
        <InputGlobal
          title={"Full Name"}
          onChangeText={(fullName) => handleInputsChange("fullName", fullName)}
          disabled={isNotAdult}
          value={signupData.fullName}
          placeholder={"Full Name"}
        />
          <InputGlobal
          title={"Street Adress"}
          onChangeText={(streetAdress) => handleInputsChange("streetAdress", streetAdress)}
          disabled={isNotAdult}
          value={signupData.streetAdress}
          placeholder={"Street Adress"}
        />
        <InputGlobal
          title={"Gender"}
          disabled={isNotAdult}
          value={signupData.gender}
          rightIcon={
            <MaterialIcons
              name="keyboard-arrow-down"
              size={25}
              color={colors.main}
            />
          }
          focus={() => setShowModal(!showModal)}
        />
        <InputGlobal
          title={"Date of Birth"}
          placeholder={"YYYY/MM/DD"}
          focus={() => setShowModalDate(!showModalDate)}
          value={signupData.dateOfBirth}
          rightIcon={
            <TouchableOpacity onPress={() => setShowModalDate(true)}>
              <Ionicons name="calendar" size={24} color={colors.main} />
            </TouchableOpacity>
          }
        />
      </View>
      <BottomSheetModal
        title={"Choose your gender"}
        isVisible={showModal}
        onBackdropPress={() => setShowModal(!showModal)}
      >
        <GenderItem
        onPress={setShowModal}
          checked={signupData.gender}
          selectedGender={(gender) => handleInputsChange("gender", gender)}
        />
      </BottomSheetModal>
      <BottomSheetDatePicker
        date={date}
        handleDatePicker={handleDatePicker}
        isVisible={showModalDate}
        onBackdropPress={() => setShowModalDate(false)}
      />
    </SignupParentComponent>
  );
}
