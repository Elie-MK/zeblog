import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import { colors } from "../utilities/Color";
import ListOfAllCountries from "../components/ListOfAllCountries";
import { countries } from "../utilities/Countries";
import SearchInput from "../components/SearchInput";
import { SafeAreaView } from "react-native";
import ProgressBar from "../components/ProgressBar";
import { Octicons } from "@expo/vector-icons";
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
      step={25}
      title={"Which country are you from ?"}
      subTitle={
        "Please select your country of origin for a better recommendations."
      }
    >
      <View>
        {filteredCountry.map(({ name, code, flag }) => (
          <ListOfAllCountries
            setTouch={(t) => setTouch(t)}
            touch={touch}
            name={name}
            code={code}
            flag={flag}
          />
        ))}
      </View>
    </SignupParentComponent>
  );
};

export default ChooseCountry;
