import React, { FC, ReactNode, useEffect } from "react";
import ProductCard from "../widgets/Card/product-card";
import { useQuery } from "@tanstack/react-query";
import ChangeToHorButton from "../shared/ChangeToHorButton";
import ChangeToGroupButton from "../shared/ChangeToGroupButton";
import clsx from "clsx";

interface IProductsLayoutProps {
  filter: ReactNode;
  display: ReactNode;
  pagination: ReactNode;
  products: ReactNode;
}

const ProductsLayout: FC<IProductsLayoutProps> = ({
  filter,
  display,
  pagination,
  products,
}) => {
  return (
    <div className="flex gap-8 w-full">
      <div className="flex flex-col w-1/4 gap-5 transition-all">
        <div>Filters</div>
        {filter}
      </div>
      <div className="flex flex-col gap-8 w-3/4">
        <div className="flex-1 flex justify-end gap-3">{display}</div>
        <div className="flex flex-auto gap-8 flex-wrap">{products}</div>
        <div className="self-end flex  gap-3">{pagination}</div>
      </div>
    </div>
  );
};

export default ProductsLayout;
