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
      lg: "text-sm py-3 px-8 sm:text-base sm:py-3 sm:px-16 md:text-lg md:py-4 md:px-20",
      md: "text-xs py-2 px-6 sm:text-sm sm:py-2 sm:px-12 md:text-base md:py-3 md:px-12",
      sm: "text-xs py-1 px-4 sm:text-sm sm:py-1 sm:px-6 md:text-base md:py-2 md:px-8  ",
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
