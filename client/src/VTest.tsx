import React from "react";
import ProductCard from "./widgets/Card/product-card";
import { resetFilter, updateFilter } from "./features/filter/filter-slice";
import { useAppDispatch } from "./store";
import UIButton from "./ui-kit/UIButton";

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
      <UIButton size="lg" variant={"details"}>
        Details
      </UIButton>
      <UIButton size={"lg"} variant={"pay"}>
        Pay
      </UIButton>
      <UIButton size={"sm"} variant={"subscribe"}>
        Subscribe
      </UIButton>
      <UIButton size={"lg"} variant={"add"}>
        Add
      </UIButton>
    </>
  );
};

export default VTest;
