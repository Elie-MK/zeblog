import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import NavHeader from './NavHeader'
import CardByTopicArticles from './CardByTopicArticles'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../utilities/Color';
import SecondCardArticles from './SecondCardArticles';


const DetailArticlesByTopics = ({route}) => {
  const { data } = route.params
  const datas = data.datas.datas[data.item]
  
  return (
   <SafeAreaView style={{flex:1}}>
    <NavHeader screenTitle={data.item}>
      <View style={{marginTop:20, flex:1}}>
        <CardByTopicArticles title={data.item} countArticle={datas.length}  />
        <View style={{marginTop:15, flex:1}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Sort by</Text>
            <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
              <Text style={{color:colors.main, fontSize:14}}>Most Popular</Text>
              <MaterialCommunityIcons name="sort" size={30} color={colors.main} />
            </View>
          </View>
          <FlatList
          data={datas}
          keyExtractor={(item)=>item.idArticles}
          renderItem={({item})=>(
            <View style={{marginTop:15}}>
              <SecondCardArticles datas={item} />
            </View>
          )}
          />
         
        </View>
      </View>
    </NavHeader>
   </SafeAreaView>
  )
}

export default DetailArticlesByTopics