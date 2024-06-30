import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLogos from '../components/pagesmult/BtnLog';
import Inputs from '../components/pagesmult/Inputs';
import BtnLogin from '../components/login/BtnFormLog';
import EnlaceRegist from '../components/login/EnlaceRegist';
import Option from '../components/pagesmult/Option';
import UserContext from '../services/UserContext';

function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await login({ email, password });
      navigate('/info'); // Redirige a la ruta protegida
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-3xl border border-gray-300">
        <img className="mx-auto w-36 " src="/devchallenges.svg" alt="Logo" />
        <h2 className="mt-6 text-2xl font-medium text-black">Login</h2>
        <form onSubmit={handleLogin} className="mt-8 space-y-8">
          <Inputs />
          <BtnLogin />
        </form>
        <Option />
        <ButtonLogos />
        <EnlaceRegist />
      </div>
    </div>
  );
}

export default Login;