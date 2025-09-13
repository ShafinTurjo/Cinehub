// pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace with real backend call
    if (email === 'test@example.com' && password === '123456') {
      const user = { email };
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
