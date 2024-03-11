import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputPropsLayout extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register: any;
  textError: string;
  className?: string;
  isDisabled: boolean;
  changeInput: () => void;
  approveInput: () => void;
  rest: any;
}

const UIProfileInputLayout: FC<InputPropsLayout> = ({
  label,
  name,
  register,
  className,
  textError,
  isDisabled,
  changeInput,
  approveInput,
  ...rest
}) => {
  return (
    <div className={clsx(className, "flex flex-col")}>
      <div
        className={clsx(
          "flex items-center gap-1 p-1 border rounded-sm",
          isDisabled ? "bg-slate-100 " : "bg-white ",
        )}
      >
        {label && (
          <label htmlFor={label} className="text-md text-slate-600 ">
            {label}
            {": "}
          </label>
        )}
        <div className="relative w-full">
          <input
            id={label}
            {...register}
            {...rest}
            disabled={isDisabled}
            className={clsx(
              className,
              //   textError ? "text-red-500" : "text-slate-600",
              "text-slate-600",
              "focus: outline-none",
              "w-full pr-16 ",
            )}
          />
          <button
            className={clsx(
              "text-sm text-slate-400",
              isDisabled ? "visible" : "invisible",
              "absolute right-2 bottom-1/2 trasnform translate-y-1/2",
            )}
            onClick={changeInput}
          >
            Change
          </button>
          <button
            className={clsx(
              "text-sm ",
              isDisabled ? "invisible" : "visible",
              "absolute right-2 bottom-1/2 trasnform translate-y-1/2",
              textError ? "text-red-400" : "text-emerald-700",
            )}
            onClick={approveInput}
          >
            Approve
          </button>
        </div>
      </div>
      <p
        className={clsx(
          "text-sm text-red-600 h-4 mb-1",
          textError ? "visible" : "invisible",
        )}
        role="alert"
      >
        {textError}
      </p>
    </div>
  );
};

export default UIProfileInputLayout;
