// Login.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../firebase/authActions'; // Assuming you have actions for Redux

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // State to manage registration form visibility
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      registerUser(email, password);
    } else {
      alert("Passwords do not match!");
    }
  };

  const toggleForm = () => {
    setIsRegistering(prevState => !prevState);
  };

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isRegistering && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>

      {isRegistering && (
        <p onClick={toggleForm}>Already have an account? Login here</p>
      )}
    </div>
  );
};

export default Login;
