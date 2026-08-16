import './App.css';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import routes from './routes/routes';
import ShopContext from './context/ShopContext'

const router = createBrowserRouter(routes);

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prevCart => {
      const alreadyInCart = prevCart.find(cartProduct => cartProduct.id === product.id)
      
      if (alreadyInCart) {
        return prevCart.map(cartItem => {
          return cartItem.id === product.id ? { ...product, quantity: cartItem.quantity + quantity } : cartItem
        })
      }

      return [...prevCart, { ...product, quantity }]
    });
  }

  const cartCount = cartItems.reduce((total, product) => {
    return total + product.quantity;
  }, 0)

  return (
    <ShopContext value={{ cartItems, addToCart, cartCount }}>
      <RouterProvider router={router} />
    </ShopContext>
  )
}

export default App;
