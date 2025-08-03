import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useLocalStorage } from './useLocalStorage';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthData = () => {
  const { data: user, saveData: saveUser, removeData: removeUser } = useLocalStorage('user', null);
  return { user, saveUser, removeUser };
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { saveData: saveUser, removeData: removeUser } = useLocalStorage('user', null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate authentication
      const mockUser = {
        id: Date.now(),
        email,
        createdAt: new Date().toISOString()
      };
      await saveUser(mockUser);
      setUser(mockUser);
    } catch (err) {
      setError('Failed to login');
      throw new Error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate registration
      const mockUser = {
        id: Date.now(),
        email,
        createdAt: new Date().toISOString()
      };
      await saveUser(mockUser);
      setUser(mockUser);
    } catch (err) {
      setError('Failed to register');
      throw new Error('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await removeUser();
      setUser(null);
    } catch (err) {
      setError('Failed to logout');
      throw new Error('Logout failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check for existing user session on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Error parsing stored user:', err);
      }
    }
  }, []);

  return {
    user,
    login,
    register,
    logout,
    error,
    loading,
  };
};

export default useProvideAuth;