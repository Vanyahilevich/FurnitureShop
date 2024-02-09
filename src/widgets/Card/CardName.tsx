import React, { ReactNode } from "react";

const CardName = ({ children }: { children: ReactNode }) => {
  return <h2 className="font-light text-black text-xl">{children}</h2>;
};

export default CardName;
