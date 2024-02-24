import React from "react";
import Tooltip from "./Tooltip";
import IconButton from "./IconButton";
import { CiHeart } from "react-icons/ci";
import { MouseEvent } from "react";

const AddToFavoriteButton = ({
  onClick,
}: {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Tooltip title={"Add to Favorite"}>
      <IconButton onClick={onClick}>
        <CiHeart className="w-5 h-5 text-slate-100 transition-colors hover:text-slate-600" />
      </IconButton>
    </Tooltip>
  );
};

export default AddToFavoriteButton;
