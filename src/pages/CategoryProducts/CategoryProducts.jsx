import { ProductCardContainer } from "../../components/ProductCardContainer";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getProducts } from '../../api/products'
import { OutletTitle } from "../../components/OutletTitle";
import { getCategory } from "../../api/categories";

export const CategoryProducts = ({title}) => {
    const { categoryId } = useParams(); 
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState({})
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
          setProducts(products);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }, [categoryId]);

    return (
      <>
        {category? <OutletTitle title = {`${title} ${category?.name}`}/> : null }
        <ProductCardContainer 
          products = {products}
          loading = {loading} 
        />
      </>
    );
  };