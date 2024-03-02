import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { colors } from "../../../utilities/Color";
import { FakeTopics } from "../../../utilities/FakeTopics";
import CardArticles from "../../../components/CardArticles";
import SecondCardArticles from "../../../components/SecondCardArticles";
import SearchInput from "../../../components/SearchInput";

const MyBookMark = ({navigation}) => {
    const [isGrid, setIsGrid] = useState("nogrid")
    const [isActiveSearch, setIsActiveSearch] = useState(false)
    
  return (
    <SafeAreaView style={{flex:1, marginHorizontal:15 }}>
      <View style={{flex:1, marginTop:20,}}>
     <View>
     <View style={{flexDirection:"row", alignItems:"center",  justifyContent:"space-between"}}>
        <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
          <Text style={{fontSize:20, fontWeight: "bold"}}>My Bookmarks</Text>
        </View>
        <View>
        <TouchableOpacity  onPress={()=>navigation.navigate('search')}>
            <AntDesign name="search1" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
         
     </View>

      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:isActiveSearch?0:30}}>
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
        showsVerticalScrollIndicator={false}
        style={{flex:1, marginTop:5}}
        key={isGrid === 'nogrid' ? 'oneColumn' : 'twoColumns'} 
        renderItem={({item}) => <View style={{marginRight:isGrid==='nogrid'? 0 : 20, marginTop: 20 }}>
            {
                isGrid === 'nogrid' ? <SecondCardArticles /> : <CardArticles />
            }
        </View>
    }
      />
      </View>
    </SafeAreaView>
  );
};

export default MyBookMark;
