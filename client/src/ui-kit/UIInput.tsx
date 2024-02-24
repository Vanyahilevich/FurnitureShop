import clsx from "clsx";
import React, { ChangeEvent, Dispatch, FC, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeValue: (value: string) => void;
  className: string;
}

const UIInput: FC<IInputProps> = ({
  value,
  onChangeValue,
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
      className={clsx(
        className,
        "border-2 border-beigeHover rounded-md pl-2 pr-1 py-1  outline-0",
        "text-sm text-slate-600",
        "hover:border-lightBlue ",
        "focus:border-lightBlue ",
        "active:border-lightBlue ",
      )}
    />
  );
};

export default UIInput;
