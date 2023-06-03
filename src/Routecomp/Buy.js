

import React from 'react';
import './Buy.css';
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import tomatoImage from '../images/tomato.jpg';
import potatoImage from '../images/potato.jpg';
import chilliImage from '../images/chilli.jpg';
import Footer from './Footer'
const Buy = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const products = [
    {
      id: 1,
      name: 'Tomato',
      quantity: '1 kg',
      seller: 'Diya',
      price: 10,
      contact: '+1234567890',
      image: tomatoImage,
    },
    {
      id: 2,
      name: 'Potato',
      quantity: '1 kg',
      seller: 'Archana',
      price: 15,
      contact: '+9876543210',
      image: potatoImage,
    },
    {
      id: 3,
      name: 'Chilli',
      quantity: '1 kg',
      seller: 'Manasi',
      price: 20,
      contact: '+1234509876',
      image: chilliImage,
    },
  ];

  const handleBuyClick = (contact) => {
    window.open(`https://wa.me/${contact}`);
  };

  return (
    <div>
      <header>
        <h3>SHE FARM</h3>
        <nav ref={navRef}>
          <a href="/Home">Home</a>
          <a href="/Sell">Sell Product</a>
          <a href="/Buy">Buy Product</a>
          <a href="/Exhibition">Exhibition</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div className="product-list">
        <h1>Product List</h1>
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.quantity}</p>
            <p className="seller">Seller: {product.seller}</p>
            <div className="actions">
              <select className="exchange-select">
                <option value="">pay money</option>
                <option value="Product 1">Tomato</option>
                <option value="Product 2">Potato</option>
                <option value="Product 3">Spinach</option>
                <option value="others">others</option>
              </select>
              <button className="buy-button" onClick={() => handleBuyClick(product.contact)}>
                Buy
              </button>
            </div>
            <hr className="divider" />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  
  );
};

export default Buy;
