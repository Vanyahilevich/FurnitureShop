import React, { FC, HTMLAttributes } from "react";
import Tooltip from "src/shared/tooltip";
interface IUICounterProps {
  quantity: number;
  disabled: boolean;
  increment: () => void;
  decrement: () => void;
}

const UICounter: FC<IUICounterProps> = ({
  quantity,
  disabled,
  increment,
  decrement,
}) => {
  return (
    <div className="flex">
      <Tooltip title={"Remove product"}>
        <button
          disabled={disabled}
          onClick={decrement}
          className="w-8  text-slate-50 bg-darkBlueClick hover:bg-darkBlueHover active:bg-darkBlue"
        >
          -
        </button>
      </Tooltip>
      <div className="w-10 text-center  text-beigeHover transition-colors hover:text-lightBlue">
        {quantity}
      </div>
      <Tooltip title={"Add product"}>
        <button
          disabled={disabled}
          onClick={increment}
          className="w-8 text-slate-50 bg-darkBlueClick hover:bg-darkBlueHover active:bg-darkBlue"
        >
          +
        </button>
      </Tooltip>
    </div>
  );
};

export default UICounter;
