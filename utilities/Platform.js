import { Dimensions, Platform } from "react-native";
const {width} = Dimensions.get("window");

export const Androids = Platform.OS === 'android';
export const IOS = Platform.OS === 'ios';
export const WidthScreen = width/1.1
export const fontSizeTitleAndroid = 21 