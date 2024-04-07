import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { colors } from '../utilities/Color';
import { FakeTopics } from '../utilities/FakeTopics';
import SecondCardArticles from './SecondCardArticles';
import CardArticles from './CardArticles';

const SearchArticleComponent = () => {
    const [isGrid, setIsGrid] = useState("nogrid")

  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:10}}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>48 articles found</Text>
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
        showsVerticalScrollIndicator={false}
        style={{flex:1, marginTop:5}}
        key={isGrid === 'nogrid' ? 'oneColumn' : 'twoColumns'} 
        renderItem={({item}) => <View style={{marginRight:isGrid==='nogrid'? 0 : 20, marginTop: 20 }}>
            {
                isGrid === 'nogrid' ? <SecondCardArticles /> : <CardArticles />
            }
        </View>
    }
      />
    </View>
  )
}

export default SearchArticleComponent