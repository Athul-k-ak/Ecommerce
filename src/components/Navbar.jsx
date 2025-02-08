import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">🏠 Home</Link>
        <Link to="/products">🛒 Products</Link>
      </div>
      <div className="nav-right">
        {isAuthenticated ? (
          <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
        ) : (
          <Link to="/login">🔑 Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
