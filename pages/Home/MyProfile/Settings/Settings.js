import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import SettingsItem from '../../../../components/SettingsItem';
import { MaterialIcons, FontAwesome5, FontAwesome, MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import BottomSheetModal from '../../../../components/BottomSheetModal';
import ItemGlobalModal from '../../../../components/ItemGlobalModal';
import { Androids } from '../../../../utilities/Platform';


const Settings = ({navigation}) => {

  const [showModal, setShowModal] = useState(false);

  function handleConfirm (){
    setShowModal(!showModal)
    navigation.replace('login')
  }
  return (
    <SafeAreaView style={{marginHorizontal:20, flex:1}}>
       <View style={{flexDirection:"row", alignItems:"center", gap:20, marginTop:Androids?30:null, marginBottom:10}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color="black" />
            </TouchableOpacity>
                <Text style={{fontSize:20, fontWeight: "bold"}}>Settings</Text>
        </View>

        <ScrollView style={{flex:1}}>
            <SettingsItem onPress={()=>navigation.navigate('personalinfo')} IconRight={FontAwesome5} titleIcon={"user-alt"} title={"Personal Info"} />
            <SettingsItem onPress={()=>navigation.navigate('settingnotification')} IconRight={FontAwesome} titleIcon={"bell"} title={"Notification"} />
            <SettingsItem onPress={()=>navigation.navigate('security')} IconRight={MaterialCommunityIcons} titleIcon={"shield-check"} title={"Security"} />
            <SettingsItem onPress={()=>navigation.navigate('language')} isLanguage currentLanguage={"English (US)"} IconRight={MaterialCommunityIcons} titleIcon={"file-document"} title={"Language"} />
            <SettingsItem IconRight={Entypo} titleIcon={"eye"} title={"Dark Mode"} />
            <SettingsItem IconRight={MaterialIcons} titleIcon={"people-alt"} title={"Invite Friends"} />
            <SettingsItem IconRight={Entypo} titleIcon={"help-with-circle"} title={"Help Center"} />
            <SettingsItem IconRight={Entypo} titleIcon={"info-with-circle"} title={"About Zeblog"} />
            <SettingsItem onPress={()=>setShowModal(!showModal)} IconRight={Ionicons} titleIcon={"log-out"} title={"Logout"} />
        </ScrollView>
        <BottomSheetModal
      title={"Logout"}
        isVisible={showModal}
        onBackdropPress={() => setShowModal(!showModal)}
      >
        <ItemGlobalModal onPressCancel={() => setShowModal(!showModal)} onPressConfirm={handleConfirm} message={"Are you sure you want to logout?"}  />
      </BottomSheetModal>
    </SafeAreaView>
  )
}

export default Settings