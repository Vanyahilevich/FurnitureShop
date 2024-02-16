import clsx from "clsx";
import React, { FC, ReactNode } from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "details" | "pay" | "subscribe" | "add";

interface IUIButtonProps {
  children?: ReactNode;
  className?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  onClick?: () => void;
}

const UIButton: FC<IUIButtonProps> = ({
  children,
  className,
  size,
  variant,
  onClick,
}) => {
  const buttonClassName = clsx(
    "transition-color",
    className,
    {
      lg: "text-2xl py-4 px-[116px]",
      md: "text-2xl py-4 px-[84px]",
      sm: "text-lg py-1  px-8",
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
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};

export default UIButton;
