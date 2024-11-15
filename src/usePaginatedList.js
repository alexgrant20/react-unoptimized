import { useEffect, useState } from "react";

export function usePaginatedList(list, paginationSize = 1000) {
  const [pageIndex, setPageIndex] = useState(0);
  const [paginatedList, setPaginatedList] = useState();

  useEffect(() => {
    setPaginatedList(list);
  }, [list]);

  const nextPage = () => {
    // Calculate the last page and makes sure the pageIndex
    // doesn't go out of that boundary
  };
  const backPage = () => {};
  return [
    nextPage,
    backPage,
    pageIndex,
    Math.ceil(list.length / paginationSize),
    paginatedList,
  ];
}
