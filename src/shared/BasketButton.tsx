import React from "react";
import IconButton from "./IconButton";
import Tooltip from "./Tooltip";
import Link from "../components/Link";
import { CiShoppingCart } from "react-icons/ci";
const BasketButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link to="basket">
      <Tooltip title={"Basket"}>
        <IconButton onClick={onClick}>
          <CiShoppingCart className="w-5 h-5 text-beigeHover transition-colors hover:text-lightBlue " />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default BasketButton;