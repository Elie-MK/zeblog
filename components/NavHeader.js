import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Androids } from '../utilities/Platform';

const NavHeader = ({children, screenTitle}) => {
    const navigation = useNavigation()

  return (
    <View style={{marginHorizontal:15, flex:1, marginTop:Androids?30:20}}>
    <View>
   <View style={{flexDirection:"row", alignItems:"center",  justifyContent:"space-between"}}>
      <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize:20, fontWeight: "bold"}}>{screenTitle}</Text>
      </View>
      <View>
      <TouchableOpacity  onPress={()=>navigation.navigate('search')}>
          <AntDesign name="search1" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
    
   </View>
   {children}
    </View>
  )
}

export default NavHeader