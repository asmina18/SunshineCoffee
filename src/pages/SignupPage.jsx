// src/pages/SignupPage.js

import { useState } from 'react';
import { useAuth } from '../contex/useAuth';
import { useNavigate } from 'react-router-dom';

export function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth(); // Henter signup-funktionen fra AuthContext
  const navigate = useNavigate();

  const handleSignup = async () => {
    // Kalder signup-funktionen og omdirigerer til login ved succesfuld signup
    await signup(email, password);
    navigate('/login');
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}


