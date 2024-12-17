import React, { useState, useEffect } from 'react';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="grid">
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            onDoubleClick={() => removeProduct(product.id)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;