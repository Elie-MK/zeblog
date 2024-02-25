import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import NavHeader from './NavHeader'
import CardByTopicArticles from './CardByTopicArticles'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../utilities/Color';
import SecondCardArticles from './SecondCardArticles';


const DetailArticlesByTopics = () => {
  return (
   <SafeAreaView style={{flex:1}}>
    <NavHeader screenTitle={"Travel"}>
      <View style={{marginTop:20}}>
        <CardByTopicArticles />
        <View style={{marginTop:15}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Sort by</Text>
            <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
              <Text style={{color:colors.main, fontSize:14}}>Most Popular</Text>
              <MaterialCommunityIcons name="sort" size={30} color={colors.main} />
            </View>
          </View>
          <View style={{marginTop:15}}>
            <SecondCardArticles />
          </View>
        </View>
      </View>
    </NavHeader>
   </SafeAreaView>
  )
}

export default DetailArticlesByTopics