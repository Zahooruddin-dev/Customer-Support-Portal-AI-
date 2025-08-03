import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './utils/constants';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import ChatInterface from './components/chat/ChatInterface';
import PrivateRoute from './components/auth/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route 
        path={ROUTES.DASHBOARD} 
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path={ROUTES.CHAT} 
        element={
          <PrivateRoute>
            <ChatInterface />
          </PrivateRoute>
        } 
      />
      <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} />} />
    </Routes>
  );
};

export default AppRoutes;