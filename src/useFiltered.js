import { useEffect, useState } from "react";

export function useFilteredList(list, filterCallback) {
  const [filterText, setFilterText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    setFilteredList(list);
  }, [list, filterText, filterCallback]);
  return [filterText, setFilterText, filteredList];
}
