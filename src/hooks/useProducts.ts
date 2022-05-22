import { useState, useEffect } from "react";

export type ProductProps = {
  title: string;
  price: number;
  description: string;
  buy: (id: number) => void;
};

async function getData(): Promise<Omit<ProductProps, "buy">[]> {
  return Promise.resolve([
    {
      title: "Dummy 1",
      price: 1,
      description: "Lorem ispum",
    },
    {
      title: "Dummy 2",
      price: 1,
      description: "Lorem ispum",
    },
    {
      title: "Dummy 3",
      price: 1,
      description: "Lorem ispum",
    },
  ]);
}

export const useProducts = () => {
  const [products, setProducts] = useState<Omit<ProductProps, "buy">[]>([]);

  useEffect(() => {
    getData().then(
      (data) => setProducts(data)
    )
  }, []);

  return {
    products,
    isSuccess: true,
    isError: false,
    error: null,
  };
};

