import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utilities/Color";

const CardArticles = () => {
    const [text, setText] = useState("10 Tips Boosting your productivity and is good for your health.")

    useEffect(()=>{
        if(text.length >= 34){
            setText(text.substring(0,34) + "...")
        }
    },[])

  return (
    <View>
      <View>
        <View>
          <Image
            style={{ width: 180, height: 180, borderRadius: 22 }}
            source={require("../assets/images/exemple.jpg")}
          />
        </View>
        <View
          style={{
            position: "absolute",
            marginTop: 15,
            marginLeft: 130,
            backgroundColor: colors.main,
            padding: 8,
            borderRadius: 22,
          }}
        >
          <MaterialCommunityIcons
            name="bookmark-minus-outline"
            size={25}
            color={colors.white}
          />
        </View>
      </View>
      <View style={{marginTop:10, width:180}}>
        <Text style={{fontSize:20, fontWeight:"bold", textAlign:"justify"}}>{text}</Text>
      <View style={{marginTop:10, flexDirection:"row", alignItems:"center", gap:10}}>
        <Image style={{width:30, height:30, borderRadius:22}}  source={require('../assets/images/vectorPeople.jpg')}/>
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
            <View>
                <Text style={{fontSize:16, fontWeight:"600", color:colors.main}}>Doe</Text>
            </View>
            <View>
                <Text style={{fontSize:14, color:colors.gray}}>. 5 days ago</Text>
            </View>
        </View>
      </View>
      </View>
    </View>
  );
};

export default CardArticles;