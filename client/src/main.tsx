import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import PTest from "./pages/PTest";
import { clientRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUpPage from "./pages/signup-page/signup-page";
import LoginPage from "./pages/login-page/login-page";
import ProductsPage from "./pages/product-page/products-page";
import BasketPage from "./pages/basket/basket-page";
import DeliveryPage from "./pages/delivery/delivery-page";
import ErrorPage from "./pages/error-page";
import VTest from "./pages/VTest";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: clientRoutes.home,
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: <ProductsPage />,
      },
      {
        path: clientRoutes.products + "/:id",
        element: <div>one Product</div>,
      },
      {
        path: clientRoutes.basket,
        element: <BasketPage />,
      },
      {
        path: clientRoutes.delivery,
        element: <DeliveryPage />,
      },
      {
        path: clientRoutes.favorite,
        element: <div>favorite</div>,
      },
      {
        path: clientRoutes.profile,
        element: <div>profile</div>,
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
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </QueryClientProvider>,
);
