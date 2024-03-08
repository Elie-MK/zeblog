import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import SecondCardArticles from "../../../components/SecondCardArticles";
import CardArticles from "../../../components/CardArticles";
import { colors } from "../../../utilities/Color";
import { FakeTopics } from "../../../utilities/FakeTopics";
import SearchInput from "../../../components/SearchInput";

const MyArticles = ({navigation}) => {
    const [isGrid, setIsGrid] = useState("nogrid")
    const [isSearch, setIsSearch] = useState(false)

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1, marginTop:20, marginHorizontal:15}}>
   <View>
   <View style={{flexDirection:"row", alignItems:"center", gap:10,  justifyContent:"space-between"}}>
      <View>
            <Image
              style={{ width: 120, height: 70 }}
              source={require("../../../assets/images/myArticle.png")}
            />
          </View>

      <TouchableOpacity  onPress={()=>setIsSearch(!isSearch)}>
          <AntDesign name="search1" size={25} color="black" />
        </TouchableOpacity>
    </View>

    {
        isSearch && <View style={{flexDirection:"row", justifyContent:"center"}}>
          <SearchInput />
        </View>
    }
       
   </View>

    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:30}}>
      <Text style={{fontSize:20, fontWeight:"bold"}}>48 Articles</Text>
      <View style={{flexDirection:"row", alignItems:"center"}}>
          <TouchableOpacity onPress={()=>setIsGrid('nogrid')}>
              <Entypo name="text-document-inverted" size={30} color={isGrid === "nogrid"?colors.main:colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setIsGrid('grid')}>
              <Entypo name="grid" size={40} color={isGrid === "grid"?colors.main:colors.gray} />            
          </TouchableOpacity>
      </View>
    </View>

    <FlatList
      data={FakeTopics}
      keyExtractor={(item) => item.id.toString()}
      numColumns={isGrid === 'nogrid' ? 1 : 2}
      columnWrapperStyle={{flexDirection:"row", justifyContent:"center"}}
      showsVerticalScrollIndicator={false}
      style={{flex:1, marginTop:5,}}
      key={isGrid === 'nogrid' ? 'oneColumn' : 'twoColumns'} 
      renderItem={({item}) => <View style={{marginRight:isGrid==='nogrid'? 0 : 20, marginTop: 20 }}>
          {
              isGrid === 'nogrid' ? <SecondCardArticles /> :<CardArticles />
          }
      </View>
  }
    />
    </View>
  </SafeAreaView>
  )
}

export default MyArticles