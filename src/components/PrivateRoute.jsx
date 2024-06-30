import React, { useContext } from 'react';
import { Navigate, Route, Outlet } from 'react-router-dom';
import UserContext from '../services/UserContext';

const PrivateRoute = () => {
  const { loading, isAuthenticated } = useContext(UserContext);

  // Si está cargando, muestra un mensaje de carga
  if (loading) {
    return <div>Loading...</div>;
  }

  // Si no está autenticado, redirige a la página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderiza el Outlet para las rutas anidadas protegidas
  return <Outlet />;
};

export default PrivateRoute;