import React from 'react';
import Link from "../components/Link";

const Header = () => {
  return (
    <div className="flex gap-x-2">
      <Link to={"/products"}>Products</Link>
      <Link to={"/basket"}>Basket</Link>
      <Link to={"/delivery"}>Delivery</Link>
      <Link to={"/products/1"}> one products</Link>
      <Link to={"/v"}>test vanya</Link>
      <Link to={"/p"}>test pasha</Link>
    </div>
  );
};

export default Header;
