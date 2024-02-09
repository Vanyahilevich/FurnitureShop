import React from "react";
import ProductCard from "./widgets/Card/product-card";
import { resetFilter, updateFilter } from "./features/filter/filter-slice";
import { useAppDispatch } from "./store";

const VTest = () => {
  const dispatch = useAppDispatch();
  const handleUpdateFilter = () => {
    dispatch(updateFilter({ age: 2, name: "sdas" }));
  };
  const handleResetFilter = () => {
    dispatch(resetFilter());
  };
  return (
    <>
      <ProductCard
        title={"Black lamps"}
        currency={"$"}
        price={268}
        src={"/light.jpg"}
      />
      <ProductCard
        title={"Black lamps"}
        currency={"$"}
        price={268}
        src={"/light.jpg"}
      />
    </>
  );
};

export default VTest;
