import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { createContext } from "react";
import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import Emids from './Pages/Emids';
import Profile from "./Pages/Profile";
const FoodContext = createContext();

function App() {
  const [food, setFood] = useState([]);
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
      <div className="App" >
        <FoodContext.Provider value={{ food, setFood }}>
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
              <Routes>
                <Route path="/" element={localStorage.getItem('token')==='' ? <Login/> : <Home />} />
                <Route path="/profile" element={localStorage.getItem('token')==='' ? <Login/> : < Profile />} />
                <Route path="/login" element={localStorage.getItem('token')==='' ? <Login/> : < Login />} />
                <Route path="/register" element={localStorage.getItem('token')==='' ? <Login/> : <SignUp />} />
                <Route path="/emids" element={localStorage.getItem('token')==='' ? <Login/> : < Emids />} />
                <Route path="*" element={<h1>404</h1>} />
              </Routes>
          </MantineProvider>
          </ColorSchemeProvider>
        </FoodContext.Provider>
      </div>
  );
}

export { App, FoodContext };
