import { useEffect, useState } from "react";
import {
  API_BASE_URL,
  handleGetJwtTokenAsyncStorage,
  source,
} from "../utilities/ApiRequestsService";
import axios from "axios";

const usePostRequestApi = (url, datas) => {
  const [data, setDatas] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const postSendRequest = async () => {
    setLoading(true);
    const tokens = await handleGetJwtTokenAsyncStorage();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/${url}`,
        { datas },
        {
          cancelToken: source.token,
          timeout: 10000,
          headers: {
            Authorization: `Bearer ${tokens.token}`,
          },
        }
      );
      if (response.status === 200) {
        setDatas(response.data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { postSendRequest, error, data };
};

export default usePostRequestApi;
