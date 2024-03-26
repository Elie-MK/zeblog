import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../../utilities/Color";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import Buttons from "../../components/Buttons";

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <View>
          <Image
            style={{ width: 300, height: 300 }}
            source={require("../../assets/images/signin.png")}
          />

          <View>
            <Text
              style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}
            >
              Let's you in
            </Text>
            <View style={{ marginTop: 25 }}>
              <ButtonWithIcon
                img={require("../../assets/images/icons/google.png")}
                title={"Coninue with Google"}
              />
              <ButtonWithIcon
                img={require("../../assets/images/icons/facebook.png")}
                title={"Coninue with Facebook"}
              />
              <ButtonWithIcon
              
                img={require("../../assets/images/icons/apple.png")}
                title={"Coninue with Apple"}
                
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                marginTop: 15,
              }}
            >
              <Text style={{ color: "gray" }}>__________________</Text>
              <Text style={{ fontWeight: "bold", fontSize: 20, color: "gray" }}>
                or
              </Text>
              <Text style={{ color: "gray" }}>___________________</Text>
            </View>

            <View style={{ marginTop: 20 }}>
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
    </SafeAreaView>
  );
};

export default Login;
