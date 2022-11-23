import "./Checkout.scss"
import { OutletTitle } from "../../components/OutletTitle";
import { CheckoutContainer } from "../../components/CheckoutContainer";
import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

export const Checkout = ({ title }) => {
  const { getCartQty } = useCartContext();

  return (
    <>
      {!getCartQty() ? (
        <NavLink to={"/store"}>
          <OutletTitle
            title={
              "¡Tu carrito está vacío! Haz click acá para comenzar a comprar"
            }
          />
        </NavLink>
      ) : (
        <>
          <OutletTitle title={title} />
          <div className="checkoutContainer">
            <CheckoutContainer />
          </div>
        </>
      )}
    </>
  );
};
