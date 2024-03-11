import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import PTest from "./PTest";
import VTest from "./VTest";
import { Provider } from "react-redux";
import store from "./store";
import ProductsLayout from "./pages/ProductsLayout";
import { clientRoutes } from "./routes";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import SignUpPage from "./pages/sign-up-page";
import LoginPage from "./pages/login-page";
import Product from "./pages/Product";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: clientRoutes.home,
    element: <App />,
    errorElement: <div>Occurred error</div>,
    children: [
      {
        path: clientRoutes.login,
        element: <LoginPage />,
      },
      {
        path: clientRoutes.signup,
        element: <SignUpPage />,
      },
      {
        path: clientRoutes.products,
        element: <ProductsLayout />,
      },
      {
        path: clientRoutes.products + "/:id",
        element: <Product />,
      },
      {
        path: clientRoutes.basket,
        element: <div>basket</div>,
      },
      {
        path: clientRoutes.delivery,
        element: <div>delivery</div>,
      },
      {
        path: clientRoutes.favorite,
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
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </QueryClientProvider>,
);
