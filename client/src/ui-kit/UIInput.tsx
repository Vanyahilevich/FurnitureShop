import clsx from "clsx";
import React, { ChangeEvent, Dispatch, FC, InputHTMLAttributes } from "react";

type InputVariant = "search" | "subscribe";

interface UIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  variant: InputVariant;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UIInput: FC<UIInputProps> = ({ value, onChange, variant, ...props }) => {
  return (
    <input
      {...props}
      value={value}
      onChange={onChange}
      className={clsx(
        {
          search:
            "border-2 border-beigeHover rounded-md pl-2 pr-1 py-1  outline-0 text-sm text-slate-600 hover:border-lightBlue focus:border-lightBlue active:border-lightBlue",

          subscribe:
            "bg-footerInput py-3.5 pl-3.5 border-2 border-lightBlueClick active:border-lightBlueClick focus:border-lightBlueClick outline-0",
        }[variant],
      )}
    />
  );
};

export default UIInput;
