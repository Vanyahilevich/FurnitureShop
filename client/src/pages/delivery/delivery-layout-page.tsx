import React, { ReactNode } from "react";

const DeliveryLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col flex-auto items-center">
      <div className="flex flex-wrap  w-full">{children}</div>
    </div>
  );
};

export default DeliveryLayoutPage;
