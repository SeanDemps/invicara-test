import { useState, useEffect } from "react";

const fetchData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(url)
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log("error", e); // log this to a service like Sentry
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
