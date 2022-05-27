import { useState } from "react";


import ax from "../utils/axios";

export function getData(limit: number, offset: number) {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  return ax.get(url);
}

function formatData(data: any[]) {
  return data.map((item, index) => ({ ...item, index }))
}

export function usePokemons() {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<null | any>(null);
  const [isSuccess, setSuccess] = useState(false);
  const [isFetching, setFetching] = useState(true);
  const [data, setData] = useState<any>([]);

  getData(10, 0).then(
    response => {
      console.log(response);
      setSuccess(true);
      const formattedData = formatData(response.data.results);
      setData(formattedData);
    }
  ).catch(
    error => {
      console.error(error);
      setIsError(true);
      setError(error)
    }
  ).finally(
    () => setFetching(false)
  )

  return { isFetching, isSuccess, isError, error, data };
}