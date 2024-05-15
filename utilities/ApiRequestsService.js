import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_BASE_URL = "http://192.168.1.114:3000";

function handleSaveJwtTokenAsyncStorage(token) {
  try {
    AsyncStorage.setItem("jwtToken", JSON.stringify(token));
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(datas) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, datas);
        if(response === 201){
            handleSaveJwtTokenAsyncStorage(response.data);
        }
        return response;
    } catch (error) {
        throw error;
    }
}

export async function registerUser(datas) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/register`, datas);
        return response;
    } catch (error) {
        throw error;
    }
}