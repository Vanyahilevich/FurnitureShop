import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import ProductCard from "../widgets/Card/product-card";
import { useQuery } from "@tanstack/react-query";
import ChangeToHorButton from "../shared/ChangeToHorButton";
import ChangeToGroupButton from "../shared/ChangeToGroupButton";
import clsx from "clsx";

interface IProductsLayoutProps {
  filter: ReactNode;
  display: ReactNode;
  pagination: ReactNode;
  products: ReactElement;
}

const ProductsLayout: FC<IProductsLayoutProps> = ({
  filter,
  display,
  pagination,
  products,
}) => {
  return (
    <div className="grid grid-cols-4 gap-8 w-full">
      <div className="col-span-1 flex flex-col gap-4">
        <div>Filters</div>
        {filter}
      </div>
      <div className=" col-span-3 flex flex-col gap-8 h-full">
        <div className="flex justify-end gap-3 min-h-8">{display}</div>
        <div className="flex flex-auto gap-3 flex-wrap">{products}</div>
        <div className="self-end flex  gap-3">{pagination}</div>
      </div>
    </div>
  );
};

export default ProductsLayout;
