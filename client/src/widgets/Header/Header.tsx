import React from "react";
import Link from "../../components/Link";
import HeaderLayout from "./header-layout";
import HeaderLogo from "./HeaderLogo";
import BasketButton from "../../shared/BasketButton";
import FavoriteButton from "../../shared/FavoriteButton";
import { clientRoutes } from "src/routes";

const Header = () => {
  return (
    <HeaderLayout
      logo={<HeaderLogo />}
      links={
        <>
          <Link to={"/products"}>Products</Link>
          <Link to={"/basket"}>Basket</Link>
          <Link to={"/delivery"}>Delivery</Link>
          <Link to={"/products/1"}> one products</Link>
          <Link to={"/v"}>test vanya</Link>
          <Link to={"/p"}>test pasha</Link>
          <Link to={clientRoutes.signup}>Sign Up</Link>
          <Link to={clientRoutes.login}>Login</Link>
        </>
      }
      actions={
        <>
          <FavoriteButton />
          <BasketButton />
        </>
      }
    />
  );
};

export default Header;
