export function PaginationControl({
  pageIndex,
  backPage,
  nextPage,
  totalPages
}) {
  return (
    <>
      <button disabled={pageIndex === 0} onClick={backPage}>
        Back
      </button>
      <span>
        {" "}
        Page {pageIndex + 1} of {totalPages}{" "}
      </span>
      <button disabled={pageIndex === totalPages - 1} onClick={nextPage}>
        Next
      </button>
    </>
  );
}
