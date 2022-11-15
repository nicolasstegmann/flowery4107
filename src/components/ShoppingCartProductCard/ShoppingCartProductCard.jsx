import "./ShoppingCartProductCard.scss";
import { Button } from "../Button";
import { IconSelector } from "../IconSelector/IconSelector";
import { useCartContext } from "../../context/CartContext";


export const ShoppingCartProductCard = ({ id, name, qty, price, img }) => {

    const {removeProduct} = useCartContext()

    const handleDelete = (id) => {
        removeProduct(id);
    }

    return (
        <div className="ShoppingCartProductCard">
            <div className="ShoppingCartProductCard__img">
                <img src={img} alt={name} />
            </div>
            <div className="ShoppingCartProductCard__description"> {`${qty} ${name} ($${price})`} </div>
            <div className="ShoppingCartProductCard__subtotal"> {`$${price * qty}`} </div>
            <div className="ShoppingCartProductCard__button">
                <Button
                    onClick={() => handleDelete(id)}
                    className="button"
                    leftIcon={<IconSelector icon = {'trash'}/>}
                />
            </div>
        </div>
    )
}