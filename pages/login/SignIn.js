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
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../utilities/Color";
import { Image } from "react-native";
import InputGlobal from "../../components/InputGlobal";
import { KeyboardAvoidingView } from "react-native";
import Buttons from "../../components/Buttons";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox, Divider } from "@rneui/themed";
import { Octicons } from "@expo/vector-icons";


const SignIn = ({ navigation }) => {
  const [signupData, setSignupData] = useState({
    name: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <SafeAreaView style={{flex:1}}>
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, marginHorizontal:20}}
    >
       <TouchableOpacity style={{marginTop:20}} onPress={()=>navigation.goBack()}>
                    <Octicons name="arrow-left" size={25} color={colors.black} />
                </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{flex:1, marginTop:20}}>
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
                    marginTop:20, 
                    fontWeight:"500", 
                    color:colors.gray
                  }}
                >
                  Please enter your username/email and password to sign in
                </Text>
                </View>

                <View style={{ marginTop: 20}}>
                  <InputGlobal
                    onChangeText={(name) =>
                      setSignupData({ ...signupData, name })
                    }
                    value={signupData.name}
                    placeholder={"Username / Email"}
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

              <TouchableOpacity onPress={toggleCheckbox} style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  checked={checked}
                  onPress={toggleCheckbox}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor={colors.main}
                />
                <Text style={{ fontSize: 16, fontWeight:"600" }}>Remember me</Text>
              </TouchableOpacity>

              <Divider  style={{marginTop:20, marginBottom:20}} color={colors.lightGray}/>

              <View style={{flexDirection:"row", alignItems:"center",justifyContent:"center"}}>
                <View>
                <Button title="Forgot password" color={colors.main} />
                <View style={{flexDirection:"row", alignItems:"center", gap:15,marginTop:20, marginBottom:20}} >
                  <Text style={{color:colors.lightGray, alignSelf:"flex-end"}}>__________________</Text>
                  <Text style={{color:colors.gray,}}>or continue with</Text>
                  <Text style={{color:colors.lightGray}}>__________________</Text>
                </View>
                </View>
              </View>

              <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:20}}>
                  <TouchableOpacity activeOpacity={0.5} style={{borderWidth:1, width:120, borderRadius:20, borderColor:colors.lightGray, padding:8, flexDirection:"row", justifyContent:"center"}}>
                    <Image style={{width:30, height:30}} source={require('../../assets/images/icons/google.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.5} style={{borderWidth:1, width:120, borderRadius:20, borderColor:colors.lightGray, padding:8, flexDirection:"row", justifyContent:"center"}}>
                    <Image style={{width:30, height:30}} source={require('../../assets/images/icons/apple.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.5} style={{borderWidth:1, width:120, borderRadius:20, borderColor:colors.lightGray, padding:8, flexDirection:"row", justifyContent:"center"}}>
                    <Image style={{width:30, height:30}} source={require('../../assets/images/icons/facebook.png')} />
                  </TouchableOpacity>
                </View>

                <Buttons onPress={()=>navigation.replace('home')} title={"Sign In"} />

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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
