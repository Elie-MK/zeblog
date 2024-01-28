import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../utilities/Color";
import { Image } from "react-native";
import InputGlobal from "../../components/InputGlobal";
import { KeyboardAvoidingView } from "react-native";
import Buttons from "../../components/Buttons";
import { Ionicons } from "@expo/vector-icons";
import ModalGender from "../../components/ModalGender";

export default function SignUp({ navigation }) {
  const [selectGender, setSelectGender]=useState('Gender')
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: selectGender,
  });
  const [showPassword, setShowPassword] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const selectedGender = (gender)=>{
    setSelectGender(gender)
    setShowModal(!showModal)
  }


  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ backgroundColor: colors.white, flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 60,
              marginBottom:30
            }}
          >
            <View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Image
                  style={{ width: 250, height: 320 }}
                  source={require("../../assets/images/3dsignup.png")}
                />
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Sign up
                </Text>

                <View style={{ marginTop: 30 }}>
                  <InputGlobal
                    onChangeText={(username) =>
                      setSignupData({ ...signupData, username })
                    }
                    value={signupData.username}
                    placeholder={"Username"}
                  />
                  <InputGlobal
                    value={signupData.email}
                    onChangeText={(email) =>
                      setSignupData({ ...signupData, email })
                    }
                    placeholder={"email@email.com"}
                  />
                 <InputGlobal
                    value={selectGender}
                    onFocus={()=>setShowModal(!showModal)}
                    // placeholder={"Gender"}
                    // disabled={true}
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
              </View>
             

              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Buttons title={"Register"} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 6,
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 15 }}>Do you have an account?</Text>
                <TouchableOpacity onPress={() => navigation.replace("signin")}>
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
            </View>
          </View>
          <ModalGender checked={selectGender} selectedGender={(e)=>selectedGender(e)}  isVisible={showModal} onBackdropPress={()=>setShowModal(!showModal)} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
