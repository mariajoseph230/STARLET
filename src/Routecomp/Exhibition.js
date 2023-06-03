import React, { useState } from 'react';
import Footer from './Footer'
import './Exhibition.css'

import { useRef } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
const Exhibition = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
   
    alert('Registered successfully!');

  
    window.location.href = '/Home';
  };

  return (
    <div>
         
    <header>
 
    <h3>SHE FARM</h3>
    <nav  ref={navRef}>

        <a href="/Home">Home</a>
        <a href="/Sell">Sell Product</a>
        <a href="/Buy">Buy Product</a>
        <a href="/Exhibition">Exhibition</a>
        <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
        </button>
    </nav>
    <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
    </button>
</header>
<div className="background-image">
    <div className="container" >
      <h1>Food Exhibition</h1>
      <p>Loved our Service ? Join us for the Kerala's best food Exhibition conducted once in every Month.Come out of your safe zone and interact with producers in our locality.Show case your cooking skills and win exciting prizes too.Fill out this form and details will be send  to your number.</p>
      <p>Time: 10:00 AM - 5:00 PM</p>
      <p>Venue: ABC Convention Center, City</p>

      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Exhibition;
