import Navbar from '../components/Navbar';
import Shop from '../components/Shop';
import Cart from '../components/Cart';

const routes = [
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <h2>Home page</h2>
      </div>
    ),
  },
  {
    path: '/shop',
    element: (
      <div>
        <Navbar />
        <Shop />
      </div>
    ),
  },
  {
    path: '/cart',
    element: (
      <div>
        <Navbar />
        <Cart />
      </div>
    ),
  },
];

export default routes;
