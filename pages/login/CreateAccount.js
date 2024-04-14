import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SignupParentComponent from '../../components/SignupParentComponent'
import InputGlobal from '../../components/InputGlobal'
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../../utilities/Color';


const CreateAccount = () => {
  const [selectGender, setSelectGender] = useState("Gender");
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: selectGender,
  });
  const [showPassword, setShowPassword] = useState(true);
  return (
    <SignupParentComponent
    title={"Create an account 🔐"}
    navigationRoute={"choosetopics"}
    titleButton={"Continue"}
    subTitle={"Enter your username, email & password. If you forget it, then you have to do forgot password."}
    step={15}
    lastStep={50}
    >
      <SafeAreaView>
        <View style={{marginTop:30, marginHorizontal:-15}}>
          <InputGlobal
            title={"Username"}
            placeholder={"Username"}
          />
          <InputGlobal
            title={"Email"}
            placeholder={"Email"}
          />
          <InputGlobal
          title={"Password"}
          onChangeText={(confirmPassword) =>
            setSignupData({ ...signupData, confirmPassword })
          }
          value={signupData.confirmPassword}
          secure={showPassword}
          placeholder={"Confirm Password"}
          rightIcon={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Ionicons name="eye-off-sharp" size={24} color={colors.main} />
              ) : (
                <Ionicons name="eye-sharp" size={24} color={colors.main} />
              )}
            </TouchableOpacity>
          }
          />
          <InputGlobal
          title={"Confirm Password"}
          onChangeText={(confirmPassword) =>
            setSignupData({ ...signupData, confirmPassword })
          }
          value={signupData.confirmPassword}
          secure={showPassword}
          placeholder={"Confirm Password"}
          rightIcon={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Ionicons name="eye-off-sharp" size={24} color={colors.main} />
              ) : (
                <Ionicons name="eye-sharp" size={24} color={colors.main} />
              )}
            </TouchableOpacity>
          }
          />
        </View>
      </SafeAreaView>
    </SignupParentComponent>
  )
}

export default CreateAccount