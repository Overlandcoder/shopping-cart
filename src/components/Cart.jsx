import { useContext } from "react";
import ShopContext from "../context/ShopContext";

function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(cartItem => {
          return (
            <li key={cartItem.id}>
              <h3>{cartItem.title}</h3>
              <p>{cartItem.quantity}</p>
            </li>
          )})}
      </ul>
    </>
  )
}

export default Cart;
