import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import SearchInput from '../../../components/SearchInput';
import { colors } from '../../../utilities/Color';
import { ScrollView } from 'react-native';
import CardArticles from '../../../components/CardArticles';
import { TouchableOpacity } from 'react-native';
import CardTopics from '../../../components/CardTopics';
import { Androids, fontSizeTitleAndroid } from '../../../utilities/Platform';
import { Categories } from '../../../utilities/Categories';
import useGetRequestApi from '../../../hooks/useGetRequestApi';
import { handleGetAllArticlesByCategory } from '../../../utilities/ApiRequestsService';

const Discover = ({navigation}) => {
const [catDatas, setCatDatas]=useState(null)
    const url = 'articles/category'
  
    const {datas, error, loading} = useGetRequestApi(url)

    useEffect(()=>{
        if(datas){
            const catData =  Categories.filter((item)=>datas[item])
            setCatDatas(catData)
        }
    },[datas])
    

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, marginTop:Androids?30:null}}>
            <View style={{marginHorizontal:15}}>
                <View style={{flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between"}}>
                <View>
            <Image
              style={{ width: 120, height: 70 }}
              source={require("../../../assets/images/discover.png")}
            />
          </View>
                    <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={24} color="black" />
                </View>

                    <SearchInput placeholder={"Search for article or writer"} />
            </View>

            <ScrollView style={{flex:1, marginLeft:15, marginTop:15}}>
            {/* Most popular */}
            <View style={{flex:1}}>
                <View
                style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 20,
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: Androids?fontSizeTitleAndroid:25 }}>
                Most popular
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('mostpopular')}>
                    <Octicons name="arrow-right" size={24} color={colors.main} />
                </TouchableOpacity>
            </View>
                <View style={{ marginTop: 15 }}>
                    {/* <CardArticles /> */}
                </View>
            </View>

            {/* Explore by Topics */}
            <View style={{marginTop:20, flex:1}}>
                <View
                style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 20,
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: Androids?fontSizeTitleAndroid:25 }}>
                Explore by Topics
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('exploretopic', {datas : {catDatas, datas}})}>
                    <Octicons name="arrow-right" size={24} color={colors.main} />
                </TouchableOpacity>
            </View>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator = {false}
                data={catDatas}
                renderItem={({item})=>(
                    <View key={item} style={{ marginTop: 15, marginRight:10 }}>
                    <CardTopics catTitle={item} data={datas}   />
                </View>
                )}
            />
               
            </View>

            {/* Top Writers */}
            <View style={{marginTop:20}}>
                <View
                style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 20,
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: Androids?fontSizeTitleAndroid:25 }}>
                Top Writers
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('topwriters')}>
                <Octicons name="arrow-right" size={24} color={colors.main} />
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Discover