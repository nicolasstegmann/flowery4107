import "./CheckoutContainer.scss"
import { Button } from "../Button";
import { IconSelector } from "../IconSelector/IconSelector";
import { useCartContext } from "../../context/CartContext";
import { addOrder } from "../../api/orders";
import { bulkUpdateProductsStock } from "../../api/products";
import { useNavigate } from "react-router-dom";
import { ToastOffSet } from "../Toast";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInputLiveFeedback } from "../TextInputLiveFeedback";

export const CheckoutContainer = () => {
  const { cart, emptyCart, getCartTotal } = useCartContext();

  const navigate = useNavigate();

  const handleCheckout = (buyerName, phone, email) => {
    createOrder(buyerName, phone, email, cart);
  };

  const createOrder = async (buyerName, phone, email, cart) => {
    const orderDate = new Date();

    const order = {
      buyer: {
        name: buyerName,
        phone: phone,
        email: email,
      },
      date: orderDate,
      products: cart.map((product) => {
        return {
          id: product.id,
          name: product.name,
          unitPrice: product.price,
          qty: product.qty,
          price: product.qty * product.price,
        };
      }),
      total: getCartTotal(),
    };

    const orderId = await addOrder(order);
    await bulkUpdateProductsStock(order.products);
    emptyCart();
    ToastOffSet(
      `¡Felicidades! Generamos la orden ID ${orderId}. En instantes recibirás un e-mail con el detalle de la misma`,
      "success",
      15000
    );
    navigate("/");
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <div className="checkoutCard">
    <Formik
      initialValues={{
        buyerName: "",
        buyerPhone: "",
        buyerEmail: "",
        buyerEmailValid: "",
      }}
      validationSchema={Yup.object({
        buyerName: Yup.string()
          .max(40, "No se permiten más de 40 caracteres")
          .required("Debe ingresar su nombre y apellido"),
        buyerPhone: Yup.string()
          .matches(phoneRegExp, "El número de teléfono ingresado no es válido")
          .required("Debe ingresar su teléfono"),
        buyerEmail: Yup.string()
          .email("El e-mail ingresado no es válido")
          .required("Debe ingresar su e-mail"),
        buyerEmailValid: Yup.string()
          .oneOf([Yup.ref("buyerEmail"), null], "El e-mail no coincide")
          .required("Debe ingresar su e-mail por segunda vez"),
      })}
      onSubmit={({ buyerName, buyerPhone, buyerEmail }) =>
        handleCheckout(buyerName, buyerPhone, buyerEmail)
      }
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <TextInputLiveFeedback
            label="Nombre y apellido"
            id="buyerName"
            name="buyerName"
            helpText="Hasta 40 caracteres."
            placeholder="Nombre y apellido"
            type="text"
          />
          <TextInputLiveFeedback
            label="Teléfono"
            id="buyerPhone"
            name="buyerPhone"
            helpText="Ej.: 1147889655"
            placeholder="Teléfono"
            type="text"
          />
          <TextInputLiveFeedback
            label="e-mail"
            id="buyerEmail"
            name="buyerEmail"
            helpText="Ej.: persona@dominio.com"
            placeholder="e-mail"
            type="text"
          />
          <TextInputLiveFeedback
            label="Reingrese su e-mail"
            id="buyerEmailValid"
            name="buyerEmailValid"
            helpText="Ej.: persona@dominio.com"
            placeholder="e-mail"
            type="text"
          />
          <div className="checkoutCard__button">
            <Button
              type={"submit"}
              className="button"
              leftIcon={<IconSelector icon={"send"} />}
            >
              {"Finalizar compra"}
            </Button>
          </div>
        </form>
      )}
    </Formik>
    </div>
  );
};
