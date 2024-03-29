import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { colors } from "../utilities/Color";
import Buttons from "../components/Buttons";
import TopicItem from "../components/TopicItem";
import { FakeTopics } from "../utilities/FakeTopics";
import SkipAndNextButton from "../components/SkipAndNextButton";
import SignupParentComponent from "../components/SignupParentComponent";

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
    <SignupParentComponent step={75} isFlatList isTopic title={"Select your topic of Interest"} subTitle={"Select topic of interest for better recommendations or you can skip it."}>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 15 }}>
          <FlatList
            data={FakeTopics}
            numColumns={3}
            showsVerticalScrollIndicator={false}
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
    </SignupParentComponent>
  );
};

export default ChooseTopics;
