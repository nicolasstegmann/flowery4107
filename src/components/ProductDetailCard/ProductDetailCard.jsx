import { Counter } from "../Counter";
import "./ProductDetailCard.scss"
import { useCartContext } from "../../context/CartContext";

export const ProductDetailCard = ({ id, name, category, stock, price, img }) => {

    const { addProduct } = useCartContext()

    const addToShoppingCart = (counter) => {
        addProduct({id, name, stock, price}, counter)
    }

    return (
        <div className="productDetailCard">
            <div className="productDetailCard__img">
                <img src={img} alt={name} />
            </div>
            <div className="productDetailCard__content">
                <div className="productDetailCard__name">{name}</div>
                <div className="productDetailCard__category">{category}</div>
                <div className="productDetailCard__price">AR${price}</div>
                {stock <= 5 ?
                    <div className="productDetailCard__stock__warning"> {stock > 0? `¡quedan ${stock} en stock!` : `Sin stock`}</div> :
                    <div className="productDetailCard__stock"> Stock: {stock}</div>}
                <Counter
                    stock ={stock}
                    buttonText = 'Agregar al carrito'
                    onButtonClick={addToShoppingCart}
                />
            </div>
        </div>
    );
  };

  