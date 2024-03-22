import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'

const ListOfAllCountries = ({flag, code, name, touch, setTouch}) => {
  return (
    <TouchableOpacity onPress={()=>setTouch(name)}  style={{flexDirection:"row",  marginTop:15, alignItems:"center", gap:20, borderWidth:`${touch === name?3 : 1}`, borderColor:`${touch === name?colors.main : colors.lightGray}`, borderRadius:7, padding:10}}>
    <Text style={{fontSize:40}}>{flag}</Text>
   <Text style={{fontSize:18, color:colors.gray, fontWeight:"bold"}}>{code}</Text>
   <Text style={{fontSize:18, fontWeight:"600", width:200}}>{name}</Text>
 </TouchableOpacity>
  )
}

export default ListOfAllCountries