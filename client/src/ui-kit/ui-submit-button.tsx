import clsx from "clsx";
import React, { FC, HTMLAttributes, ReactNode } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "details" | "pay" | "subscribe" | "add";

interface IUIButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  onClick?: () => void;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

const UISubmitButton: FC<IUIButtonProps> = ({
  children,
  className,
  size,
  variant,
  onClick,
  isLoading,
  type,
  ...props
}) => {
  const buttonClassName = clsx(
    "transition-color flex items-center justify-center gap-2",
    className,
    {
      lg: "text-2xl py-4 pr-[116px] pl-86px",
      md: "text-2xl py-4 pr-[84px] pl-[52px]",
      sm: "text-lg py-1 pl-8",
    }[size],
    {
      details:
        "text-beige bg-lightBlue hover:bg-lightBlueHover active:bg-lightBlueClick",
      pay: "text-darkBlueHover bg-lightYellow hover:bg-lightYellowHover active:bg-lightYellowClick",
      subscribe:
        "text-beige bg-darkBlue hover:bg-darkBlueHover active:bg-darkBlueClick",
      add: "border-2 border-beigeHover text-beigeHover hover:bg-peach active:bg-peachClick",
    }[variant],
  );
  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      type={type}
      {...props}
    >
      {children}
      <span className={clsx(isLoading ? "visible" : "invisible")}>
        <AiOutlineLoading3Quarters className="animate-spin" />
      </span>
    </button>
  );
};

export default UISubmitButton;
