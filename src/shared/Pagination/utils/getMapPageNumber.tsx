import { Pagination } from "react-bootstrap";

export const getMapPageNumber = (
  currentPage: number,
  onItemClick: (pageNumber: number) => (() => void) | undefined,
) =>
  function mapPageNumber(pageNumber: number) {
    return (
      <Pagination.Item
        key={pageNumber}
        active={currentPage === pageNumber}
        onClick={onItemClick(pageNumber)}
      >
        {pageNumber + 1}
      </Pagination.Item>
    );
  };
