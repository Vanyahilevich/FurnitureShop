import IconButton from "../shared/IconButton";
import Tooltip from "../shared/Tooltip";
import { CiShoppingCart } from "react-icons/ci";
import { MouseEvent } from "react";

const AddToBasketButton = ({
  onClick,
}: {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Tooltip title={"Add to Basket"}>
      <IconButton onClick={onClick}>
        <CiShoppingCart className="w-5 h-5 text-slate-100 transition-colors hover:text-slate-600" />
      </IconButton>
    </Tooltip>
  );
};

export default AddToBasketButton;
