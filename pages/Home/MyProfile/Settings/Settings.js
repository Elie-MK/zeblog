import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import SettingsItem from '../../../../components/SettingsItem';
import { MaterialIcons, FontAwesome5, FontAwesome, MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';




const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={{marginHorizontal:20, flex:1}}>
       <View style={{flexDirection:"row", alignItems:"center", gap:20, marginBottom:10}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color="black" />
            </TouchableOpacity>
                <Text style={{fontSize:20, fontWeight: "bold"}}>Settings</Text>
        </View>

        <ScrollView style={{flex:1}}>
            <SettingsItem onPress={()=>navigation.navigate('personalinfo')} IconRight={FontAwesome5} titleIcon={"user-alt"} title={"Personal Info"} />
            <SettingsItem IconRight={FontAwesome} titleIcon={"bell"} title={"Notification"} />
            <SettingsItem IconRight={MaterialCommunityIcons} titleIcon={"shield-check"} title={"Security"} />
            <SettingsItem isLanguage currentLanguage={"English (US)"} IconRight={MaterialCommunityIcons} titleIcon={"file-document"} title={"Language"} />
            <SettingsItem IconRight={Entypo} titleIcon={"eye"} title={"Dark Mode"} />
            <SettingsItem IconRight={MaterialIcons} titleIcon={"people-alt"} title={"Invite Friends"} />
            <SettingsItem IconRight={Entypo} titleIcon={"help-with-circle"} title={"Help Center"} />
            <SettingsItem IconRight={Entypo} titleIcon={"info-with-circle"} title={"About Zeblog"} />
            <SettingsItem IconRight={Ionicons} titleIcon={"log-out"} title={"Logout"} />

        </ScrollView>
    </SafeAreaView>
  )
}

export default Settings