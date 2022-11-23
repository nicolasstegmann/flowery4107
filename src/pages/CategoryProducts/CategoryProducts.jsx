import { ProductCardContainer } from "../../components/ProductCardContainer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../api/products";
import { OutletTitle } from "../../components/OutletTitle";
import { getCategory } from "../../api/categories";
import { ToastOffSet } from "../../components/Toast";

export const CategoryProducts = ({ title }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    setCategory();

    getCategory(categoryId)
      .then((category) => {
        setCategory(category);
      })
      .catch((error) => console.log(error));

    getProducts(categoryId)
      .then((products) => {
        (!products || products.length == 0) &&
          ToastOffSet(
            "No se encontraron productos para esta categoría en la base de datos",
            "error",
            5000
          );
        setProducts(products);
        setLoading(false);
      })
      .catch((e) => {
        ToastOffSet(
          `Ocurrió un error al obtener el producto de la base de datos (${e})`,
          "error",
          5000
        );
      });
  }, [categoryId]);

  return (
    <>
      {category ? <OutletTitle title={`${title} ${category?.name}`} /> : null}
      <ProductCardContainer products={products} loading={loading} />
    </>
  );
};
