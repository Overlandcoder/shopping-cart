import RootLayout from '../components/RootLayout'
import Home from '../components/Home'
import Shop from '../components/Shop';
import Cart from '../components/Cart';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  },
];

export default routes;
