import React, { FC, useEffect, useState } from "react";
import CellPagination from "./CellPagination";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [pagesToShow, setPagesToShow] = useState<number[]>([]);

  useEffect(() => {
    const generatePagesToShow = () => {
      const adjacentPages = 1;
      const startPage = Math.max(1, currentPage - adjacentPages);
      const endPage = Math.min(totalPages, currentPage + adjacentPages);
      const pages = [];

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (pages[0] >= 1 + adjacentPages) {
        if (pages[0] === 1 + adjacentPages) {
          pages.unshift(1);
        } else {
          pages.unshift(1, 0);
        }
      }
      if (pages[pages.length - 1] <= totalPages - adjacentPages) {
        if (pages[pages.length - 1] === totalPages - adjacentPages) {
          pages.push(totalPages);
        } else {
          pages.push(0, totalPages);
        }
      }
      setPagesToShow([...pages]);
    };

    generatePagesToShow();
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
