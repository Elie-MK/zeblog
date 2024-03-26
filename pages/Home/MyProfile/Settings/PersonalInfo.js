import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import ProfileImage from '../../../../components/ProfileImage';
import * as ImagePicker from 'expo-image-picker';
import InputSettings from '../../../../components/InputSettings';
import Buttons from '../../../../components/Buttons';
import BottomSheetModal from '../../../../components/BottomSheetModal';
import GenderItem from '../../../../components/GenderItem';



const PersonalInfo = ({navigation}) => {
    const [profileImage, setProfileImage] = useState(null)
    const [selectGender, setSelectGender] = useState("Gender");
    const [showModal, setShowModal] = useState(false);


    const handleProfileImage = async () => {
        const requestLibrary = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(requestLibrary.granted){
          let image = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 1,
              allowsEditing: true,
              aspect: [4, 3]
          })
          if (!image.canceled) {
              setProfileImage(image.assets[0].uri)
          }
        }else {
          alert('Permission to access Library is required!')
        
        }
      }

      const selectedGender = (gender) => {
        setSelectGender(gender);
        setShowModal(!showModal);
      };

  return (
   <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1}}
   >
     <SafeAreaView style={{flex:1, marginHorizontal:20}}>
        <View style={{flexDirection:"row", marginBottom:10, alignItems:"center", justifyContent:"space-between"}}>
        <View style={{flexDirection:"row", alignItems:"center", gap:20, marginTop:10}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color="black" />
            </TouchableOpacity>
                <Text style={{fontSize:20, fontWeight: "bold"}}>Personal Info</Text>
        </View>
            <Feather name="edit-3" size={24} color="black" />
        </View>

        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            <ProfileImage profileImage={profileImage} handleProfileImage={handleProfileImage} />
            <InputSettings title={"Full Name"} />
            <InputSettings title={"Email"} />
            <InputSettings title={"Phone Number"} />
            <InputSettings title={"Gender"} value={selectGender}
                        onFocus={() => setShowModal(!showModal)} />
            <InputSettings title={"Date of Birth"} />
            <InputSettings title={"Street Adress"} />

            <Buttons title={"Save"} />

        </ScrollView>
        <BottomSheetModal
      title={"Choose your gender"}
        isVisible={showModal}
        onBackdropPress={() => setShowModal(!showModal)}
      >
        <GenderItem checked={selectGender}
        selectedGender={(e) => selectedGender(e)}  />
      </BottomSheetModal>
    </SafeAreaView>
   </KeyboardAvoidingView>
  )
}

export default PersonalInfo