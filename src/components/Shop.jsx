import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop">
      <h2>Shop</h2>
      <ul className="product-list">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Shop;
