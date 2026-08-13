import { useState, useEffect } from "react";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return(
    <div>
      <h2>Shop</h2>
      <ul>
        {products.map(product => {
          return <li>{product.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Shop;