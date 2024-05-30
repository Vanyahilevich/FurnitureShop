import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import ProductCard from "../../widgets/product-card/product-card";
import { useQuery } from "@tanstack/react-query";
import ChangeToHorButton from "../../shared/horiz-view-button";
import ChangeToGroupButton from "../../shared/vertical-view-button";
import clsx from "clsx";
import { ProductCardSkeleton } from "src/widgets/product-card/product-card-skeleton";

interface IProductsLayoutProps {
  filter: ReactNode;
  display: ReactNode;
  pagination: ReactNode;
  products: ReactElement;
  resetButton: ReactElement;
  hasNotProducts: boolean;
  isPlaceholderData: boolean;
}

const ProductsLayout: FC<IProductsLayoutProps> = ({
  filter,
  display,
  pagination,
  products,
  resetButton,
  hasNotProducts,
  isPlaceholderData,
}) => {
  return (
    <div className="grid grid-cols-4 gap-8 w-full">
      <div className="lg:col-span-1">
        <div className="hidden lg:flex lg:flex-col gap-y-4 ">
          <span className="font-primaryFont text-4xl">Filters</span>
          {filter}
          <div className="flex self-end items-center gap-2">{resetButton}</div>
        </div>
      </div>
      <div className="col-span-4 lg:col-span-3 flex flex-col gap-4 lg:gap-8 h-full">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:gap-6 lg:hidden">
          {filter}
          <div className="flex  self-start  gap-2">{resetButton}</div>
        </div>
        <div className="flex justify-end gap-3 min-h-8">{display}</div>
        {hasNotProducts && (
          <div className="text-3xl flex flex-auto items-center justify-center">
            Not Found Products
          </div>
        )}

        <div
          className={clsx(
            isPlaceholderData && "opacity-50",
            "flex flex-auto gap-3 flex-wrap",
          )}
        >
          {products}
        </div>
        <div className="self-end flex  gap-3">{pagination}</div>
      </div>
    </div>
  );
};

export default ProductsLayout;
