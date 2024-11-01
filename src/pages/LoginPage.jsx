// src/pages/LoginPage.js

import { useState } from 'react';
import { useAuth } from '../contex/useAuth';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.scss';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, signup } = useAuth(); // Henter login- og signup-funktioner fra AuthContext
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login(email, password);
    navigate('/checkout');
  };

  const handleSignup = async () => {
    await signup(email, password);
    navigate('/login'); // Efter signup kan vi omdirigere til login
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <div className={styles.form}>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <label className={styles.label}>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <div className={styles.buttonGroup}>
          <button onClick={handleSignup} className={styles.signupButton}>Sign up</button>
          <button onClick={handleLogin} className={styles.loginButton}>Submit</button>
        </div>
      </div>
    </div>
  );
}

