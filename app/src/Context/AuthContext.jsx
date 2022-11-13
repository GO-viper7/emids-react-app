import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import useLocalState from "../Hooks/useLocalState";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useLocalState("token");
  const [loading, setLoading] = useState(true);
  const api = axios.create();

  console.log("User state: ", user);

  const signup = async (userData) => {
    const res = await api.post(
      `http://localhost:8000/auth/doctor/register`,
      JSON.stringify(userData),
      { 
        headers: {
        'Content-Type': 'application/json',
      }
     } 
    );
    console.log(res);
    return res.data;
  };

  const updateUser = (user) => {
    setUser(prev => ({ ...prev, user }));
  }

  const saveJobs = (job) => {
    setUser(prev => ({ ...prev, savedJobs: [...prev.savedJobs, job] }));
  }

  const login = async  (userData) => {
    const res = await api.post(
      `http://localhost:8000/auth/doctor/login`,
      JSON.stringify(userData),
      { 
        headers: {
        'Content-Type': 'application/json',
      }
     } 
    );
    localStorage.setItem("name", res.data.name);
    localStorage.setItem("email", res.data.email);
    localStorage.setItem("specializations", res.data.specializations);
    localStorage.setItem("experience", res.data.experience);
    localStorage.setItem("token", res.data.token);
    setUser({ ...res.data });
    return res.data;
  };

  const getSnips = async () => {
    const res = await api.post(
      `http://localhost:8000/doctor/snippets`,
      JSON.stringify(localStorage.getItem("email")),
      { 
        headers: {
        'Content-Type': 'application/json',
      }
     } 
    );
    return res.data
  }

  const logout = () => {
    setToken(null);
  };

  const getUser = async () => {
    return api
      .get("http://localhost:8080/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          setUser({ ...res.data });
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setUser(null);
      });
  };

  useEffect(() => {
    let id;
    if (token) {
      setLoading(true);
      id = setTimeout(() => {
        getUser();
      }, 1000);
    } else {
      setLoading(false);
      setUser(null);
    }

    return () => clearTimeout(id);
  }, [token]);


  const speech = async () => {
    const res = await api.get(
      `http://localhost:8000/speech`,
       { 
        headers: {
          'Content-Type': 'application/json',
        }
      } 
    );
    console.log(res);
    return res.data
  }




  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout, saveJobs, updateUser, getSnips, speech }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
