import { ShoppingCartContainer } from "../../components/ShoppingCartContainer";
import { useState, useEffect } from 'react'
import { OutletTitle } from "../../components/OutletTitle";
import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

export const ShoppingCart = ({title}) => {

    const {cart, getCartQty} = useCartContext()

    const [shoppedProducts, setShoppedProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setShoppedProducts([]);
      setLoading(true);
      setShoppedProducts(cart)
      setLoading(false);
    }, [shoppedProducts]);

    return (
       <>
        {!getCartQty()
          ? (
            <NavLink to={'/store'} >
              <OutletTitle title = {'¡Tu carrito está vacío! Haz click acá para comenzar a comprar'}/>
            </NavLink>
          )
          : (
          <>
            <OutletTitle title = {title}/>
            <ShoppingCartContainer
              loading = {loading} 
            />
          </>          
          )
        }
       </>
    );
  };