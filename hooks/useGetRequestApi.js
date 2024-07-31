import { useEffect, useState } from "react";
import {
  API_BASE_URL,
  handleGetJwtTokenAsyncStorage,
  source,
} from "../utilities/ApiRequestsService";
import axios from "axios";

const useGetRequestApi = (url, option) => {
  const [datas, setDatas] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchDatas = async () => {
    setLoading(true);
    const tokens = await handleGetJwtTokenAsyncStorage();
    let responses;
    try {
      if (option) {
        const response = await axios.get(`${API_BASE_URL}/${url}`);
        responses = response;
      } else {
        const response = await axios.get(`${API_BASE_URL}/${url}`, {
          cancelToken: source.token,
          timeout: 10000,
          headers: {
            Authorization: `Bearer ${tokens.token}`,
          },
        });
        responses = response;
      }
      if (responses.status === 200) {
        setDatas(responses.data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, [url]);

  return { datas, error, loading, fetchDatas };
};

export default useGetRequestApi;
