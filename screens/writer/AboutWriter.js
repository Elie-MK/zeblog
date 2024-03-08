import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../utilities/Color";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollView } from "react-native";


const AboutWriter = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15, marginTop:10 }}>
        <View>
          <Text style={{fontSize:18, fontWeight:"bold"}}>Description</Text>
          <Text style={{textAlign:"justify", marginTop:10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </Text>
        </View>

        <View style={{marginTop:15}}>
          <Text style={{fontSize:18, fontWeight:"bold"}}>Social Media</Text>
          <View style={{marginTop:15}}>

          <View style={{flexDirection:"row", alignItems:"center", gap:10, marginBottom:10}}>
            <FontAwesome name="whatsapp" size={24} color={colors.main} />
            <Text style={{fontSize:16, color:colors.main}}>whatsapp</Text>
          </View>

          <View style={{flexDirection:"row", alignItems:"center", gap:10, marginBottom:10}}>
            <FontAwesome5 name="facebook" size={24} color={colors.main} />
            <Text style={{fontSize:16, color:colors.main}}>Facebook</Text>
          </View>

          <View style={{flexDirection:"row", alignItems:"center", gap:10, marginBottom:10}}>
            <Entypo name="twitter" size={24} color={colors.main} />
            <Text style={{fontSize:16, color:colors.main}}>Twitter</Text>
          </View>

          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
            <Entypo name="instagram" size={24} color={colors.main} />
            <Text style={{fontSize:16, color:colors.main}}>Instagram</Text>
          </View>

          </View>
        </View>

        <View style={{marginTop:15}}>
          <Text style={{fontSize:18, fontWeight:"bold"}}>More info</Text>
          <View style={{marginTop:15}}>
          
          <View style={{flexDirection:"row", alignItems:"center", gap:10, marginBottom:10}}>
            <Entypo name="location-pin" size={24} color="black" />
            <Text style={{fontSize:16}}>Tunis, Tunisia</Text>
          </View>
        
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
            <AntDesign name="infocirlceo" size={24} color="black" />
            <Text style={{fontSize:16}}>Joined 2 years ago</Text>
          </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutWriter;
