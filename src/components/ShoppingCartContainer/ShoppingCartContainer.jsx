import { Button } from "../Button";
import { CardLoader } from "../CardLoader";
import "./ShoppingCartContainer.scss";
import { useCartContext } from "../../context/CartContext";
import { IconSelector } from "../IconSelector/IconSelector";
import { ShoppingCartProductCard } from "../ShoppingCartProductCard/ShoppingCartProductCard";
import { addOrder } from "../../api/orders";
import { bulkUpdateProductsStock } from "../../api/products";

export const ShoppingCartContainer = ({ loading }) => {
  const { cart, emptyCart, getCartTotal } = useCartContext();

  const handleCheckout = () => {
    console.log("Checkout en proceso");
    createOrder('Nicolás Stegmann', '+5493816091736', 'nicostegmann@gmail.com', cart)
  };

  const createOrder = async (buyerName, phone, email) => {
    
    const orderDate = new Date();

    const order = {
      buyer: {
        name: buyerName,
        phone: phone,
        email: email
      },
      date: orderDate,
      products: (cart.map((product) => {
        return {id: product.id, name: product.name, unitPrice: product.price, qty: product.qty, price: product.qty * product.price}
      })),
      total: getCartTotal()
    }

    const orderId = await addOrder(order);
    await bulkUpdateProductsStock(order.products)
    emptyCart()
    return orderId
    //TODO nuevo componemte para cargar datos de la orden: nombre, email y teléfono
    //TODO este nuevo componente debe llamar a esta función. Hay que sacarla de acá y moverla al nuevo.
    //TODO el correo pedirlo dos veces y controlar que sean iguales
    //TODO mostrar toast o modal con ID
    //TODO redirigir a home luego del toast o con un boton del modal
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
