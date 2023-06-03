import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Signup.css'

export default function Signup() {

  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:''
  });

  useEffect(() => {
    // Function to retrieve the user's current location
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setCurrentLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          error => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    
    getCurrentLocation();
  }, []);
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  }
    console.log(formData);
    // navigate('/Home');
    
  const onRegistration=async()=>{
    try{
      const config={
        headers:{
          "Content-type":"application/json"
        },

      }
      const data=await axios.post("http://localhost:4000/user",formData,config)
      console.log(data);
      navigate("/Home")
      return data
    }
    catch(error){
      console.log("Couldnt signup",error)
    }
  };

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      {/* <LoadScript googleMapsApiKey="AIzaSyC2ml4_2HzeYc-McWnf5eugEAZAmhhpvAU">
        {currentLocation && (
          <div className="map-container">
            <GoogleMap
              center={currentLocation}
              zoom={14}
              mapContainerStyle={{ height: '400px', width: '100%' }}
            />
          </div>
        )}
      </LoadScript> */}
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" onClick={onRegistration}>Sign Up</button>
      </form>
      Aready have an account??<a href="/Login">Login</a>
    </div>
  );
};



