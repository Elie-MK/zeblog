import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchInput from '../../../components/SearchInput';
import { Octicons } from "@expo/vector-icons";
import { colors } from '../../../utilities/Color';
import { ScrollView } from 'react-native';
import CardArticles from '../../../components/CardArticles';
import { TouchableOpacity } from 'react-native';
import CardTopics from '../../../components/CardTopics';

const Discover = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
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

            <ScrollView style={{marginLeft:15, marginTop:15}}>
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
                <TouchableOpacity onPress={()=>navigation.navigate('mostpopular')}>
                    <Octicons name="arrow-right" size={24} color={colors.main} />
                </TouchableOpacity>
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
                <TouchableOpacity onPress={()=>navigation.navigate('exploretopic')}>
                    <Octicons name="arrow-right" size={24} color={colors.main} />
                </TouchableOpacity>
            </View>
                <View style={{ marginTop: 15 }}>
                    <CardTopics />
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