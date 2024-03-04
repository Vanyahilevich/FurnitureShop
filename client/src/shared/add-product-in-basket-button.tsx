import IconButton from "./icon-button";
import Tooltip from "./tooltip";
import { CiShoppingCart } from "react-icons/ci";

const AddToBasketButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Tooltip title={"Add to Basket"}>
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
        }}
      >
        <CiShoppingCart className="w-5 h-5 text-slate-100 transition-colors hover:text-slate-600" />
      </IconButton>
    </Tooltip>
  );
};

export default AddToBasketButton;
