import { createContext, useContext, useEffect, useState } from "react";
import { handleGetJwtTokenAsyncStorage } from "../utilities/ApiRequestsService";

const AuthContext = createContext({isConnected : false})


const AuthProvider  =  ({children}) =>{
    const [isConnected, setIsConnected] = useState(false)

    useEffect(()=>{
        async function handleAuth() {
            const token = await handleGetJwtTokenAsyncStorage()
            if(token){
                setIsConnected(true)
            }else{
                setIsConnected(false)
            }
        }
        handleAuth()
    },[])
    
    return (
        <AuthContext.Provider value={{isConnected : isConnected}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=>{
    return useContext(AuthContext)
}

export {AuthProvider, useAuth}