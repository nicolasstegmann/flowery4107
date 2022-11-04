import { useState } from "react"
import { createContext, useContext } from "react"

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    
    const removeProduct = (id) => {
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    }

    const addProduct = (productParm, qty) => {
        //debo controlar el stock
        if (qty > 0) {
            const element = cart.find(product => product.id === productParm.id)

            if(!element) return setCart([...cart, {...productParm, qty}])

            const newCart = cart.map((product) => {
                if (product.id === productParm.id) {
                return { ...product, qty: product.qty + qty };
                }
                return product;
            });
            setCart(newCart);
        }
    }

    const getCartQty = () => cart.reduce((acc, product) => acc + product.qty, 0)

    const getCartTotal = () => cart.reduce((acc, product) => acc + (product.price * product.qty), 0)

    const emptyCart = () => setCart([])

    const value = {
        cart,
        addProduct,
        removeProduct,
        getCartQty,
        getCartTotal,
        emptyCart
    }

    return <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
}