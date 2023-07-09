import { useEffect, useState } from "react";

//4 - custom hook
export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [config, setConfig] = useState({});
  const [method, setMethod] = useState({});
  const [callFetch, setCallFetch] = useState({} as T);

  // 6 - Loading
  const [loading, setLoading] = useState(false);

  const httpConfig = (data: T, method: string) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

    setMethod(method);
  };

//   const getById = (id: string) => {
//     setLoading(true);
//     const getByIdUrl = `${url}/${id}`;

//     const fetchData = async () => {
//       try {
//         const res = await fetch(getByIdUrl);
//         const json = (await res.json()) as T;
//         setData([json]);
//         setLoading(false);
//       } catch (error) {
//         console.error("Erro ao buscar o produto:", error);
//         setLoading(false);
//       }
//     };

//     void fetchData();
//   };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = (await res.json()) as T;
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
        setLoading(false);
      }
    };

    void fetchData();
  }, [url, callFetch]);

  //5 refatorando Post
  useEffect(() => {
    const httpRequest = async () => {
      setLoading(true);
      if (method === "POST") {
        const res = await fetch(url, { ...config });
        const json = (await res.json()) as T;
        setCallFetch(json);
        setLoading(false);
      }
    };
    void httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading };
};
