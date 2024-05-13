import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ListOfAllCountries from "../components/ListOfAllCountries";
import { countries } from "../utilities/Countries";
import SignupParentComponent from "../components/SignupParentComponent";

const ChooseCountry = () => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [page, setPage] = useState(1);
  const countriesPerPage = 10;
  const [touch, setTouch] = useState("none");
  const [invalidData, setInvildData]=useState(true)


  useEffect(() => {
    const filtered = countries.filter((country) => 
      country.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredCountries(filtered);
    setPage(1);
    setDisplayedCountries(filtered.slice(0, countriesPerPage));
  }, [search]);

  const handleClear = () => {
    setSearch("");
    setDisplayedCountries(countries.slice(0, countriesPerPage));
    setPage(1);
  };

  //Lazy loading
  const loadMoreCountries = () => {
    if ((page - 1) * countriesPerPage >= filteredCountries.length) return;
    const nextPage = page + 1;
    const nextSetOfCountries = filteredCountries.slice(0, nextPage * countriesPerPage);
    setDisplayedCountries(nextSetOfCountries);
    setPage(nextPage);
  };

  function handleSelectCountry(nameCountry){
    setInvildData(false)
    setTouch(nameCountry);
  }


  return (
    <SignupParentComponent
      onClear={handleClear}
      disableBtn={invalidData}
      search={search}
      setSearch={setSearch}
      sharedData={touch}
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
            data={displayedCountries}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.code}
            onEndReached={loadMoreCountries}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => (
              <ListOfAllCountries
            key={item.code}
            setTouch={(countryName) => handleSelectCountry(countryName)}
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
