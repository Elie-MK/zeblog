import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { Avatar, Icon } from '@rneui/themed';
import { colors } from '../../../utilities/Color';

const EditProfile = ({navigation}) => {
    

  return (
    <View style={{marginHorizontal:20, marginTop:20, flex:1}}>
     <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight: "bold"}}>Edit Profile</Text>
     </View>
     
     <View style={{flexDirection:"row", justifyContent:"center", marginTop:30}}>
     <View>
          <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/women/40.jpg',
            }}
            size="xlarge"
          />
         <View style={{ position: 'absolute', top: 120, left: 100, backgroundColor:colors.main, padding:5, borderRadius:10  }}>
            <Icon  type="materialicons" name="mode-edit" color={colors.white} size={20}/>
         </View>
        </View>
     </View>
    </View>
  )
}

export default EditProfile