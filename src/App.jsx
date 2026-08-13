import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <h2>Home page</h2>
      </div>)
  },
  {
    path: "/shop",
    element: (
      <div>
        <Navbar />
        <Shop />
      </div>)
  },
  {
    path: "/cart",
    element: (
      <div>
        <Navbar />
        <Cart />
      </div>
    )
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
