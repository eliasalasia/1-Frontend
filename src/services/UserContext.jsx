import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async ({ email, password }) => {
    try {
      const res = await axios.post('http://localhost:3000/api/usuario', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const updateUser = async (updatedData) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put('http://localhost:3000/api/usuario', updatedData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data);
      return res.data;
    } catch (error) {
      console.error('Update user error:', error);
      throw error;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3000/api/usuario', { headers: { Authorization: token } })
        .then(res => {
          setUser(res.data);
          setIsAuthenticated(true);
        })
        .catch(err => {
          console.error('Error loading user:', err);
          logout();
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, isAuthenticated, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export default UserContext;