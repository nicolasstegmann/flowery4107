import { useCartContext } from "../../context/CartContext";
import { IconSelector } from "../IconSelector";
import { Link } from "react-router-dom";

export const ShoppingCartWidget = ({shoppingCartQty}) => {

    const {getCartQty} = useCartContext()

    return (
        <Link to="/shoppingcart">
          <div className = "header__buttons" > <button>  <IconSelector icon = "cart"/> {getCartQty()}</button> </div>
        </Link>
      )
}