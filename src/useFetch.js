import { useState, useEffect } from "react";

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then((books) => {
          setData(books);
          setLoading(false);
        });
    }, 600);
  }, [url]);
  return [loading, data];
}
