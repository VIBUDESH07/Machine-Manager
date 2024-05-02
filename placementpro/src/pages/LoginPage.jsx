// LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import CSS for styles

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Simulate login success for demonstration
    localStorage.setItem('isLogin', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="login-container"> {/* Apply CSS class for styling */}
      <h2 className="login-header">Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>} {/* Apply CSS class for error message */}
        <button type="button" onClick={handleLogin} className="login-button">Login</button> {/* Apply CSS class for button */}
      </form>
    </div>
  );
};

export default LoginPage;
