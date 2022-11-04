import { IconContext } from "react-icons";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../../context/CartContext";

export const ShoppingCartWidget = ({shoppingCartQty}) => {

  let iconStyle = { backgroundColor: "white", color: "blue"};

    const {getCartQty, emptyCart} = useCartContext()

    return (
        <IconContext.Provider value={{ style: {iconStyle}}}>
        <div className = "header__buttons" onClick={() => emptyCart()}> <button> <FiShoppingCart /> {getCartQty()}</button> </div>
        </IconContext.Provider>
      )
}