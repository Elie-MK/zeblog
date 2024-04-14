import { View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Avatar, Icon } from '@rneui/themed';
import { colors } from '../utilities/Color';

const ProfileImage = ({profileImage, handleProfileImage }) => {

  return (
    <View  style={{flexDirection:"row", justifyContent:"center", marginTop:30}}>
    <TouchableOpacity onPress={handleProfileImage}>
         <Avatar
           rounded
           source={profileImage?{uri: profileImage} : require("../assets/images/userProfile.jpg")}
           size="xlarge"
         />
        <View style={{ position: 'absolute', top: 120, left: 100, backgroundColor:colors.main, padding:5, borderRadius:10  }}>
           <Icon  type="materialicons" name="mode-edit" color={colors.white} size={20}/>
        </View>
       </TouchableOpacity>
    </View>
  )
}

export default ProfileImage