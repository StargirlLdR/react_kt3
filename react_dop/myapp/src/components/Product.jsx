import React from 'react';
import Stars from './Stars';

const Product = ({ product, onDoubleClick }) => {
  return (
    <div className="product" onDoubleClick={onDoubleClick}>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: {product.price}$</p>
      <Stars rating={product.rating} />
    </div>
  );
};

export default Product;
