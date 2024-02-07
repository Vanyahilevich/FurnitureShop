import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import {createRoot} from 'react-dom/client';
import './index.css';
import PTest from "./PTest";
import VTest from "./VTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div>Occurred error</div>,
    children: [
      {
        path: "/login",
        element: <div>Login</div>
      },
      {
        path: "/signup",
        element: <div>Sign Up</div>
      },
      {
        path: "products",
        element: <div>Products</div>,
      },
      {
        path: "products/:id",
        element: <div>one Product</div>,
      },
      {
        path: "basket",
        element: <div>basket</div>,
      },
      {
        path: "delivery",
        element: <div>delivery</div>,
      },
      {
        path: "/p",
        element: <PTest/>,
      },
      {
        path: "/v",
        element: <VTest/>,
      }
    ]
  },


]);


const root = createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}>
    <App/>
  </RouterProvider>
);
