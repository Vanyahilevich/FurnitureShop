import clsx from "clsx";
import React, { ReactNode } from "react";

const CellPagination = ({
  activePage,
  children,
  onClick,
}: {
  activePage: boolean;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "text-2xl flex justify-center items-center transition-colors",
        "w-10 h-10 text-center ",
        activePage
          ? "text-gray-300 bg-darkBlueHover"
          : "text-lightBlue bg-gray-200",
        "hover:text-gray-100 hover:bg-lightBlue",
      )}
    >
      {children}
    </div>
  );
};

export default CellPagination;
