import { Pagination } from "react-bootstrap";

export const getPaginationItems = (
  currentPage: number,
  pagesCount: number,
  setPage: (page: number) => void
) => {
  const onItemClick = (pageNumber: number) =>
    pageNumber === currentPage ? undefined : () => setPage(pageNumber);

  if (pagesCount <= 4) {
    const pageNumbers = [];
    for (let i = 0; i <= pagesCount - 1; i += 1) pageNumbers.push(i);
    return (
      <>
        {pageNumbers.map((pageNumber) => (
          <Pagination.Item
            key={pageNumber}
            active={currentPage === pageNumber}
            onClick={onItemClick(pageNumber)}
          >
            {pageNumber + 1}
          </Pagination.Item>
        ))}
      </>
    );
  }

  const penultimatePage = pagesCount - 2;
  const lastPage = pagesCount - 1;

  if (currentPage <= 1 || currentPage >= pagesCount - 2) {
    return (
      <>
        <Pagination.Item active={currentPage === 0} onClick={onItemClick(0)}>
          1
        </Pagination.Item>
        <Pagination.Item active={currentPage === 1} onClick={onItemClick(1)}>
          2
        </Pagination.Item>
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

  return (
    <>
      <Pagination.Item onClick={onItemClick(0)}>1</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item active>{currentPage + 1}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item onClick={onItemClick(lastPage)}>
        {lastPage + 1}
      </Pagination.Item>
    </>
  );
};
