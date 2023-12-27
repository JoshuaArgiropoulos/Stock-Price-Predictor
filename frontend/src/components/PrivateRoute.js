// PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

const PrivateRoute = ({ children }) => {
  
  const { user } = useAuth();
  console.log(user)
  console.log("From Priv")

  return user ? children : <Navigate to="/SignOn" />;
};

export default PrivateRoute;