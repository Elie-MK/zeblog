import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { colors } from "../../utilities/Color";
import InputGlobal from "../../components/InputGlobal";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import ProfileImage from "../../components/ProfileImage";
import { MaterialIcons } from "@expo/vector-icons";
import SignupParentComponent from "../../components/SignupParentComponent";
import BottomSheetModal from "../../components/BottomSheetModal";
import GenderItem from "../../components/GenderItem";
import BottomSheetDatePicker from "../../components/BottomSheetDatePicker";

export default function SignUp({ route }) {
  const { datas } = route.params;
  const [isNotAdult, setIsNotAdult] = useState(false);
  const formatDate = new Date("1980-01-01").toLocaleDateString();

  const [signupData, setSignupData] = useState({
    fullName: "",
    phoneNumber: "",
    gender: "Gender",
    dateOfBirth: formatDate,
    picture: null,
    country: datas,
  });

  const [showModal, setShowModal] = useState(false);
  const [showModalDate, setShowModalDate] = useState(false);

  function handleInputsChange(name, value) {
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
        const result = image.assets[0].uri
       handleInputsChange('picture', result) 
      }
    } else {
      alert("Permission to access Library is required!");
    }
  };

  function handleDatePicker(e, selectedDate) {
    const dateSelected = selectedDate.toLocaleDateString() || formatDate
    handleInputsChange('dateOfBirth', dateSelected)
    if (Platform.OS === "android") {
      setShowModalDate(false);
    }
    const getYear = signupData.dateOfBirth.slice(6)
    return new Date().getFullYear() - getYear  >= 18 ? setIsNotAdult(false) : setIsNotAdult(true);
  }
 
  return (
    <SignupParentComponent
      titleButton={"Continue"}
      navigationRoute={"createAccount"}
      sharedData={signupData}
      step={25}
      lastStep={25}
      disableBtn={isNotAdult}
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
          title={"Phone Number"}
          keyboardType={"phone-pad"}
          value={signupData.phoneNumber}
          disabled={isNotAdult}
          onChangeText={(phoneNumber) =>
            handleInputsChange("phoneNumber", phoneNumber)
          }
          placeholder={"+1 000 0000 000 "}
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
          placeholder={"MM/DD/YYYY"}
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
          checked={signupData.gender}
          selectedGender={(gender) => handleInputsChange('gender', gender)}
        />
      </BottomSheetModal>
      <BottomSheetDatePicker
        date={new Date("1980-01-01")}
        handleDatePicker={handleDatePicker}
        isVisible={showModalDate}
        onBackdropPress={() => setShowModalDate(false)}
      />
    </SignupParentComponent>
  );
}
