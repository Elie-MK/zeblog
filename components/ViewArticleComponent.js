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
import { formatDistanceToNow, parseISO } from 'date-fns';

const ViewArticleComponent = ({navigation, route}) => {
  const { datas } =  route.params;

  const [isLiked, setIsLiked]=useState(false)

  const distance = formatDistanceToNow(parseISO(datas.CreateAt));
  const createAt = distance.replace(/^about /, '');
  

  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
        <ImageBackground style={{width:"100%",height:300}}  source={datas?{uri:datas.pictures}:require('../assets/images/exemple.jpg')}>
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
        <Text style={{fontSize:25, fontWeight:"bold", marginBottom:20}}>{datas?.Title}</Text>
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{borderTopWidth:1, borderBottomWidth:1, padding:10, borderColor:colors.lightGray}}>
            <FollowersItem names={datas?.user?.username} username={`@${datas?.user?.username}`} />
        </View>
        <View style={{flexDirection:"row", alignItems:"center", gap:20, marginTop:15}}>
            <View style={{borderWidth:1, padding:10, borderRadius:5, borderColor:colors.main}}>
                <Text style={{color:colors.main, fontWeight:"bold"}}>{datas?.category}</Text>
            </View>
            <Text style={{fontWeight:600}}>{createAt} ago</Text>
        </View>

        <Text style={{textAlign:"justify", color:colors.gray, marginTop:15, fontSize:18, paddingBottom:25, lineHeight:30}}>
          {datas?.Content}
        </Text>

        <View style={{flexDirection:"row", alignItems:"center", marginBottom:15, justifyContent:"space-between"}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:5}}>
            <View style={{backgroundColor:colors.main, padding:5, borderRadius:22}}>
              <AntDesign name="like1" size={10} color={colors.white} />
            </View>
          <Text style={{fontSize:16}}>{datas?.likes?.length}</Text>
          </View>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Text style={{fontSize:16}}>{datas?.comments?.length}</Text>
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