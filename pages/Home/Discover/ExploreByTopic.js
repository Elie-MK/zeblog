import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from "@expo/vector-icons";
import SearchInput from '../../../components/SearchInput';
import NavHeader from '../../../components/NavHeader';
import CardTopics from '../../../components/CardTopics';

const ExploreByTopic = ({navigation}) => {

  return (
    <SafeAreaView style={{flex:1}}>
       <NavHeader screenTitle={"Explore by Topics"}>
        <View style={{flexDirection:"row", gap:6, marginTop:25}}>
        <CardTopics onPress={()=>navigation.navigate('articlesbytopics')} />
        <CardTopics />
        </View>
       </NavHeader>
    </SafeAreaView>
  )
}

export default ExploreByTopic