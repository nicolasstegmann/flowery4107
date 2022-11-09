import { OutletTitle } from "../../components/OutletTitle";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getProduct } from '../../api/products'
import { ProductDetailCard } from "../../components/ProductDetailCard";
import { CardLoader } from "../../components/CardLoader";
import "./ProductDetail.scss"

export const ProductDetail = ({ title }) => {

  const { productId } = useParams();
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(productId).then((product) => {
      setProduct(product);
      setLoading(false)
    })
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <div className="productDetail">
      {product && <OutletTitle title={`${title} ${product?.name}`} />}
      <div className="productDetailLoaderContainer"> <CardLoader loading = {loading} qty={1} /></div>
      <div className="productDetailContainer">
        {product ?
          <ProductDetailCard
            id = {product.id}
            name = {product.name}
            category = {product.category.name}
            stock = {product.stock}
            price = {product.price}
            img = {product.img}
          />
          : null}
      </div>
    </div>
  );
};
