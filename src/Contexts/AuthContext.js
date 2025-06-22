// src/contexts/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the Context object
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example: you can add login/logout methods here
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Export the custom hook
export const useAuth = () => useContext(AuthContext);
