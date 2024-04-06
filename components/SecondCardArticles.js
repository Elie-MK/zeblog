import { View, Text, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../utilities/Color'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SecondCardArticles = () => {
    const [text, setText] = useState("10 Tips Boosting your productivity and is good for your health.")
    const [isBook, setIsBook] = useState(false)

    const {width} = Dimensions.get("window") 

    useEffect(()=>{
        if(text.length >= 34){
            setText(text.substring(0,34) + "...")
        }
    },[])
  return (
    <View style={{width:width/2}}>
        <View style={{flexDirection:"row", gap:15, alignItems:"center" }}>
      <View>
          <Image
            style={{ width: 140, height: 140, borderRadius: 22 }}
            source={require("../assets/images/exemple.jpg")}
          />
        </View>
      <View>
        <Text style={{fontSize:18, fontWeight:"bold", }}>{text}</Text>
        <View style={{flexDirection:"row", alignItems:"center", gap:10, marginTop:10}}>
        <Image style={{width:25, height:25, borderRadius:22}}  source={require('../assets/images/vectorPeople.jpg')}/>
        <Text style={{fontSize:14, fontWeight:"600", color:colors.main}}>Doe</Text>
        </View>
      <View style={{marginTop:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center", }}>
        <Text style={{color:colors.gray, fontWeight:"600"}}>3 days ago</Text>
        <TouchableOpacity onPress={()=>setIsBook(!isBook)}>
        <MaterialCommunityIcons
            name={isBook ?  "bookmark-minus": "bookmark-minus-outline" }
            size={25}
            color={isBook?  colors.main : colors.gray }
          />
        </TouchableOpacity>
      </View>
      </View>
    </View>
    </View>
  )
}

export default SecondCardArticles