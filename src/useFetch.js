import { useState, useEffect } from "react";

// custom hook must name as useSmthing
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        }) // return response as json object
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        }) // take as input of the last .then
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 500);
  }, [url]); // fires on load and when url changes

  return { data, isPending, error };
};

export default useFetch;
