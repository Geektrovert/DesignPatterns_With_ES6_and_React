import React from "react";

type ProductProps = {
  title: string;
  price: number;
  description: string;
  buy: () => void;
};

const Product: React.FC<ProductProps> = ({
  title,
  price,
  description,
  buy,
}) => {
  return (
    <>
      <h1 style={{ color: "red" }}>{title}</h1>
      <p>{description}</p>

      <h3>{price}</h3>
      <button onClick={buy}>Buy</button>
    </>
  );
};

export default Product;
