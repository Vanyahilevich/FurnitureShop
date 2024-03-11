import React, { FC } from "react";
import Tooltip from "./tooltip";
import IconButton from "./icon-button";
import { IoIosCloseCircle } from "react-icons/io";

interface IDeleteButtonProps {
  className?: string;
  onClick?: () => void;
}

const DeleteButton: FC<IDeleteButtonProps> = ({
  className,
  onClick = () => {},
}) => {
  return (
    <Tooltip title={"Delete product"}>
      <IconButton onClick={onClick}>
        <IoIosCloseCircle className=" w-5 h-5  text-beigeHover transition-colors hover:text-lightBlue" />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
