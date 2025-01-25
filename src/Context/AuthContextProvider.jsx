import React, { createContext, useEffect, useState } from 'react'
export let AuthContext = createContext()

export default function AuthContextProvider({children}) {
    let [token , setToken] = useState(null)// عشان اةل ما يفتح لو هي نل يبقى هو مدخلش لو فيها داتا اذن هو دخل



    useEffect(()=> {
      let TokenStorage = localStorage.getItem("token")
      if(TokenStorage){
        setToken(TokenStorage)
        console.log(TokenStorage);
        
      }
    }, [])

  
    return (
   <AuthContext.Provider value={{token, setToken}}>
    {children}
   </AuthContext.Provider>
  )
}
