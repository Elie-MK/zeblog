import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Avatar, Icon } from '@rneui/themed';
import { colors } from '../utilities/Color';


const ProfileImage = ({profileImage, handleProfileImage }) => {

  return (
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
  )
}

export default ProfileImage