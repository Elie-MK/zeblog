import { View,  SafeAreaView } from 'react-native'
import React from 'react'
;
import NavHeader from '../../../components/NavHeader';
import CardTopics from '../../../components/CardTopics';

const ExploreByTopic = ({navigation}) => {

  return (
    <SafeAreaView style={{flex:1}}>
       <NavHeader screenTitle={"Explore by Topics"}>
        <View style={{flexDirection:"row", justifyContent:"space-around", gap:10, marginTop:25}}>
        <CardTopics onPress={()=>navigation.navigate('articlesbytopics')} />
        <CardTopics />
        </View>
       </NavHeader>
    </SafeAreaView>
  )
}

export default ExploreByTopic