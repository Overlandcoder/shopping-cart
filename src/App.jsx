import './App.css';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import routes from './routes/routes';
import ShopContext from './context/ShopContext'

const router = createBrowserRouter(routes);

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product, quantity) => {
    setCartProducts(prevCart => [...prevCart, { ...product, quantity }]);
  }

  const cartCount = cartProducts.reduce((total, product) => {
    return total + product.quantity;
  }, 0)

  return (
    <ShopContext value={{ cartProducts, addToCart, cartCount }}>
      <RouterProvider router={router} />
    </ShopContext>
  )
}

export default App;
