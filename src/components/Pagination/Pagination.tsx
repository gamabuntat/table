const Pagination = ({
  currentPage,
  pages,
  setPage,
}: {
  currentPage: number;
  pages: number;
  setPage: (page: number) => void;
}) => {
  return (
    <>
      <button
        type="button"
        aria-label="prev page button"
        onClick={() => setPage(Math.max(currentPage - 1, 1))}
      >
        -
      </button>
      {currentPage}
      <button
        type="button"
        aria-label="next page button"
        onClick={() => setPage(Math.min(currentPage + 1, pages))}
      >
        +
      </button>
    </>
  );
};

export default Pagination;
