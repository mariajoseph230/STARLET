import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'
import Footer from './Footer'
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here, such as clearing session storage, removing tokens, etc.

    // Redirect to the login page after logout
    navigate('/login');
  };

  return (
    <div logout-container>
   
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
      <Footer/>
    </div>
  );
};

export default Logout;
