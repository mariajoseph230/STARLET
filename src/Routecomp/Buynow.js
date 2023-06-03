import React from 'react';
import './BuyNow.css';
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const BuyNow = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const product = {
    id: 1,
    name: 'Tomato',
    quantity: '1 kg',
    seller: 'Diya',
    price: 10,
    contact: '+1234567890',
    description: 'Fresh and organic tomatoes.',
    image: 'tomato.jpg' // Replace with the actual image URL
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
    </div>
  );
};

export default BuyNow;
