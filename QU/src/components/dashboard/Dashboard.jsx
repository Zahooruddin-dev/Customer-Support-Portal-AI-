import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import TicketList from './TicketList';
import Statistics from './Statistics';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const ticketsRef = collection(db, 'tickets');
        const q = query(ticketsRef, where('userId', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);
        
        const ticketData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setTickets(ticketData);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Statistics tickets={tickets} />
      <TicketList tickets={tickets} />
    </div>
  );
};

export default Dashboard;