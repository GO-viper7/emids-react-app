import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = async ({children}) => {
  const [user, setUser] = useState(null);
  const api = axios.create()
  const signUp = (doctorData) => {
    api.post("http://localhost:8000/doctor/register", doctorData)
    .then((res) => {
      setUser(res.data);
      console.log(user)
    })
    .catch((err) => console.log(err));
  } 
  return (
    <AuthContext.Provider value={{user, signUp}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;