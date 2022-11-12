import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = async ({children}) => {
  const [user, setUser] = useState(null);
  const api = axios.create()
  const signUp = (doctorData) => {
      setUser(doctorData);
      console.log(doctorData);
    }
   
  } 
  return (
    <AuthContext.Provider value={{user, signUp}}>
      {children}
    </AuthContext.Provider>
  )


export default AuthContextProvider;