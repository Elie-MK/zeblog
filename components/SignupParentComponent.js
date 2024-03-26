import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import ProgressBar from "./ProgressBar";
import Buttons from "./Buttons";
import { colors } from "../utilities/Color";
import { useNavigation } from "@react-navigation/native";
import SearchInput from "./SearchInput";
import SkipAndNextButton from "./SkipAndNextButton";

const SignupParentComponent = ({
  children,
  isTopic,
  step,
  onClear,
  search,
  setSearch,
  isCountryScreen,
  title,
  titleButton,
  subTitle,
  navigationRoute,
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Octicons name="arrow-left" size={25} color={colors.black} />
          </TouchableOpacity>
          <ProgressBar step={step} />
        </View>

        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
          <View style={{ marginBottom: 15 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>

            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                color: colors.gray,
                fontWeight: "500",
              }}
            >
              {subTitle}
            </Text>
          </View>
          {isCountryScreen && (
            <View style={{ marginTop: 5, marginBottom: 15 }}>
              <SearchInput
                onClear={onClear}
                value={search}
                onChangeText={(e) => setSearch(e)}
              />
            </View>
          )}
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        {isTopic ? (
          <View style={{ marginTop: 10 }}>
            <SkipAndNextButton
              scrollSkip={() => navigation.navigate("discoverPeople")}
              scrollTo={() => navigation.navigate("discoverPeople")}
            />
          </View>
        ) : (
          <Buttons
            onPress={() => navigation.navigate(navigationRoute)}
            title={titleButton}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SignupParentComponent;
