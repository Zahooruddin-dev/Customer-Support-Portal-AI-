import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../utils/constants';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  
  return currentUser ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;