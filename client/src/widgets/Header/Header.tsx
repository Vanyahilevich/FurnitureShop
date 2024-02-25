import React from "react";
import Link from "../../components/Link";
import HeaderLayout from "./header-layout";
import Logo from "./Logo";
import BasketButton from "../../shared/BasketButton";
import FavoriteButton from "../../shared/FavoriteButton";
import Search from "../../shared/Search";

const Header = () => {
  return (
    <HeaderLayout
      logo={<Logo />}
      links={
        <>
          <Link to={"/products"}>Products</Link>
          <Link to={"/basket"}>Basket</Link>
          <Link to={"/delivery"}>Delivery</Link>
          <Link to={"/products/1"}> one products</Link>
          <Link to={"/v"}>test vanya</Link>
          <Link to={"/p"}>test pasha</Link>
        </>
      }
      actions={
        <>
          <Search />
          <FavoriteButton />
          <BasketButton />
        </>
      }
    />
  );
};

export default Header;
