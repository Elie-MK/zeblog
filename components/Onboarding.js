import { View, Text, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import SkipAndNextButton from "./SkipAndNextButton";
import { onBoardingData } from "../utilities/OnboardingDatas";
import Buttons from "./Buttons";
import { colors } from "../utilities/Color";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex]=useState(0)
  const scrollX = useRef(new Animated.Value(0)).current

  const viewableItemsChanged = useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index)
  }).current

  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current
const slidesRef  = useRef(null)


const scrollTo = ()=>{
  if(currentIndex < onBoardingData.length - 1){
    slidesRef.current.scrollToIndex({index: currentIndex + 1})
  }
}

const scrollSkip = ()=>{
  if(currentIndex < onBoardingData.length - 1  ){
    slidesRef.current.scrollToIndex({index: currentIndex ?  currentIndex + 1 : currentIndex + 2 })
  }
}


  return (
    <View style={{ flex: 1, alignItems:"center" }}>
      <View style={{flex:3}}>
      <FlatList
        bounces={false}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={onBoardingData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        keyExtractor={(item)=>item.id}
        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}], {
          useNativeDriver:false
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      </View>

      <Paginator  data={onBoardingData} scrollX={scrollX} />
      {
        currentIndex === 2 ? (
          <Buttons title={"Get Started "} titleStyle={{fontWeight:"800"}}   buttonStyle={{backgroundColor:colors.main, width:150, padding:15, borderRadius:20}}  />
          ):(
            <SkipAndNextButton  scrollSkip={scrollSkip} scrollTo={scrollTo} />
        )
      }
    </View>
  );
};

export default Onboarding;