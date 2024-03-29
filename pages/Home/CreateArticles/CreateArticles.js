import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../utilities/Color";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import Buttons from "../../../components/Buttons";

const CreateArticles = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need to library permissions to upload image!");
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      // console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1}}
   >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{flex: 1, marginHorizontal: 20, marginTop:10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity  onPress={()=>navigation.goBack()} >
            <MaterialIcons
              style={{ flexDirection: "row", alignSelf: "flex-start" }}
              name="arrow-back-ios"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {
            !image? <TouchableOpacity  onPress={pickImage}>
            <Text
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 15,
                flexDirection: "row",
                alignSelf: "flex-start",
              }}
            >
              + Upload cover
            </Text>
          </TouchableOpacity> :<TouchableOpacity style={{backgroundColor:colors.main, borderRadius: 20}} >
            <Text
              style={{
                padding: 10,
                color:colors.white,
                flexDirection: "row",
                alignSelf: "flex-start",
                fontWeight:"bold"
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
          }
        </View>

            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
              <TouchableOpacity activeOpacity={0.7} onPress={image&&pickImage} style={{ marginTop: 20 }}>
                <Image
                  style={{ width: "auto", height: 300, borderRadius: 20 }}
                  source={!image?require('../../../assets/images/addImage.png'):{uri:image}}
                />
              </TouchableOpacity>

                <TextInput
                  placeholder="Title"
                  placeholderTextColor={colors.gray}
                  style={{
                    backgroundColor: colors.subGray,
                    borderColor: colors.gray,
                    borderRadius: 10,
                    padding: 15,
                    fontSize: 20,
                    marginTop:15,
                    fontWeight: "bold",
                    marginVertical: 10,
                  }}
                />
                <TextInput
                  multiline
                  placeholder="Content"
                  placeholderTextColor={colors.gray}
                  scrollEnabled
                  autoCorrect
                  style={{
                    backgroundColor: colors.subGray,
                    borderColor: colors.gray,
                    borderRadius: 10,
                    padding: 15,
                    fontSize: 18,
                    paddingTop: 20,
                    height: 300,
                    marginVertical: 10,
                  }}
                />
              <View>
                <Buttons title={"Publish"} />
              </View>
            </ScrollView>
    </SafeAreaView>
            </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CreateArticles;
