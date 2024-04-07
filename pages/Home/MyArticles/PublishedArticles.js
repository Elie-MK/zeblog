import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utilities/Color'
import { FakeTopics } from '../../../utilities/FakeTopics'
import { Entypo } from '@expo/vector-icons';
import SecondCardArticles from '../../../components/SecondCardArticles'
import CardArticles from '../../../components/CardArticles'

const PublishedArticles = () => {
        const [isGrid, setIsGrid] = useState("nogrid")

  return (
    <View  style={{flex:1}}>
    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:30}}>
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
    {...isGrid === 'nogrid' ? null: {columnWrapperStyle: {flexDirection:"row", justifyContent:"center", marginLeft:20}}}
    showsVerticalScrollIndicator={false}
    style={{flex:1, marginTop:5}}
    key={isGrid === 'nogrid' ? 'oneColumn' : 'twoColumns'} 
    renderItem={({item}) => <View style={{marginRight:isGrid==='nogrid'? 0 : 20, marginTop: 20 }}>
        {
            isGrid === 'nogrid' ? <SecondCardArticles /> :<CardArticles />
        }
    </View>
}
  />
  </View>
  )
}

export default PublishedArticles