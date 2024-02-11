import React, { ReactNode, useState } from "react";

const Tooltip = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="relative group/tooltip flex items-center justify-center">
      {children}
      <div
        className="invisible text-xs absolute top-full my-3 left-1/2 transform
         -translate-x-1/2 bg-gray-800 text-white py-1 px-3
          rounded whitespace-nowrap z-10
          group-hover/tooltip:visible
          "
      >
        {title}
      </div>
    </div>
  );
};

export default Tooltip;
