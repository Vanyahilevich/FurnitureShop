import React, { ReactNode } from "react";

const CardPrice = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-xl font-light leading-tight text-lightBlue">
      {children}
    </h2>
  );
};

export default CardPrice;
