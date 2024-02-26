import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import PTest from "./PTest";
import VTest from "./VTest";
import { Provider } from "react-redux";
import store from "./store";
import { clientRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUpPage from "./pages/sign-up-page";
import LoginPage from "./pages/login-page";
import ProductsPage from "./pages/products-page";
import BasketPage from "./pages/basket-page";

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
        element: <div>delivery</div>,
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
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </QueryClientProvider>,
);
