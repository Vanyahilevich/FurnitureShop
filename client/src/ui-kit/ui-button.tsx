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

const UIButton: FC<IUIButtonProps> = ({
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
    "transition-color flex items-center justify-center",
    className,
    {
      lg: "text-lg py-4 px-20 ",
      md: "text-md py-4 px-16",
      sm: "text-sm py-2 px-8 ",
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
    </button>
  );
};

export default UIButton;
