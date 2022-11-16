import { Button } from "../Button";
import { CardLoader } from "../CardLoader";
import "./ShoppingCartContainer.scss";
import { useCartContext } from "../../context/CartContext";
import { IconSelector } from "../IconSelector/IconSelector";
import { ShoppingCartProductCard } from "../ShoppingCartProductCard/ShoppingCartProductCard";

export const ShoppingCartContainer = ({ loading }) => {
  const { cart, emptyCart, getCartTotal } = useCartContext();

  const handleCheckout = () => {
    console.log("Checkout en proceso");
    createOrder('Nicolás Stegmann', '+5493816091736', 'nicostegmann@gmail.com', cart)
  };

  const createOrder = (name, phone, email) => {
    
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: email
      },
      products: (cart.map((product) => {
        const obj = {id: product.id, name: product.name, unitPrice: product.price, qty: product.qty, price: product.qty * product.price} 
        return obj
      } )),
      total: getCartTotal()
    }

    console.log(order)
    return order;
  }

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
      <div className="ShoppingCartContainer__botton">
        <Button
          onClick={() => handleCheckout()}
          className="button"
          leftIcon={<IconSelector icon={"cart"} />}
        >
          {"Check Out"}
        </Button>
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
