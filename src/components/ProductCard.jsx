import { useContext } from "react";
import ShopContext from '../context/ShopContext'

function ProductCard({ product }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <li className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
    </li>
  );
}

export default ProductCard;
