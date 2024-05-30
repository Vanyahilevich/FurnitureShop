export const clientRoutes = {
  home: "/",
  login: "/login",
  signup: "/signup",
  products: "/products",
  product: "/products/",
  basket: "/basket",
  delivery: "/delivery",
  favorite: "/favorite",
  profile: "/profile",
};
const base = "http://localhost:5000/api";
export const serverRoutes = {
  image: "http://localhost:5000/image/",
  imageAvatar: "http://localhost:5000/",
  products: base + "/products?",
  product: base + "/products/",
  similarProducts: base + "/products/similar/",
  updateProduct: base + "/products/updateProducts",
  signup: base + "/auth/signup",
  login: base + "/auth/login",
  auth: base + "/auth/auth",
  logout: base + "/auth/logout",
  basket: base + "/basket",
  basketIncrease: base + "/basket/increase",
  basketDecrease: base + "/basket/decrease",
  purchase: base + "/basket/purchase",
  delivery: base + "/delivery",
  confirm: base + "/delivery/confirm",
  changeInfo: base + "/auth/changeInfo",
  changeImage: base + "/auth/changeImage",
  changeEmail: base + "/auth/changeEmail",
};

import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import App from "./App";
import ProfileLayoutPage from "./pages/profile/profile-layout-page";

const LoginPage = lazy(() => import("./pages/login/login-page"));
const SignUpPage = lazy(() => import("./pages/signup/signup-page"));
const ProductsPage = lazy(() => import("./pages/products/products-page"));
const ProductPage = lazy(() => import("./pages/product/product-page"));

const BasketPage = lazy(() => import("./pages/basket/basket-page"));
const DeliveryPage = lazy(() => import("./pages/delivery/delivery-page"));
const HomePageLayout = lazy(() => import("./pages/home/home-layout-page"));

export const router = createBrowserRouter([
  {
    path: clientRoutes.home,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: clientRoutes.home,
        element: <HomePageLayout />,
      },
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
        element: <ProductPage />,
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
        element: <ProfileLayoutPage />,
      },
    ],
  },
]);
