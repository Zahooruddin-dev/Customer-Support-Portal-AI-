import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useFirebase } from './useFirebase';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const useProvideAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const { signInWithEmail, signOut, registerWithEmail } = useFirebase();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmail(email, password);
      setUser(userCredential.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await registerWithEmail(email, password);
      setUser(userCredential.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut();
      setUser(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Optionally handle user state persistence here
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