// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   return <div>Product Details: {productId}</div>;
// };

// export default ProductDetails;


// src/components/ProductDetails.js

// src/components/ProductDetails.js
// src/components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Productitem.css'; // Ensure this file exists for styling

const ProductDetails = () => {
  const { productId } = useParams(); // Get the productId from the route params
  const [product, setProduct] = useState(null);

  // Get the list of products from the Redux store
  const products = useSelector((state) => state.product.items);

  useEffect(() => {
    // Find the product that matches the productId
    const foundProduct = products.find((p) => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId, products]);

  if (!product) {
    return <div>Loading...</div>; // Show loading or not found message if product is not found
  }

  return (
    <div className="product-details">
      <div className="product-details-header">
        <img src={product.image} alt={product.model} width="500px" height="500px" />
        <div className="product-details-info">
          <h1>{product.brand}</h1>
          <h2>{product.model}</h2>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.details}</p>
          <div className="rating">
            <span><strong>Rating:</strong> {product.rating.rate}</span>
            <span> ({product.rating.count} reviews)</span>
          </div>
          <div>
            <strong>Color Variants:</strong> {product.features.colorVariants.join(', ')}
          </div>
          <div>
            <strong>Strap Material:</strong> {product.features.strapMaterial}
          </div>
          <div>
            <strong>Water Resistance:</strong> {product.features.waterResistance}
          </div>
          <div>
            <strong>Additional Features:</strong> {product.additionalFeatures || 'N/A'}
          </div>
          <div>
            <strong>Warranty:</strong> {product.warranty }
          </div>
          {/* Add any additional details here */}
        </div>
      </div>
      
      
    </div>
  );
};

export default ProductDetails;
