import clsx from "clsx";
import React, { ReactNode, useState } from "react";

const Tooltip = ({
  children,
  title,
  direction,
}: {
  children: ReactNode;
  title: string;
  direction?: "top" | "bottom";
}) => {
  const mapDirection = {
    top: "bottom-full",
    bottom: "top-full",
  };

  return (
    <div className="relative group/tooltip flex items-center justify-center">
      {children}
      <div
        className={clsx(
          `invisible text-xs absolute  my-3 left-1/2 transform
         -translate-x-1/2 bg-gray-800 text-white py-1 px-3
          rounded whitespace-nowrap z-20
          group-hover/tooltip:visible
          `,
          mapDirection[direction || "bottom"],
        )}
      >
        {title}
      </div>
    </div>
  );
};

export default Tooltip;
