import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const API_BASE_URL = "http://192.168.1.114:3000/api";
export const source = axios.CancelToken.source();
const tokens = handleGetJwtTokenAsyncStorage();

const option = {
  cancelToken: source.token,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${tokens.token}`,
  },
};

// LocalStorage

export async function handleSaveJwtTokenAsyncStorage(token) {
  try {
    await AsyncStorage.setItem("jwt-token", token.data.token);
    await AsyncStorage.setItem("refresh-token", token.data.refreshToken);
  } catch (error) {
    console.log(error);
  }
}

export async function handleGetJwtTokenAsyncStorage() {
  try {
    const token = await AsyncStorage.getItem("jwt-token");
    return token ? token : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Authentication

export async function loginUser(datas) {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, datas);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(datas) {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, datas);
    return response;
  } catch (error) {
    throw error;
  }
}

// Article

export async function handleCreateArticle(datas) {
  const tokens = await handleGetJwtTokenAsyncStorage();
  try {
    const response = await axios.post(
      `${API_BASE_URL}/articles/create`,
      datas,
      {
        headers: {
          Authorization: `Bearer ${tokens.token}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getCurrentUser() {
  const tokens = await handleGetJwtTokenAsyncStorage();
  try {
    const response = await axios.get(`${API_BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${tokens.token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
