import { createContext } from "react";

const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  cartCount: 0
})

export default ShopContext;
