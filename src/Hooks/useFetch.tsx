import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    setIsLoading(true);
    setOptions(options);
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    const fetchData = async () => {
      try {
        const res: AxiosResponse = await axios(url, options);
        setResponse(res.data);
      } catch (err: AxiosError | any) {
        const error =
          err instanceof AxiosError ? err.response?.data : "Server error";
        setError(error);
      }
    };
    fetchData();
    setIsLoading(false);
  }, [isLoading, url, options]);

  return [{ response, error, isLoading }, doFetch];
};
export default useFetch;
