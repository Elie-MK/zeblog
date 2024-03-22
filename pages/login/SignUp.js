import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../utilities/Color";
import { Image } from "react-native";
import InputGlobal from "../../components/InputGlobal";
import { KeyboardAvoidingView } from "react-native";
import Buttons from "../../components/Buttons";
import { Ionicons } from "@expo/vector-icons";
import ModalGender from "../../components/ModalGender";
import ProgressBar from "../../components/ProgressBar";
import { Octicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import ProfileImage from "../../components/ProfileImage";
import { MaterialIcons } from '@expo/vector-icons';




export default function SignUp({ navigation }) {
  const [selectGender, setSelectGender] = useState("Gender");
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: selectGender,
  });
  const [showPassword, setShowPassword] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null)


  const selectedGender = (gender) => {
    setSelectGender(gender);
    setShowModal(!showModal);
  };

  const handleProfileImage = async () => {
    const requestLibrary = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(requestLibrary.granted){
      let image = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
          allowsEditing: true,
          aspect: [4, 3]
      })
console.log(image);
      if (!image.canceled) {
          setProfileImage(image.assets[0].uri)
      }
    }else {
      alert('Permission to access Library is required!')
    
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
      <View style={{flexDirection:"row", alignItems:"center", gap:20, marginBottom:20, marginTop:20}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Octicons name="arrow-left" size={25} color={colors.black} />
          </TouchableOpacity>
          <ProgressBar step={50}/>
        </View>

        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
            <View style={{marginBottom:15}}>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: "bold",
                      }}
                    >
                      Complete your profile 📋
                    </Text>

                    <Text style={{ fontSize: 18, marginTop: 10, color: colors.gray, fontWeight:"500" }}>Don't worry, only you can see your personal data. No one else will be able to see it. </Text>
                    </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
              <ProfileImage profileImage={profileImage} handleProfileImage={handleProfileImage} />
                    <View style={{ marginTop: 30 }}>
                      <InputGlobal
                      title={"Full Name"}
                        onChangeText={(username) =>
                          setSignupData({ ...signupData, username })
                        }
                        value={signupData.username}
                        placeholder={"Full Name"}
                      />
                      <InputGlobal
                      title={"Phone Number"}
                      keyboardType={"phone-pad"}
                        value={signupData.email}
                        onChangeText={(email) =>
                          setSignupData({ ...signupData, email })
                        }
                        placeholder={"+1 000 0000 000 "}
                      />
                      <InputGlobal
                      title={"Gender"}
                        value={selectGender}
                        rightIcon={<MaterialIcons name="keyboard-arrow-down" size={25} color={colors.main} />}
                        onFocus={() => setShowModal(!showModal)}
                      />
                      <InputGlobal
                      title={"Date of Birth"}
                        placeholder={"MM/DD/YYYY"}
                        rightIcon={<Ionicons name="calendar" size={24} color={colors.main} /> }
                      />

                    
                      <InputGlobal
                        onChangeText={(password) =>
                          setSignupData({ ...signupData, password })
                        }
                        value={signupData.password}
                        secure={showPassword}
                        placeholder={"Password"}
                        rightIcon={
                          <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <Ionicons
                                name="eye-off-sharp"
                                size={24}
                                color={colors.main}
                              />
                            ) : (
                              <Ionicons
                                name="eye-sharp"
                                size={24}
                                color={colors.main}
                              />
                            )}
                          </TouchableOpacity>
                        }
                      />
                      <InputGlobal
                        onChangeText={(confirmPassword) =>
                          setSignupData({ ...signupData, confirmPassword })
                        }
                        value={signupData.confirmPassword}
                        secure={showPassword}
                        placeholder={"Confirm Password"}
                        rightIcon={
                          <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <Ionicons
                                name="eye-off-sharp"
                                size={24}
                                color={colors.main}
                              />
                            ) : (
                              <Ionicons
                                name="eye-sharp"
                                size={24}
                                color={colors.main}
                              />
                            )}
                          </TouchableOpacity>
                        }
                      />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 6,
                      justifyContent: "center",
                      marginTop: 20,
                    }}
                  >
                    <Text style={{ fontSize: 15 }}>
                      Do you have an account?
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.replace("signin")}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: colors.main,
                          fontWeight: "bold",
                        }}
                      >
                        SignIn
                      </Text>
                    </TouchableOpacity>
                  </View>
              <ModalGender
                checked={selectGender}
                selectedGender={(e) => selectedGender(e)}
                isVisible={showModal}
                onBackdropPress={() => setShowModal(!showModal)}
              />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <Buttons
          onPress={() => navigation.navigate("choosetopics")}
          title={"Continue"}
        />
      </View>
    </SafeAreaView>
  );
}
