import { createContext } from "react";

const ShopContext = createContext({
  cartProducts: [],
  addToCart: () => {},
  cartCount: 0
})

export default ShopContext;
