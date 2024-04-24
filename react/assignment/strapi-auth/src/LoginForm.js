import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://university.demoapi.xyz/api/users', {
        usernameOrEmail,
        password
      });
      
      // Assuming the JWT token is returned in the response
      const token = response.data.token;
      
      // Store the token in local storage
      localStorage.setItem('token', token);
      
      // Clear input fields and errors
      setUsernameOrEmail('');
      setPassword('');
      setError('');
      
      // Redirect or perform any other action upon successful login
    } catch (error) {
      setError('Invalid username/email or password');
      console.error('Login error:', error);
    }
  };
  
  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username or Email:</label>
          <input 
            type="text" 
            value={usernameOrEmail} 
            onChange={(e) => setUsernameOrEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
