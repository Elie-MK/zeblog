import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';


const CardTopics = ({onPress}) => {
  return (
   <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
     <ImageBackground
      source={require("../assets/images/exemple.jpg")}
      style={styles.imageBackground}
      imageStyle={{ borderRadius: 10 }}
    >
      <LinearGradient style={styles.overlay} colors={[ 'rgba(0,0,0,0.2)', 'rgba(0,0,0,1)']}>
        <View>
          <Text style={styles.textTitle}>Travel</Text>
          <Text style={styles.text}>2.000 articles</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
   </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    flexDirection: "row",
    alignSelf: "flex-start",
    width: 190,
    height: 120,
    justifyContent: "flex-end",
  },
  overlay: {
    flexDirection: "row",
    alignSelf: "flex-end",
    width: "100%",
    height: "50%",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textTitle: {
    color: "#ffffff",
    fontWeight:"bold", 
    fontSize:18
  },
    text: {
        color: "#ffffff",
        fontSize: 14,
        marginTop: 5,
    },
});

export default CardTopics;
