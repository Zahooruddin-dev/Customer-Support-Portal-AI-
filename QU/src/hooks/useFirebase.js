// filepath: /customer-support-portal/customer-support-portal/src/hooks/useFirebase.js
import { useEffect, useState } from 'react';
import { db } from '../services/firebase'; // Assuming firebase.js exports the initialized Firestore instance

const useFirebase = (collection) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const snapshot = await db.collection(collection).get();
        const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(fetchedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collection]);

  return { data, loading, error };
};

export default useFirebase;