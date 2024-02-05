import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { colors } from "../utilities/Color";
import Buttons from "../components/Buttons";
import TopicItem from "../components/TopicItem";
import { FakeTopics } from "../utilities/FakeTopics";
import SkipAndNextButton from "../components/SkipAndNextButton";

const ChooseTopics = ({navigation}) => {
  const [select, setSelect] = useState([]);

  const selectedItem = (idItem) => {
    const isSelected = select.includes(idItem);

    if (isSelected) {
      setSelect((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== idItem)
      );
    } else {
      setSelect([...select, idItem]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginTop: 20, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Select your topic of Interest
        </Text>
        <Text style={{ fontSize: 18, marginTop: 10, color: colors.gray }}>
          Select topic of interest for better recommendations or you can skip
          it.
        </Text>

        <View style={{ flex: 1, flexDirection: "row", marginTop: 15 }}>
          <FlatList
            data={FakeTopics}
            numColumns={3}
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TopicItem
              onPress={() => selectedItem(item.title)}
                items={item}
                select={select}
                setSelect={setSelect}
                names={item.title}
              />
            )}
          />
        </View>
        <SkipAndNextButton scrollSkip={()=>navigation.navigate('discoverPeople')}  scrollTo={()=>navigation.navigate('discoverPeople')}/>
      </View>
    </SafeAreaView>
  );
};

export default ChooseTopics;
