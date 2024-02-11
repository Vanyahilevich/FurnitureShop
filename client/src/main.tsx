import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import PTest from "./PTest";
import VTest from "./VTest";
import { Provider } from "react-redux";
import store from "./store";
import ProductsLayout from "./pages/ProductsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Occurred error</div>,
    children: [
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/signup",
        element: <div>Sign Up</div>,
      },
      {
        path: "products",
        element: <ProductsLayout />,
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
        path: "favorite",
        element: <div>favorite</div>,
      },
      {
        path: "/p",
        element: <PTest />,
      },
      {
        path: "/v",
        element: <VTest />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>,
);
