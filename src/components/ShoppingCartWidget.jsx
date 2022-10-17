import { IconContext } from "react-icons";
import { FiShoppingCart } from "react-icons/fi";

const ShoppingCartWidget = ({shoppingCartQty}) => {

  let iconStyle = { backgroundColor: "white", color: "blue"};

    return (
        <IconContext.Provider value={{ style: {iconStyle}}}>
        <div className = "header__buttons"> <button> <FiShoppingCart /> {shoppingCartQty}</button> </div>
        </IconContext.Provider>
      )
}

export default ShoppingCartWidget