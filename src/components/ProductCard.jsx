function ProductCard({ product, cartProducts, setCartProducts }) {
  function handleClick() {
    setCartProducts([...cartProducts, product]);
  }

  return (
    <li className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <button onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default ProductCard;
