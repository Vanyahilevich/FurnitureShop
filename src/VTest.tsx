import React from 'react';
import ProductCard from "./widgets/Card/product-card";
import {resetFilter, updateFilter} from "./features/filter/filter-slice";
import {RootState, useAppDispatch, useAppSelector} from "./store";

const VTest = () => {

  const filter = useAppSelector((state:RootState) => state.filter)
  const dispatch = useAppDispatch()
  const handleUpdateFilter = () => {
      dispatch(updateFilter({age: 2, name: "sdas",  }));
  };
  const handleResetFilter = () => {
    dispatch(resetFilter());
  };
  return <div>

    <ProductCard
      title={"Black lamps"}
      currency={"$"}
      price={268}
      src={"../../public/light.jpg"}
    />
    <button onClick={handleUpdateFilter}>Click me</button>
    <button onClick={handleResetFilter}>reset</button>
    <div>{filter.age}</div>
    <div>12 - {filter.name}</div>
    <div>11 - {filter.geiht}</div>
  </div>;
};

export default VTest;
