import { ProductCard } from "../ProductCard";
import { CardLoader } from "../CardLoader";
import "./ProductCardContainer.scss"

export const ProductCardContainer = ({ products, loading }) => {
  return (
      <div className="productCardContainer">
        {loading ? <CardLoader qty={5} /> : null}
        {products.map((product) => {
          return (
            <>
              <ProductCard
                key = {product.id}
                id = {product.id}
                name = {product.name}
                category = {product.category}
                tags = {product.tags}
                price = {product.price}
                img = {product.img}
                stock = {product.stock}
              />
            </>
          );
        })}
      </div>
  );
};