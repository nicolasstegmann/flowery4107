import { useCartContext } from "../../context/CartContext";
import { IconSelector } from "../IconSelector";

export const ShoppingCartWidget = ({shoppingCartQty}) => {

    const {getCartQty, emptyCart} = useCartContext()

    return (
        <div className = "header__buttons" onClick={() => emptyCart()}> <button>  <IconSelector icon = "cart"/> {getCartQty()}</button> </div>
      )
}