import { useNavigate } from "react-router-dom";
import "./ProductCard.scss"
import { Tag } from "../Tag";

export const ProductCard = ({id, name, category, tags, price, img, stock}) => {
  const navigate = useNavigate();
  return (
    <div className="productCard" onClick={() => navigate(`/product/${id}`)}>
      <div className="productCard__img">
        <img src={img} alt={name} />
      </div>
      <div className="productCard__content">
        <div className="productCard__name">{name}</div>
        <div className="productCard__category">{category.name}</div>
        <div className="productCard__price">AR${price}</div>
        {stock <= 5 ? <div className="productCard__stock"> {stock > 0? `¡quedan ${stock} en stock!` : `Sin stock`}</div> : null}
      </div>
      <div className="productCard__tags">
        {tags.sort().map((tag, index) => {
          return (
            <>
            <Tag
            key = {index}
            text = {tag}/>
            </>
          );
        })}
        
      </div>
    </div>
  );
};