import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalSteps from "../components/GlobalSteps";
import Buttons from "../components/Buttons";
import { colors } from "../utilities/Color";
import ListOfAllCountries from "../components/ListOfAllCountries";
import { countries } from "../utilities/Countries";
import SearchInput from "../components/SearchInput";
import ProgressBars from "../components/ProgressBars";
import { SafeAreaView } from "react-native";

const ChooseCountry = ({navigation}) => {
  const [search, setSearch] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [touch, setTouch] = useState("none");

  useEffect(() => {
    setFilteredCountry(
      countries.filter((country) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search]);


  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.white}} >
      <View style={{ flex: 1, marginTop: 20, marginHorizontal:20}}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Which country are you from ?
        </Text>
        <Text style={{ fontSize: 18, marginTop: 10, color: colors.gray }}>
          Please select your country of origin for a better recommendations.{" "}
        </Text>

        <View style={{ flex: 1, marginTop: 15 }}>
          <SearchInput value={search} onChangeText={(e) => setSearch(e)} />
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredCountry.map(({ name, code, flag }) => (
             <ListOfAllCountries setTouch={(t)=>setTouch(t)} touch={touch} name={name} code={code} flag={flag} />
            ))}
          </ScrollView>
         
          <Buttons onPress={()=>navigation.navigate("signup")} title={"Continue"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseCountry;
