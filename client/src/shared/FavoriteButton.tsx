import React from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import Tooltip from "./Tooltip";
import { clientRoutes } from "src/routes";

const FavoriteButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <Link to={clientRoutes.favorite}>
      <Tooltip title={"Favorite"}>
        <IconButton onClick={onClick}>
          <CiHeart className="w-5 h-5 text-beigeHover transition-colors hover:text-lightBlue " />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default FavoriteButton;
