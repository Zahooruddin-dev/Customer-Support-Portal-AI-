import { useState, useEffect, useCallback } from 'react';
import { storageService } from '../services/localStorage';

export const useLocalStorage = (key, initialValue = []) => {
  // Initialize state with a function to avoid unnecessary initial computation
  const [data, setData] = useState(() => {
    try {
      const storedData = storageService.getItem(key);
      return storedData !== null ? storedData : initialValue;
    } catch (err) {
      console.error('Error reading from localStorage:', err);
      return initialValue;
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveData = useCallback(async (newData) => {
    setLoading(true);
    try {
      await storageService.setItem(key, newData);
      setData(newData);
      return true;
    } catch (err) {
      setError(err);
      return false;
    } finally {
      setLoading(false);
    }
  }, [key]);

  const removeData = useCallback(async () => {
    setLoading(true);
    try {
      await storageService.removeItem(key);
      setData(initialValue);
      return true;
    } catch (err) {
      setError(err);
      return false;
    } finally {
      setLoading(false);
    }
  }, [key, initialValue]);

  return { data, loading, error, saveData, removeData };
};