import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { storageService } from '../../services/localStorage';
import TicketList from './TicketList';
import Statistics from './Statistics';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { data: tickets, loading, saveData: saveTickets } = useLocalStorage('tickets', []);
  const { currentUser } = useAuth();
  const [localTickets, setLocalTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTickets = () => {
      setIsLoading(true);
      try {
        const userTickets = storageService.getItem('tickets') || [];
        const filteredTickets = userTickets.filter(
          ticket => ticket.userId === currentUser.id
        );
        setLocalTickets(filteredTickets);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, [currentUser]);

  const addTicket = (ticketData) => {
    const newTicket = {
      id: Date.now(),
      userId: currentUser.id,
      createdAt: new Date().toISOString(),
      status: 'open',
      ...ticketData,
    };

    const existingTickets = storageService.getItem('tickets') || [];
    const updatedTickets = [...existingTickets, newTicket];
    storageService.setItem('tickets', updatedTickets);
    setLocalTickets(prev => [...prev, newTicket]);
  };

  if (loading || isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
      </header>
      <div className={styles.statsContainer}>
        <Statistics tickets={localTickets} />
      </div>
      <div className={styles.ticketList}>
        <TicketList tickets={localTickets} onUpdateTicket={saveTickets} />
      </div>
    </div>
  );
};

export default Dashboard;