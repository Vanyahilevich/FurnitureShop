import React, { FC, useEffect, useState } from "react";
import CellPagination from "./cell-pagination";
import { generatePaginationPages } from "./generatePaginationPages";

interface IPaginationProps {
  currentPage: number;
  totalPages: number | undefined;
  onPageChange: (page: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [pagesToShow, setPagesToShow] = useState<number[]>([]);

  useEffect(() => {
    if (totalPages && currentPage) {
      const pages = generatePaginationPages(totalPages, currentPage);
      setPagesToShow(pages);
    }
  }, [currentPage, totalPages]);

  return (
    <ul className="flex gap-2 items-end">
      {pagesToShow.map((page) => (
        <CellPagination
          key={page}
          activePage={currentPage === page}
          emptyCell={page === 0}
          onClick={() => onPageChange(page)}
        >
          {page}
        </CellPagination>
      ))}
    </ul>
  );
};
export default Pagination;
