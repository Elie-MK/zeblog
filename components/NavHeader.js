import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from "@expo/vector-icons";
import SearchInput from './SearchInput';

const NavHeader = ({children, screenTitle}) => {
    const [isActiveSearch, setIsActiveSearch] = useState(false)

  return (
    <View style={{marginHorizontal:15, flex:1, marginTop:20}}>
    <View>
   <View style={{flexDirection:"row", alignItems:"center",  justifyContent:"space-between"}}>
      <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize:20, fontWeight: "bold"}}>{screenTitle}</Text>
      </View>
      <View>
      <TouchableOpacity  onPress={()=>setIsActiveSearch(!isActiveSearch)}>
          <AntDesign name="search1" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
       {
          isActiveSearch && <View style={{flexDirection:"row", justifyContent:"center", marginTop:20}}>
              <SearchInput placeholder={"Search by title or author"}/>
          </View>
       }
   </View>
   {children}
    </View>
  )
}

export default NavHeader