import { useState, useEffect } from 'react';
import { storageService } from '../services/localStorage';

export const useLocalStorage = (key, initialValue = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      const storedData = storageService.getItem(key) || initialValue;
      setData(storedData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [key, initialValue]);

  const saveData = (newData) => {
    try {
      storageService.setItem(key, newData);
      setData(newData);
      return true;
    } catch (err) {
      setError(err);
      return false;
    }
  };

  const removeData = () => {
    try {
      storageService.removeItem(key);
      setData(initialValue);
      return true;
    } catch (err) {
      setError(err);
      return false;
    }
  };

  return { data, loading, error, saveData, removeData };
};