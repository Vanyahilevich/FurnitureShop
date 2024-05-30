import clsx from "clsx";
import React, { FC, ReactNode, useEffect, useState } from "react";
import useVisibility from "src/hooks/useVisibility";
import { clientRoutes } from "src/routes";
import Link from "src/ui-kit/ui-link";
interface IBasketCardProps {
  id: string;
  name: string;
  totalPrice: string;
  price: number;
  currency: string;
  imageSrc: string;
  conter: ReactNode;
  deleteAction: ReactNode;
  errorText: string;
}
const BasketCardLayout: FC<IBasketCardProps> = ({
  id,
  name,
  totalPrice,
  price,
  currency,
  imageSrc,
  conter,
  deleteAction,
  errorText,
}) => {
  const isVisible = useVisibility(errorText);
  return (
    <div
      className="group/basketCard  transition-all 
      relative flex w-full 
      flex-col items-center
      text-sm  gap-2 pb-5
      md:max-h-40 md: md:flex-row md:pb-0 md:text-base md:gap-4
       lg:text-lg lg:gap-10
       "
    >
      <div className="w-full md:max-w-60 h-40 overflow-hidden bg-[#ebebeb]">
        <Link to={clientRoutes.product + id}>
          <div className="w-full h-full   bg-slate-300 cursor-pointer">
            <img
              className="w-full h-full   object-cover object-center "
              src={imageSrc}
              alt={name}
            />
          </div>
        </Link>
      </div>

      <Link
        to={clientRoutes.product + id}
        className="flex-auto  text-wrap cursor-pointer 
        self-start md:self-auto"
      >
        <div className="break-words">{name}</div>
      </Link>
      <div className="relative flex gap-2 self-end  md:self-auto">
        <div className="min-w-24 text-left">
          {currency} {price}
        </div>
        <div className="flex gap-2  w-16 items-center justify-center">
          {conter}
        </div>
        <div className="min-w-28 text-right">{totalPrice}</div>
        <div
          className={clsx(
            "text-sm absolute top-8 right-0 text-red-400 transition-all",
            isVisible ? "visible" : "invisible",
          )}
        >
          {errorText}
        </div>
      </div>
      <div className="absolute top-0 right-0  opacity-0  transition-all group-hover/basketCard:opacity-100 ">
        {deleteAction}
      </div>
    </div>
  );
};

export default BasketCardLayout;
