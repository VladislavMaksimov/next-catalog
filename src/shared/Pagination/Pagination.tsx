import { FC } from "react";
import { Pagination as RBPagination } from "react-bootstrap";

import { getPaginationItems } from "./utils/getPaginationItems";

interface PaginationProps {
  currentPage: number;
  pagesCount: number;
  canGoNext: boolean;
  canGoPrev: boolean;

  goPrevPage: VoidFunction;
  goNextPage: VoidFunction;
  setPage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  pagesCount,
  canGoNext,
  canGoPrev,
  goPrevPage,
  goNextPage,
  setPage,
}) => {
  return (
    <RBPagination>
      <RBPagination.First disabled={!canGoPrev} onClick={() => setPage(0)} />
      <RBPagination.Prev disabled={!canGoPrev} onClick={goPrevPage} />
      {getPaginationItems(currentPage, pagesCount, setPage)}
      <RBPagination.Next disabled={!canGoNext} onClick={goNextPage} />
      <RBPagination.Last
        disabled={!canGoNext}
        onClick={() => setPage(pagesCount - 1)}
      />
    </RBPagination>
  );
};
