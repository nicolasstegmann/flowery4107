import { Counter } from "../Counter";
import "./ProductDetailCard.scss"
import { useCartContext } from "../../context/CartContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductDetailCard = ({ id, name, category, stock, price, img }) => {

    const { addProduct, getCartError } = useCartContext()

    const addToShoppingCart = (counter) => {
        const msg = addProduct({id, name, stock, price}, counter)
        toast.error(msg)
    }

    return (
        <div className="productDetailCard">
            <div className="productDetailCard__img">
                <img src={img} alt={name} />
            </div>
            <div className="productDetailCard__content">
                <div className="productDetailCard__name">{name}</div>
                <div className="productDetailCard__category">{category}</div>
                <div className="productDetailCard__price">AR${price}</div>
                {stock <= 5 ?
                    <div className="productDetailCard__stock__warning"> {stock > 0? `¡quedan ${stock} en stock!` : `Sin stock`}</div> :
                    <div className="productDetailCard__stock"> Stock: {stock}</div>}
                <Counter
                    stock ={stock}
                    buttonText = 'Agregar al carrito'
                    onButtonClick={addToShoppingCart}
                />
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    theme="colored"                
                />
            </div>
        </div>
    );
  };

  