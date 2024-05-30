import React from "react";
import Tooltip from "./tooltip";
import IconButton from "./icon-button";
import { CiHeart } from "react-icons/ci";
import { MouseEvent } from "react";

const AddToFavoriteButton = ({
  onClick,
  left,
}: {
  onClick: () => void;
  left: boolean;
}) => {
  return (
    <Tooltip title={"Add to Favorite"} left={left}>
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
        }}
      >
        <CiHeart className="w-5 h-5 text-slate-100 transition-colors hover:text-slate-600" />
      </IconButton>
    </Tooltip>
  );
};

export default AddToFavoriteButton;
