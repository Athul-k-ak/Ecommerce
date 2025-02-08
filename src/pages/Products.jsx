import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Products:", data); // Debugging log
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (productId) => {
    console.log("Navigating to product with ID:", productId);
    navigate(`/product/${productId}`);
  };

  if (loading) return <h2 className="loading">Loading products...</h2>;
  if (error) return <h2 className="error">{error}</h2>;

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails(product.id)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;
