import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchInput from '../../../components/SearchInput';
import { Octicons } from "@expo/vector-icons";
import { colors } from '../../../utilities/Color';
import { ScrollView } from 'react-native';
import CardArticles from '../../../components/CardArticles';

const Discover = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={{marginHorizontal:15}}>
                <View style={{flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-end", }}>
                        <Image style={{width:55, height:55}} source={require('../../../assets/images/logo.png')} />
                        <Text style={{ fontSize: 20, fontWeight:"bold" }}>Discover</Text>
                    </View>
                    <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={24} color="black" />
                </View>
                <View style={{flexDirection:"row", justifyContent:"center", marginTop:20}}>
                    <SearchInput placeholder={"Search for article or writer"} />
                </View>
            </View>

            <ScrollView style={{marginLeft:15}}>
            {/* Most popular */}
            <View>
                <View
                style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 20,
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                Most popular
                </Text>
                <Octicons name="arrow-right" size={24} color={colors.main} />
            </View>
                <View style={{ marginTop: 15 }}>
                    <CardArticles />
                </View>
            </View>

            {/* Explore by Topics */}
            <View style={{marginTop:20}}>
                <View
                style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 20,
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                Explore by Topics
                </Text>
                <Octicons name="arrow-right" size={24} color={colors.main} />
            </View>
                <View style={{ marginTop: 15 }}>
                    <CardArticles />
                </View>
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
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                Top Writers
                </Text>
                <Octicons name="arrow-right" size={24} color={colors.main} />
            </View>
                <View style={{ marginTop: 15 }}>
                    <CardArticles />
                </View>
            </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Discover