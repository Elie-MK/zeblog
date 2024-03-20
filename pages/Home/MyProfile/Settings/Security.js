import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from "@expo/vector-icons";
import SwitchInput from '../../../../components/SwitchInput';
import { colors } from '../../../../utilities/Color';
import { Button } from "@rneui/base";


const Security = ({navigation}) => {
    const [switchStates, setSwitchStates] = useState({
        'Remember me': false,
        'Biometric ID': false,
        'Face ID': false,
        'SMS Authentificator': false,
        'Google Authentificator': false,
    });

    const handleSwitch = (title) => {
        setSwitchStates((prevStates) => ({
            ...prevStates,
            [title]: !prevStates[title],
        }));
    }

    const renderSwitch = (title) => (
        <SwitchInput
            key={title} 
            title={title}
            trackColor={{ true: colors.main }}
            value={switchStates[title]}
            onValueChange={() => handleSwitch(title)}
        />
        
        )
  return (
    <SafeAreaView style={{flex:1, marginHorizontal:20}}>
         <View style={{flexDirection:"row", alignItems:"center", gap:20, marginTop:10}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color="black" />
            </TouchableOpacity>
                <Text style={{fontSize:20, fontWeight: "bold"}}>Security</Text>
        </View>

        <ScrollView style={{flex:1, marginTop:20}}>
            
        {
            Object.keys(switchStates).map(renderSwitch)
        }

        <Button style={{marginTop:30}} buttonStyle={{backgroundColor:colors.second, padding:15, borderRadius:20}} titleStyle={{color:colors.main, fontWeight:"bold"}} title='Change Password' />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Security