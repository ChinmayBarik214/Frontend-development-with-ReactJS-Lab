import React, { useEffect } from 'react';
import axios from 'axios';

const LoginComponent = () => {
  useEffect(() => {
    axios
      .post('https://university.demoapi.xyz/api/auth/local', {
        identifier: 'frontenduser@demoapi.xyz',
        password: 'KRMU@123',
      })
      .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>
      <p>Login process ongoing...</p>
    </div>
  );
};

export default LoginComponent;