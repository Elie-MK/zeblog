import { useState } from "react";
import {
  API_BASE_URL,
  handleGetJwtTokenAsyncStorage,
  source,
} from "../utilities/ApiRequestsService";
import axios from "axios";

const usePutRequestApi = (url, datas, option) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let headerOption;
  const handlePutRequest = async () => {
    setLoading(true);
    const tokens = await handleGetJwtTokenAsyncStorage();
    if (option) {
      headerOption = {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `Bearer ${tokens.token}`,
      };
    } else {
      headerOption = { Authorization: `Bearer ${tokens.token}` };
    }

    try {
      const response = await axios.put(`${API_BASE_URL}/${url}`, datas, {
        cancelToken: source.token,
        timeout: 10000,
        headers: headerOption,
      });
      if (response.status === 200) {
        setData(response.data);
        setLoading(false);
      }
      return response;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { handlePutRequest, error, data, loading };
};

export default usePutRequestApi;
