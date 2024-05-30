import React, { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register: any;
  errors: any;
  className?: string;
}
const InputClassName = (errors: any) =>
  clsx(
    "w-full text-md pl-3 pr-2 py-2 mb-1 border-2 rounded-md outline-0",
    errors ? "text-red-500" : "text-slate-600",
    errors ? "border-red-500" : "border-beigeHover",
    errors ? "active:border-red-500" : "active:border-lightBlue",
    errors ? "focus:border-red-500" : "focus:border-lightBlue",
    errors ? "hover:border-red-700" : "hover:border-lightBlue",
  );
const ErrorTextClassName = (errors: any) =>
  clsx("text-sm text-red-500 h-4 mb-1", errors ? "visible" : "invisible");
const UIFormInput: FC<InputProps> = ({
  label,
  name,
  register,
  className,
  errors = {},
  ...rest
}) => {
  return (
    <div className={clsx(className, "w-full text-sm sm:text-base")}>
      {label && (
        <label htmlFor={label} className="text-sm text-slate-600">
          {label}
        </label>
      )}
      <input
        id={label}
        {...register}
        {...rest}
        className={clsx(className, InputClassName(errors[name]))}
      />
      <p className={ErrorTextClassName(errors[name])} role="alert">
        {errors[name]?.message}
      </p>
    </div>
  );
};

export default UIFormInput;
