import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";
import useVisibility from "src/hooks/useVisibility";

interface InputPropsLayout extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register: any;
  textError?: string;
  textApprove?: string;
  className?: string;
  isDisabled: boolean;
  changeInput: () => void;
  approveInput: () => void;
}

const UIProfileInputLayout: FC<InputPropsLayout> = ({
  label,
  name,
  register,
  className,
  textError,
  textApprove,
  isDisabled,
  changeInput,
  approveInput,
}) => {
  const isVisibleTextApprove = useVisibility(textApprove);
  return (
    <div className={clsx(className, "flex flex-col text-sm md:text-base")}>
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
            name={name}
            disabled={isDisabled}
            className={clsx(
              className,
              "text-slate-600",
              "focus: outline-none",
              "w-full pr-20 ",
            )}
          />
          <button
            type="button"
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
            type="submit"
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
      {textApprove ? (
        <p
          className={clsx(
            "text-sm text-green-500 h-4 mb-1",
            isVisibleTextApprove ? "visible" : "invisible",
          )}
          role="alert"
        >
          {textApprove}
        </p>
      ) : (
        <p className={clsx("text-sm text-red-500 h-4 mb-1")} role="alert">
          {textError}
        </p>
      )}
    </div>
  );
};

export default UIProfileInputLayout;
