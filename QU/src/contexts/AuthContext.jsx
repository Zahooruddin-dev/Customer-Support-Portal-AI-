import React, { createContext, useState, useEffect } from 'react';
import { storageService } from '../services/localStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = storageService.getItem('user');
    setCurrentUser(user);
    setLoading(false);
  }, []);

  const register = async (email, password) => {
    try {
      // Simulate user registration
      const newUser = { id: Date.now(), email };
      storageService.setItem('user', newUser);
      setCurrentUser(newUser);
      return newUser;
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const login = async (email, password) => {
    try {
      // Simulate authentication
      const user = { id: Date.now(), email };
      storageService.setItem('user', user);
      setCurrentUser(user);
      return user;
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    storageService.removeItem('user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};