import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  // Si hay token, permite renderizar la ruta, si no, redirige a login
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;