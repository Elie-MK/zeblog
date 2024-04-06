import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ListOfAllCountries from "../components/ListOfAllCountries";
import { countries } from "../utilities/Countries";
import SignupParentComponent from "../components/SignupParentComponent";

const ChooseCountry = ({ navigation }) => {
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

  const handleClear = () => {
    setSearch("");
  };

  return (
    <SignupParentComponent
      onClear={handleClear}
      search={search}
      setSearch={setSearch}
      isCountryScreen
      titleButton={"Continue"}
      navigationRoute={"signup"}
      lastStep={0}
      step={25}
      title={"Which country are you from ?"}
      subTitle={
        "Please select your country of origin for a better recommendations."
      }
      isFlatList
    >
      <View>
      <FlatList
            data={filteredCountry}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <ListOfAllCountries
            key={index}
            setTouch={(t) => setTouch(t)}
            touch={touch}
            name={item.name}
            code={item.code}
            flag={item.flag}
          />
            )}
          />

      </View>
    </SignupParentComponent>
  );
};

export default ChooseCountry;
