import React from 'react';
import './Buynow.css';
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Footer from './Footer'
const BuyNow = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const product = {
    id: 1,
    name: 'Carrots',
    quantity: '1 kg',
    seller: 'Ashwini',
    // price: 10,
    contact: '+1234567890',
    description: 'These are high quality carrots cultivated using bio-fertilizers.',
    image: 'data:image/jpeg;base64,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' // Replace with the actual image URL
  };

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

      <div className="product-details">
        <h1>Buy Now</h1>
        <div className="product">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.quantity}</p>
            <p className="seller">Seller: {product.seller}</p>
            <p>{product.description}</p>
            <div className="actions">
              <select className="exchange-select">
                <option value="">Pay Money</option>
                <option value="Product 1">Tomato</option>
                <option value="Product 2">Potato</option>
                <option value="Product 3">Spinach</option>
                <option value="others">Others</option>
              </select>
              <button className="buy-button" onClick={() => handleBuyClick(product.contact)}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BuyNow;
