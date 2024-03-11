export const generatePaginationPages = (
  totalPages: number,
  currentPage: number,
  adjacentPages = 1,
) => {
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
  return pages;
};
