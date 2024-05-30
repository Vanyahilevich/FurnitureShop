import React from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import IconButton from "./icon-button";
import Tooltip from "./tooltip";
import { clientRoutes } from "src/routes";

const FavoriteButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <Link to={clientRoutes.favorite}>
      <Tooltip title={"Favorite"}>
        <CiHeart className="w-7 h-7 text-beigeHover transition-colors hover:text-lightBlue " />
      </Tooltip>
    </Link>
  );
};

export default FavoriteButton;
