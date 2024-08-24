import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  API_BASE_URL,
  handleSaveJwtTokenAsyncStorage,
} from "./ApiRequestsService";
import axios from "axios";
import { CommonActions } from "@react-navigation/native";

async function verifyToken(navigation) {
  try {
    const token = await AsyncStorage.getItem("jwt-token");

    // If no token, redirect to login
    if (!token) {
      navigation.replace("login");
      return;
    }

    // Verify the access token
    const response = await axios.get(`${API_BASE_URL}/verify-token`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // If token is valid, navigate to home
    if (response.data.valid) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "home" }],
        })
      );
      return;
    }
  } catch (error) {
    const refreshToken = await AsyncStorage.getItem("refresh-token");

    if (refreshToken) {
      try {
        const refreshResponse = await axios.post(
          `${API_BASE_URL}/refresh-token`,
          { refreshToken }
        );

        if (refreshResponse) {
          // Store new tokens
          handleSaveJwtTokenAsyncStorage(refreshResponse);

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "home" }],
            })
          );
        } else {
          navigation.replace("login");
        }
      } catch (refreshError) {
        console.warn("Error during token refresh", refreshError);
        navigation.replace("login");
      }
    } else {
      navigation.replace("login");
    }
  }
}

export default verifyToken;
