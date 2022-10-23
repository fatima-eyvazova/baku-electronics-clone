import { useRouter } from "next/router";

const CatalogProductPage = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <h1>Butun Category ---- {query.catalogProductType}</h1>
      <h2>Sub category ---- {query.catalogProducts}</h2>
      <p>Routun ichinde olanlari goturdum</p>
    </>
  );
};

export default CatalogProductPage;
