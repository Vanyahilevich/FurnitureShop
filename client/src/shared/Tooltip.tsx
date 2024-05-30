import clsx from "clsx";
import React, { ReactNode, useState } from "react";

const Tooltip = ({
  children,
  title,
  direction,
  left,
}: {
  children: ReactNode;
  title: string;
  direction?: "top" | "bottom";
  left?: boolean;
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
          `invisible text-xs absolute  my-3  transform
          -translate-x-1/2 bg-gray-800 text-white py-1 px-2
          rounded whitespace-nowrap z-20
          group-hover/tooltip:visible
          `,
          left ? "-left-full" : "left-1/2",
          mapDirection[direction || "bottom"],
        )}
      >
        {title}
      </div>
    </div>
  );
};

export default Tooltip;
