import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 className="loading">Loading product details...</h2>;

  return (
    <div className="product-details-container">
      <button className="back-btn" onClick={() => navigate("/products")}>⬅ Back to Products</button>

      <div className="product-details-card">
        <img src={product.image} alt={product.title} className="product-image" />

        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="category"><strong>Category:</strong> {product.category}</p>
          <p className="description">{product.description}</p>
          <p className="price"><strong>Price:</strong> ${product.price}</p>
          <button className="add-to-cart-btn">🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
