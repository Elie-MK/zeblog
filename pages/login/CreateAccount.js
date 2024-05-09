import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SignupParentComponent from '../../components/SignupParentComponent'
import InputGlobal from '../../components/InputGlobal'
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../../utilities/Color';


const CreateAccount = ({route}) => {
  const { datas } = route.params
  const [showPassword, setShowPassword] = useState(true);
  const [invalideEmail, setInvalideEmail]=useState(false)
  const [passwordMatch, setPassWordMatch]= useState(false)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    ...datas
  });

  function handleEmailBlur(){
    if(!emailRegex.test(signupData.email)){
      setInvalideEmail(true)
    }else{
      setInvalideEmail(false)
    }
  }

  function handleInputChanges(name, value){
    if(name === "username"){
      value = value.replace(" ", '' )
    }
    setSignupData(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }


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
          value={signupData.username}
          onChangeText={(username) => handleInputChanges('username', username)}
            title={"Username"}
            placeholder={"Username"}
          />
          <InputGlobal
          value={signupData.email}
          onBlur={handleEmailBlur}
          onChangeText={(email) => handleInputChanges('email', email)}
            title={"Email"}
            placeholder={"Email"}
            isError={invalideEmail}
            errorMessage={"Invalid email address"}
          />
         
          <InputGlobal
          title={"Password"}
          onChangeText={(password) =>
            handleInputChanges('password', password)
          }
          value={signupData.password}
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
            handleInputChanges('confirmPassword', confirmPassword)
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