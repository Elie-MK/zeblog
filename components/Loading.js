import React from 'react'
import LottieView from "lottie-react-native";

const Loading = ({animationRef, styles}) => {
  return (
    <LottieView
    ref={animationRef}
    autoPlay
    style={styles}
    source={require("../utilities/loading.json")}
  />
  )
}

export default Loading