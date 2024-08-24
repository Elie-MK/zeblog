import { useCallback, useEffect, useState } from "react";
import {
  API_BASE_URL,
  handleGetJwtTokenAsyncStorage,
} from "../utilities/ApiRequestsService";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const useGetRequestApi = (url, option) => {
  const [datas, setDatas] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a cancel token source

  const source = axios.CancelToken.source();
  const fetchDatas = async () => {
    setLoading(true);
    const tokens = await handleGetJwtTokenAsyncStorage();
    let responses;
    try {
      if (option) {
        const response = await axios.get(`${API_BASE_URL}/${url}`, {
          cancelToken: source.token,
        });
        responses = response;
      } else {
        const response = await axios.get(`${API_BASE_URL}/${url}`, {
          cancelToken: source.token,
          timeout: 10000,
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        });
        responses = response;
      }
      if (responses.status === 200) {
        setDatas(responses.data);
        setLoading(false);
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        setError(error);
      }
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchDatas();

      return () => {
        source.cancel("Request canceled by the user.");
      };
    }, [url, option])
  );

  return { datas, error, loading, fetchDatas };
};

export default useGetRequestApi;
