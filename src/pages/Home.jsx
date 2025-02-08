import React from "react";
import { Link } from "react-router-dom";

const Home = ({ isAuthenticated }) => {
  return (
    <div className="home-container">
      {/* 🔹 Hero Banner */}
      <div className="banner">
        <div className="banner-overlay">
          <h1 className="sliding-text">Welcome to Our Store</h1>
          <p>Find the best products at unbeatable prices!</p>
          <Link to={isAuthenticated ? "/products" : "/login"} className="shop-now-btn">
            {isAuthenticated ? "Shop Now" : "Login to Shop"}
          </Link>
        </div>
      </div>

      {/* 🔹 Featured Products Section */}
      <div className="featured-products">
        <h2>🌟 Popular Picks</h2>
        <div className="product-list">
          {/* 🛍 Product Cards */}
          {[
            { id: 1, img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", name: "Fjallraven Backpack", price: "$109.95" },
            { id: 2, img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", name: "Men's Jacket", price: "$55.99" },
            { id: 3, img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", name: "Smartwatch", price: "$199.99" },
          ].map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <Link to={isAuthenticated ? "/products" : "/login"} className="view-btn">
                {isAuthenticated ? "View Details" : "Login to View"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
