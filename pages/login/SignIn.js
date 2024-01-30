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
import { CheckBox } from "@rneui/themed";

const SignIn = ({ navigation }) => {
  const [signupData, setSignupData] = useState({
    name: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ backgroundColor: colors.white, flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 60,
            }}
          >
            <View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Image
                  style={{ width: 310, height: 295 }}
                  source={require("../../assets/images/3dsignin.png")}
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
                  SignIn
                </Text>

                <View style={{ marginTop: 30 }}>
                  <InputGlobal
                    onChangeText={(name) =>
                      setSignupData({ ...signupData, name })
                    }
                    value={signupData.name}
                    placeholder={"Name's"}
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
                </View>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  checked={checked}
                  onPress={toggleCheckbox}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor={colors.main}
                />
                <Text style={{ fontSize: 16, fontWeight:"400" }}>Remember me</Text>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Buttons title={"Connexion"} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 6,
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.replace("signupsteps")}>
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
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
