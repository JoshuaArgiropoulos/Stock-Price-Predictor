// AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user)
  console.log("From Auth pre login")


  // Simulate user login/logout actions
  const login = (userData) => {
    setUser(userData); // Set the user data when logging in
    console.log(userData)
    console.log("From Auth")
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);