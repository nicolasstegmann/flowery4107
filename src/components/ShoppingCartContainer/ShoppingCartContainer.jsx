import { Button } from "../Button";
import { CardLoader } from "../CardLoader";
import "./ShoppingCartContainer.scss";
import { useCartContext } from "../../context/CartContext";
import { IconSelector } from "../IconSelector/IconSelector";
import { ShoppingCartProductCard } from "../ShoppingCartProductCard/ShoppingCartProductCard";
import { NavLink } from "react-router-dom";

export const ShoppingCartContainer = ({ loading }) => {
  const { cart, emptyCart, getCartTotal } = useCartContext();

  const handleEmptyCart = () => {
    emptyCart();
  };

  return (
    <div className="ShoppingCartContainer">
      <CardLoader loading={loading} qty={1} />
      <div className="ShoppingCartContainer__list">
        {cart.map((product) => {
          return (
            <ShoppingCartProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              qty={product.qty}
              price={product.price}
              img={product.img}
            />
          );
        })}
      </div>
      <div className="ShoppingCartContainer__total">
        {" "}
        Total{" "}
        <span className="ShoppingCartContainer__total-bold">
          ${getCartTotal()}
        </span>
      </div>
      <div className="ShoppingCartContainer__button">
        <NavLink to={'/checkout'} >
          <Button
            className="button"
            leftIcon={<IconSelector icon={"cart"} />}
          >
            {"Check Out"}
          </Button>
        </NavLink>
        <Button
          onClick={() => handleEmptyCart()}
          className="button"
          leftIcon={<IconSelector icon={"trash"} />}
        >
          {"Vaciar Carrito"}
        </Button>
      </div>
    </div>
  );
};
