import axios from "axios";
import { useEffect, useState } from "react";
import { handleGetJwtTokenAsyncStorage } from "../utilities/ApiRequestsService";

const API_BASE_URL = "http://192.168.1.114:3000/api";
export const source = axios.CancelToken.source()
const tokens = handleGetJwtTokenAsyncStorage();

export const getOption =   {
  cancelToken :source.token,
  timeout:10000, 
  headers: {
    "Authorization": `Bearer ${tokens.token}`,
  },
}

export const postOption = {
    headers: {
      "Authorization": `Bearer ${tokens.token}`,
      "Content-Type": "multipart/form-data",
      "Accept": "application/json",
    },
  }

export const getMethod = 'get'
export const postMethod = 'post'

const useRequestApi = (url, method, isPostOption, data) =>{
    const [datas, setDatas] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        async function requestsApi () {
            setLoading(true)
            try {
                const response = await axios[method](`${API_BASE_URL}${url}`,data, isPostOption?postOption:getOption)
                setDatas(response.data)
            } catch (error) {
                    setError(err);
            }finally{
                    setLoading(false);
            }
        }
        requestsApi()
    
    },[url, method ])

    return {datas, error, loading}
}

export default useRequestApi