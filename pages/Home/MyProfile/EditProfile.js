import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from "@expo/vector-icons";
import { Avatar, Icon } from '@rneui/themed';
import { colors } from '../../../utilities/Color';
import * as ImagePicker from 'expo-image-picker';


const EditProfile = ({navigation}) => {
    const [profileImage, setProfileImage] = useState(null)

    const handleProfileImage = async () => {
      const requestLibrary = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if(requestLibrary.granted){
        let image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
            aspect: [4, 3]
        })
console.log(image);
        if (!image.canceled) {
            setProfileImage(image.assets[0].uri)
        }
      }else {
        alert('Permission to access Library is required!')
      
      }
    }
    

  return (
    <View style={{marginHorizontal:20, marginTop:20, flex:1}}>
     <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight: "bold"}}>Edit Profile</Text>
     </View>

     <TouchableOpacity onPress={handleProfileImage} style={{flexDirection:"row", justifyContent:"center", marginTop:30}}>
     <View>
          <Avatar
            rounded
            source={{
              uri: profileImage?profileImage:'https://randomuser.me/api/portraits/women/40.jpg',
            }}
            size="xlarge"
          />
         <View style={{ position: 'absolute', top: 120, left: 100, backgroundColor:colors.main, padding:5, borderRadius:10  }}>
            <Icon  type="materialicons" name="mode-edit" color={colors.white} size={20}/>
         </View>
        </View>
     </TouchableOpacity>
    </View>
  )
}

export default EditProfile