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
      relative flex flex-auto w-3/4 gap-10 text-lg max-h-40 items-center"
    >
      <div className="max-w-60 max-h-full overflow-hidden">
        <Link to={clientRoutes.product + id}>
          <div className="w-full  h-full  bg-slate-300 cursor-pointer">
            <img
              className="text-sm w-full  h-full  object-cover object-center "
              src={imageSrc}
              alt={name}
            />
          </div>
        </Link>
      </div>

      <Link
        to={clientRoutes.product + id}
        className=" flex-auto text-wrap cursor-pointer"
      >
        <div>{name}</div>
      </Link>
      <div className="min-w-24 text-left">
        {currency} {price}
      </div>
      <div className="flex gap-2  w-16 items-center justify-center">
        {conter}
      </div>
      <div className="min-w-28 text-right">{totalPrice}</div>
      <div className="absolute top-0 right-0  opacity-0  transition-all group-hover/basketCard:opacity-100 ">
        {deleteAction}
      </div>
      <div
        className={clsx(
          "text-sm absolute bottom-10 right-0 text-red-400 transition-all",
          isVisible ? "visible" : "invisible",
        )}
      >
        {errorText}
      </div>
    </div>
  );
};

export default BasketCardLayout;
