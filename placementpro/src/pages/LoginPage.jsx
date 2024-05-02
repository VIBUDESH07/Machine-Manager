import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import CSS for styles

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      // Make a POST request to your Express backend
      const response = await axios.post('/login', {
        username,
        password
      });

      // Assuming your backend responds with a success status
      if (response.status === 200) {
        // Simulate login success for demonstration
        localStorage.setItem('isLogin', 'true');
        navigate('/dashboard');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while logging in. Please try again.');
    }
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
