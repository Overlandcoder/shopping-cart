import { Link } from 'react-router';
import { useContext } from "react";
import ShopContext from '../context/ShopContext'

function Navbar() {
  const { cartCount } = useContext(ShopContext)

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart: {cartCount}</Link>
    </nav>
  );
}

export default Navbar;
