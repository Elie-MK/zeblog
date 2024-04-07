import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utilities/Color'
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FollowersItem from './FollowersItem';
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import { Fontisto } from '@expo/vector-icons';
import { Androids } from '../utilities/Platform';

const ViewArticleComponent = ({navigation}) => {
  const [isLiked, setIsLiked]=useState(false)

  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
        <ImageBackground style={{width:"100%",height:300}}  source={require('../assets/images/exemple.jpg')}>
            <SafeAreaView style={{marginHorizontal:15, marginTop:Androids?30:null }}>
                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={30} color={colors.white} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
            <TouchableOpacity>
            <MaterialCommunityIcons name="bookmark-minus-outline" size={30} color={colors.white} />

            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="share-outline" size={30} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                size={30}
                color={colors.white}
              />
            </TouchableOpacity>
            </View>
                </View>
            </SafeAreaView>
        </ImageBackground>


      <View style={{flex:1, marginHorizontal:15 }}>
        <Text style={{fontSize:35, fontWeight:"bold", lineHeight:50, marginBottom:20}}>The Top Travel Destination for 2024!</Text>
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{borderTopWidth:1, borderBottomWidth:1, padding:10, borderColor:colors.lightGray}}>
            <FollowersItem names={"Elie Mulumba"} username={"@ElieMk"} />
        </View>
        <View style={{flexDirection:"row", alignItems:"center", gap:20, marginTop:15}}>
            <View style={{borderWidth:1, padding:10, borderRadius:5, borderColor:colors.main}}>
                <Text style={{color:colors.main, fontWeight:"bold"}}>Travel</Text>
            </View>
            <Text>3 days ago</Text>
        </View>

        <Text style={{textAlign:"justify", color:colors.gray, marginTop:15, fontSize:18, paddingBottom:25, lineHeight:30}}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <View style={{flexDirection:"row", alignItems:"center", marginBottom:15, justifyContent:"space-between"}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:5}}>
            <View style={{backgroundColor:colors.main, padding:5, borderRadius:22}}>
              <AntDesign name="like1" size={10} color={colors.white} />
            </View>
          <Text style={{fontSize:16}}>0</Text>
          </View>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Text style={{fontSize:16}}>0</Text>
          <Text style={{fontSize:16}}>comments</Text>
          </View>
        </View>

        </ScrollView>
        <CardDivider />

        <View style={{marginBottom:50}}>
          <View style={{flexDirection:"row", justifyContent:"space-around"}}>
          <TouchableOpacity onPress={()=>setIsLiked(!isLiked)} style={{flexDirection:"row", alignItems:"flex-end", gap:10}}>
            <AntDesign name={isLiked?"like1":"like2"} size={24} color={isLiked?colors.main:colors.black} />
            <Text style={{color:isLiked?colors.main:colors.black}}>Like</Text> 
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('comments')} style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Fontisto name="comment" size={24} color="black" />
            <Text >Comment</Text>
            </TouchableOpacity>
          </View>
        </View>
       
      </View>
    </View>
  )
}

export default ViewArticleComponent