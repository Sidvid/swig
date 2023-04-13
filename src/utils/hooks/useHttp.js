import { useState, useCallback } from "react";
//use this custom hook for API calling 
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const fetchData = useCallback(async ({ url, body, method = "GET"}) => {
    try {
      setIsLoading(true);
      const resp = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method,
        body,
      });

      const response = await resp.json();

      if (resp.status === 200 || resp.status === 201) {
        setData(response);
      } else {
        setError(response);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    data,
    error,
    fetchData,
  };
};
export default useHttp;
