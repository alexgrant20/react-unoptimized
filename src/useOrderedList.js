import { useEffect, useState } from "react";
export function useOrderedList(list, sortingCallback) {
  const [sortingField, setSortingFiled] = useState("");
  const [sortedList, setSortedList] = useState([]);
  useEffect(() => {
    setSortedList(list);
  }, [list]);
  return [sortingField, setSortingFiled, sortedList];
}
