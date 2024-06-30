import { useEffect, useState } from "react"
import { API_BASE_URL, handleGetJwtTokenAsyncStorage, source } from "../utilities/ApiRequestsService"
import axios from "axios"

const useGetRequestApi = (url) => {
  const [datas, setDatas]=useState(null)
  const [error, setError]=useState(null)
  const [loading, setLoading]=useState(true)

  
  useEffect(()=>{
    const fetchDatas = async ()=>{
      setLoading(true)
      const tokens = await handleGetJwtTokenAsyncStorage()
      try {
        const response = await axios.get(`${API_BASE_URL}/${url}`, {
          cancelToken :source.token,
          timeout:10000, 
          headers: {
            "Authorization": `Bearer ${tokens.token}`,
          },
        })
        if(response.status === 200){
          setDatas(response.data)
          setLoading(false)
        }
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchDatas()
  },[url])

  return {datas, error, loading}
}

export default useGetRequestApi; 