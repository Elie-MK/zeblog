import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { colors } from "../../utilities/Color";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import Buttons from "../../components/Buttons";
import { useAuth } from "../../context/AuthContext";
import { CommonActions } from "@react-navigation/native";

const Login = ({navigation}) => {
  const { isConnected } = useAuth()

  useEffect(()=>{
    if(isConnected){
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "home" }],
        })
      );
    }
  },[isConnected])
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View>
          <View style={{flexDirection:"row", justifyContent:"center"}}>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../../assets/images/signin.png")}
          />
          </View>

          <View>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
            >
              Let's you in
            </Text>
            <View style={{ marginTop: 25, flexDirection:"row", justifyContent:"center"  }}>
              <View>
              <ButtonWithIcon
                img={require("../../assets/images/icons/google.png")}
                title={"Continue with Google"}
              />
              <ButtonWithIcon
                img={require("../../assets/images/icons/facebook.png")}
                title={"Continue with Facebook"}
              />
              <ButtonWithIcon
              
                img={require("../../assets/images/icons/apple.png")}
                title={"Continue with Apple"}
                
              />
              </View>
            </View>
            <View style={{flexDirection:"row", justifyContent:"center"}}>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                marginTop: 15,
              }}
            >
              <Text style={{ color: "gray" }}>________________</Text>
              <Text style={{ fontWeight: "bold", fontSize: 20, color: "gray" }}>
                or
              </Text>
              <Text style={{ color: "gray" }}>_________________</Text>
            </View>
            </View>

            <View style={{ marginTop: 20, marginBottom:10 }}>
              <Buttons title={"Sign in with  password"} onPress={()=>navigation.replace('signin')} />

              <View
                style={{
                  flexDirection: "row",
                  gap: 6,
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 15 }}>Don't have an account ?</Text>
                <TouchableOpacity onPress={()=>navigation.replace('signupsteps')}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: colors.main,
                      fontWeight: "bold",
                    }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
