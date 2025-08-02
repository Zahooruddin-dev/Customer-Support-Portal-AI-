import React from 'react';
import { formatDate } from '../../utils/helpers';

const TicketList = ({ tickets }) => {
  return (
    <div className="ticket-list">
      <h2>Your Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <div className="tickets-container">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <div className="ticket-header">
                <h3>{ticket.subject}</h3>
                <span className={`status ${ticket.status}`}>{ticket.status}</span>
              </div>
              <p className="ticket-description">{ticket.description}</p>
              <div className="ticket-footer">
                <span className="ticket-date">{formatDate(ticket.createdAt)}</span>
                <span className="ticket-category">{ticket.category}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketList;