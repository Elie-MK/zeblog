import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import LanguageItem from '../../../../components/LanguageItem';

const Languages = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState("English (US)");

  return (
    <SafeAreaView style={{flex:1, marginHorizontal:20}}>
           <View style={{flexDirection:"row", alignItems:"center", gap:20, marginTop:10}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color="black" />
            </TouchableOpacity>
                <Text style={{fontSize:20, fontWeight: "bold"}}>Languages</Text>
        </View>

        <ScrollView style={{flex:1, marginTop:20}} >
            <Text style={{fontSize:20, fontWeight: "bold"}}>Language</Text>

            <View style={{marginTop:20}}>
            <LanguageItem titleLanguage={"English (US)"} setLanguage={setSelectedLanguage} language={selectedLanguage} />
            <LanguageItem titleLanguage={"English (UK)"} setLanguage={setSelectedLanguage} language={selectedLanguage} />
            <LanguageItem titleLanguage={"French (France)"} setLanguage={setSelectedLanguage} language={selectedLanguage} />
            <LanguageItem titleLanguage={"French (DRC)"} setLanguage={setSelectedLanguage} language={selectedLanguage} />
            <LanguageItem titleLanguage={"Arabic"} setLanguage={setSelectedLanguage} language={selectedLanguage} />
            <LanguageItem titleLanguage={"Spanish"} setLanguage={setSelectedLanguage} language={selectedLanguage} />
            </View>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default Languages