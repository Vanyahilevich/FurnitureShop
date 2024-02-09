import clsx from "clsx";
import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
}

const Input: FC<IInputProps> = ({ defaultValue, ...props }) => {
  const stateInitialized = React.useRef(false);
  const [value, setValue] = useState("");
  if (defaultValue && !stateInitialized.current) {
    setValue(defaultValue);
    stateInitialized.current = true;
  }
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    stateInitialized.current = true;
  };
  return (
    <input
      {...props}
      value={value}
      onChange={handleChangeInput}
      className={clsx(
        "border-2 border-beigeHover rounded-md px-1  outline-0",
        "hover:border-lightBlue ",
        "focus:border-lightBlue ",
        "active:border-lightBlue ",
      )}
    />
  );
};

export default Input;
