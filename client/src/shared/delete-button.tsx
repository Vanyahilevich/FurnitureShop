import React, { FC, HTMLAttributes } from "react";
import Tooltip from "./tooltip";
import IconButton from "./icon-button";
import { IoIosCloseCircle } from "react-icons/io";

interface IDeleteButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}

const DeleteButton: FC<IDeleteButtonProps> = ({
  className,
  onClick = () => {},
  ...props
}) => {
  return (
    <Tooltip title={"Delete product"} left>
      <IconButton onClick={onClick} {...props}>
        <IoIosCloseCircle className=" w-5 h-5  text-beigeHover transition-colors hover:text-lightBlue" />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
