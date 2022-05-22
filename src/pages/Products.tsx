import Product from "../components/Product";
import { useProducts } from "../hooks/useProducts";

type ProductProps = {
  title: string;
  price: number;
  description: string;
  buy: () => void;
};

export default function Products() {
  const { products } = useProducts();

  function buy(product: Omit<ProductProps, "buy">) {
    console.log(product);
  }

  return (
    <>
      {products.map((product) => (
        <Product key={product.title} {...product} buy={() => buy(product)} />
      ))}
    </>
  );
}
