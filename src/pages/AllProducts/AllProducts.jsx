//import { useRouteLoaderData } from "react-router-dom"; //no funciona. Consultar en after
import { ProductCardContainer } from "../../components/ProductCardContainer";
import { useState, useEffect } from 'react'
import { getProducts } from '../../api/products'
import { OutletTitle } from "../../components/OutletTitle";

export const AllProducts = ({title}) => {
  /*
  const products = useRouteLoaderData("allProducts");
  if(!products) {
    console.log('Vacio')
    return null
  };
  */ //no funciona. Consultar en after

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setProducts([]);
      setLoading(true);
      getProducts()
        .then((products) => {
          setProducts(products);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
      <>
        <OutletTitle title = {title}/>
        <ProductCardContainer
          key = "0"
          products = {products}
          loading = {loading} 
        />
      </>
    );
  };