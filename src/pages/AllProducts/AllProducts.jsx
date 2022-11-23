//import { useRouteLoaderData } from "react-router-dom"; //no funciona. Consultar en after
import { ProductCardContainer } from "../../components/ProductCardContainer";
import { useState, useEffect } from "react";
import { getProducts } from "../../api/products";
import { OutletTitle } from "../../components/OutletTitle";
import { ToastOffSet } from "../../components/Toast";

export const AllProducts = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts()
      .then((products) => {
        (!products || products.length == 0) &&
          ToastOffSet(
            "No se encontraron productos en la base de datos",
            "error",
            5000
          );
        setProducts(products);
        setLoading(false);
      })
      .catch((e) => {
        ToastOffSet(
          `Ocurrió un error al obtener los productos de la base de datos (${e})`,
          "error",
          5000
        );
      });
  }, []);

  return (
    <>
      <OutletTitle title={title} />
      <ProductCardContainer products={products} loading={loading} />
    </>
  );
};
