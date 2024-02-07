import React from 'react';
import Link from "./components/Link";
import ProductCard from "./widgets/Card/product-card";

const VTest = () => {
  return (
    <div>

      <ProductCard
        title={"Black lamps"}
        currency={"$"}
        price={268}
        src={"../../public/light.jpg"}
      />
    </div>
  );
};

export default VTest;
