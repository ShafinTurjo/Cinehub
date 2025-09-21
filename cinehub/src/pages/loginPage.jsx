import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'; // Adjust path if needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser, setToken } = useAppContext();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with actual API call later
    if (email === 'admin@example.com' && password === '123456') {
      const user = { email };
      const fakeToken = 'fake-jwt-token-admin';

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', fakeToken);

      setUser(user);
      setToken(fakeToken);

      navigate('/');
    } else if (email === 'user@example.com' && password === '123456') {
      const user = { email };
      const fakeToken = 'fake-jwt-token-user';

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', fakeToken);

      setUser(user);
      setToken(fakeToken);

      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        required
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
