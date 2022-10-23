import { useRouter } from "next/router";

const DiscountDetailsPage = () => {
  const router = useRouter();
  const { product } = router.query;

  return <h1>Product {product}</h1>;
};

export default DiscountDetailsPage;
