import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { FakeTopics } from '../../../utilities/FakeTopics'
import DraftArticle from '../../../components/DraftArticle'

const DraftArticles = () => {

  return (
    <View  style={{flex:1}}>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:30}}>
      <Text style={{fontSize:20, fontWeight:"bold"}}>48 Articles</Text>
    </View>

    <FlatList
      data={FakeTopics}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      style={{flex:1, marginTop:5,}}
      renderItem={({item}) => <View style={{marginRight: 20, marginTop: 20 }}>
           <DraftArticle />
          
      </View>
  }
    />
    </View>
  )
}

export default DraftArticles