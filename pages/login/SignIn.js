import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox, Divider } from "@rneui/themed";
import { KeyboardAvoidingView } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Image } from "react-native";

import { colors } from "../../utilities/Color";
import InputGlobal from "../../components/InputGlobal";
import Buttons from "../../components/Buttons";
import { Androids } from "../../utilities/Platform";
import { loginUser } from "../../utilities/ApiRequestsService";
import { emailRegex, passwordRegEx } from "../../utilities/AllRegex";
import { CommonActions } from "@react-navigation/native";
import AlertModal from "../../components/AlertModal";
import SignInSocialMedia from "../../components/SignInSocialMedia";

const SignIn = ({ navigation }) => {
  const [signupData, setSignupData] = useState({
    userNameOrEmail: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [typeAlert, setTypeAlert] = useState(null);

  const toggleCheckbox = () => setChecked(!checked);

  function handleInputChange(name, value) {
    setSignupData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handlePasswordBlur() {
    const passwordValid = passwordRegEx.test(signupData.password);
    if (!passwordValid) {
      setAlertModal(true)
      setTypeAlert("error")
      setAlertTitle("Invalid Password")
      setAlertMessage("Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.")
    }
  }

  function handleEmailAndUsernameBlur() {
    if (!signupData.userNameOrEmail) {
      setAlertModal(true)
      setTypeAlert("error")
      setAlertTitle("Username or Email field")
      setAlertMessage("This field must not be empty")
    }
  }

  async function handleSignIn() {
    setIsConnecting(true);
    const signupDataToSend = {
      password: signupData.password,
    };
    const email = emailRegex.exec(signupData.userNameOrEmail);
    if (email) {
      signupDataToSend.email = signupData.userNameOrEmail.toLowerCase();
    } else {
      signupDataToSend.username = signupData.userNameOrEmail.toLowerCase();
    }
    try {
      if (
        signupData.userNameOrEmail !== "" &&
        signupDataToSend.password !== ""
      ) {
        const response = await loginUser(signupDataToSend);
        if (response.status === 201) {
          setIsConnecting(false);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "home" }],
            })
          );
        }
      } else {
        setIsConnecting(false);
        setAlertModal(true)
        setTypeAlert("error")
        setAlertTitle("Invalid Credentials")
        setAlertMessage("Username/Email and Password are required.")
      }
    } catch (error) {
      setIsConnecting(false);
      setAlertModal(true)
        setTypeAlert("error")
        setAlertTitle("Invalid Credentials")
        setAlertMessage("Your username/email or password are wrongs.")
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1, marginHorizontal: 20 }}
      >
        <TouchableOpacity
          style={{ marginTop: Androids ? 40 : 20 }}
          onPress={() => navigation.replace("login")}
        >
          <Octicons name="arrow-left" size={25} color={colors.black} />
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={{ flex: 1, marginTop: 20 }}>
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                  }}
                >
                  Hello there 👋
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 20,
                    fontWeight: "500",
                    color: colors.gray,
                  }}
                >
                  Please enter your username/email and password to sign in
                </Text>
              </View>

              <View style={{ marginTop: 20 }}>
                <InputGlobal
                onBlur={handleEmailAndUsernameBlur}
                  onChangeText={(userNameOrEmail) =>
                    handleInputChange("userNameOrEmail", userNameOrEmail)
                  }
                  value={signupData.name}
                  placeholder={"Username / Email"}
                />

                <InputGlobal
                  onChangeText={(password) =>
                    handleInputChange("password", password)
                  }
                  value={signupData.password}
                  secure={showPassword}
                  onBlur={handlePasswordBlur}
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
              </View>
            </View>

            <TouchableOpacity
              onPress={toggleCheckbox}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor={colors.main}
              />
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Remember me
              </Text>
            </TouchableOpacity>

            <Divider
              style={{ marginTop: 20, marginBottom: 20 }}
              color={colors.lightGray}
            />

            <View style={{flexDirection:"row", justifyContent:"center"}}>
              <Button title="Forgot password" color={colors.main} />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15,
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  <Text
                    style={{ color: colors.lightGray, alignSelf: "flex-end" }}
                  >
                    __________________
                  </Text>
                  <Text style={{ color: colors.gray }}>or continue with</Text>
                  <Text style={{ color: colors.lightGray }}>
                    __________________
                  </Text>
                </View>
              </View>
            </View>

            <SignInSocialMedia />

            <Buttons
              isLoading={isConnecting}
              disabled={isConnecting}
              onPress={handleSignIn}
              title={"Sign In"}
            />

            <View
              style={{
                flexDirection: "row",
                gap: 6,
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.replace("signupsteps")}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: colors.main,
                    fontWeight: "bold",
                  }}
                >
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>
            <AlertModal
              isVisible={alertModal}
              onDismiss={()=>setAlertModal(false)}
              alertType={typeAlert}
              message={alertMessage}
              title={alertTitle}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
