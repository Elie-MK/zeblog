import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import SearchInput from '../../../components/SearchInput'
import { AntDesign } from "@expo/vector-icons";
import SecondCardArticles from '../../../components/SecondCardArticles';
import { ScrollView } from 'react-native';

const MostPopular = ({navigation}) => {
    const [isActiveSearch, setIsActiveSearch] = useState(false)

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{marginHorizontal:15, flex:1, marginTop:20}}>
      <View>
     <View style={{flexDirection:"row", alignItems:"center",  justifyContent:"space-between"}}>
        <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
          <Text style={{fontSize:20, fontWeight: "bold"}}>Most Popular</Text>
        </View>
        <View>
        <TouchableOpacity  onPress={()=>setIsActiveSearch(!isActiveSearch)}>
            <AntDesign name="search1" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
         {
            isActiveSearch && 
                <SearchInput placeholder={"Search by title or author"}/>
         }
     </View>
     <ScrollView style={{marginTop:20}}>
        <SecondCardArticles />
     </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default MostPopular