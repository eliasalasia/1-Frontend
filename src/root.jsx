import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Info from './pages/Info';
import Update from './pages/Update';
import PrivateRoute from './components/PrivateRoute';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/info" element={<Info />} />
          <Route path="/update" element={<Update />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;