import React, { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import './App.css';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Movies from './components/Movies';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginStatus = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Auth onLoginStatusChange={handleLoginStatus} />} />
      </Routes>
      {isLoggedIn ? 
        (<Movies/>)
        : (
          <Heading mt={100} textAlign="center" fontSize="2xl" color="blue.500">
            Please Login
          </Heading>
        )
      }
    </div>
  );
};

export default App;
