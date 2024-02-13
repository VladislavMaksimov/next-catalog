import { Pagination } from "react-bootstrap";

import { getMapPageNumber } from "./getMapPageNumber";

export const getPaginationItems = (
  currentPage: number,
  pagesCount: number,
  setPage: (page: number) => void,
) => {
  const onItemClick = (pageNumber: number) =>
    pageNumber === currentPage ? undefined : () => setPage(pageNumber);

  const mapPageNumber = getMapPageNumber(currentPage, onItemClick);

  if (pagesCount <= 5) {
    const pageNumbers = [];
    for (let i = 0; i <= pagesCount - 1; i += 1) pageNumbers.push(i);
    return <>{pageNumbers.map(mapPageNumber)}</>;
  }

  const penultimatePage = pagesCount - 2;
  const lastPage = pagesCount - 1;

  if (currentPage <= 4) {
    return (
      <>
        {[0, 1, 2, 3, 4, 5].map(mapPageNumber)}
        <Pagination.Ellipsis />
        <Pagination.Item
          active={currentPage === penultimatePage}
          onClick={onItemClick(penultimatePage)}
        >
          {penultimatePage + 1}
        </Pagination.Item>
        <Pagination.Item
          active={currentPage === lastPage}
          onClick={onItemClick(lastPage)}
        >
          {lastPage + 1}
        </Pagination.Item>
      </>
    );
  }

  if (currentPage >= lastPage - 4) {
    const pageNumbers = [];
    for (let i = lastPage - 5; i <= lastPage; i += 1) pageNumbers.push(i);
    return (
      <>
        <Pagination.Item onClick={onItemClick(0)}>1</Pagination.Item>
        <Pagination.Item onClick={onItemClick(1)}>2</Pagination.Item>
        <Pagination.Ellipsis />
        {pageNumbers.map(mapPageNumber)}
      </>
    );
  }

  return (
    <>
      <Pagination.Item onClick={onItemClick(0)}>1</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item onClick={onItemClick(currentPage - 1)}>
        {currentPage}
      </Pagination.Item>
      <Pagination.Item active>{currentPage + 1}</Pagination.Item>
      <Pagination.Item onClick={onItemClick(currentPage + 1)}>
        {currentPage + 2}
      </Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item onClick={onItemClick(lastPage)}>
        {lastPage + 1}
      </Pagination.Item>
    </>
  );
};
