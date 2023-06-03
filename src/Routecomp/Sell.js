import React, { useState } from 'react';
import "./Sell.css";
import { useRef } from "react";
import { FaBars, FaTimes} from "react-icons/fa";



const Sell= () => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  const [sellername, setsellername] = useState('');
  const [phone, setphone] = useState('');
  const [vegetable, setVegetable] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const handlesellernameChange = event => {
    setsellername(event.target.value);
  };
  const handlephoneChange = event => {
    setphone(event.target.value);
  };

  const handleVegetableChange = event => {
    setVegetable(event.target.value);
  };

  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  };
  const handleImageChange = event => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = () => {

    setsellername('');
    setphone('');
    setVegetable('');
    setQuantity('');
    setImage(null);
  };

  return (<div>
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

    <div className="details-page">
      <h1>Enter the Details</h1>
      <form>
      <div className="form-group">
          <label htmlFor="name">Seller Name:</label>
          <input
            type="text"
            id="seller"
            value={sellername}
            onChange={handlesellernameChange}
            placeholder="Enter the Seller name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlephoneChange}
            placeholder="Enter the Phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vegetables">Vegetable:</label>
          <input
            type="text"
            id="vegetable"
            value={vegetable}
            onChange={handleVegetableChange}
            placeholder="Enter the vegetable name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity Produced(in Kg):</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Enter the quantity produced"
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="image">Product Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
        
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    
    </div>
  );
};

export default Sell;