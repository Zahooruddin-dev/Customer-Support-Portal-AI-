import React from 'react';

const Statistics = ({ tickets }) => {
  const totalTickets = tickets.length;
  const resolvedTickets = tickets.filter(ticket => ticket.status === 'resolved').length;
  const unresolvedTickets = totalTickets - resolvedTickets;

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <div className="statistic-item">
        <h3>Total Tickets</h3>
        <p>{totalTickets}</p>
      </div>
      <div className="statistic-item">
        <h3>Resolved Tickets</h3>
        <p>{resolvedTickets}</p>
      </div>
      <div className="statistic-item">
        <h3>Unresolved Tickets</h3>
        <p>{unresolvedTickets}</p>
      </div>
    </div>
  );
};

export default Statistics;