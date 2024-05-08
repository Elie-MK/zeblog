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
import { useEffect } from "react";
export default function SignUp({ route }) {
   const { datas } = route.params
   const [profileImage, setProfileImage] = useState(null);
  const [selectGender, setSelectGender] = useState("Gender");
  const [date, setDate] = useState(new Date());
  const [isNotAdult, setIsNotAdult] = useState(true);
  const [signupData, setSignupData] = useState({
    fullName: "",
    phoneNumber: "",
    gender: selectGender,
    dateOfBirth:date,
    picture: profileImage, 
    country : datas
  });
  const [showModal, setShowModal] = useState(false);
  const [showModalDate, setShowModalDate] = useState(false);


  const selectedGender = (gender) => {
    setSelectGender(gender);
    setShowModal(!showModal);
  };

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
  function handleDatePicker(e, selectedDate) {
    setDate(selectedDate || date);
    if (Platform.OS === "android") {
      setShowModalDate(false);
    } 
    return new Date().getFullYear() - date.getFullYear() >= 18
      ? setIsNotAdult(false)
      : setIsNotAdult(true);
  }

  function handleInputsChange(name){
    setSignupData({...signupData, [name]: name})
  }

  

  return (
    <SignupParentComponent
      titleButton={"Continue"}
      navigationRoute={"createAccount"}
      step={25}
      lastStep={25}
      disableBtn={isNotAdult}
      title={"Complete your profile 📋"}
      subTitle={
        "Don't worry, only you can see your personal data. No one else will be able to see it."
      }
    >
      <ProfileImage
        profileImage={profileImage}
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
          onChangeText={(fullName) =>
            handleInputsChange(fullName)
          }
          disabled={isNotAdult}
          value={signupData.fullName}
          placeholder={"Full Name"}
        />
        <InputGlobal
          title={"Phone Number"}
          keyboardType={"phone-pad"}
          value={signupData.phoneNumber}
          disabled={isNotAdult}
          onChangeText={(phoneNumber) => handleInputsChange(phoneNumber)}
          placeholder={"+1 000 0000 000 "}
        />
        <InputGlobal
          title={"Gender"}
          disabled={isNotAdult}
          value={selectGender}
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
          value={date.toLocaleDateString()}
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
          checked={selectGender}
          selectedGender={(e) => selectedGender(e)}
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
