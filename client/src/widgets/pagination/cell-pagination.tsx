import clsx from "clsx";
import React, { ReactNode } from "react";

const CellPagination = ({
  activePage,
  children,
  emptyCell,
  onClick,
}: {
  activePage: boolean;
  children: ReactNode;
  emptyCell: boolean;
  onClick: () => void;
}) => {
  if (emptyCell) {
    return <div>...</div>;
  }
  return (
    <li
      onClick={onClick}
      className={clsx(
        "text-lg flex justify-center items-center transition-colors cursor-pointer",
        "w-9 h-9 text-center ",
        activePage
          ? "text-gray-300 bg-darkBlueHover"
          : "text-lightBlue bg-gray-200",
        "hover:text-gray-100 hover:bg-lightBlue",
      )}
    >
      {children}
    </li>
  );
};

export default CellPagination;
