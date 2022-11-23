import { FiShoppingCart, FiBell, FiClock, FiDelete, FiTrash2, FiSend } from "react-icons/fi";

export const IconSelector = ({icon}) => {
    const iconMap = {
        cart: FiShoppingCart,
        alert: FiBell,
        clock: FiClock,
        delete: FiDelete,
        trash: FiTrash2,
        send: FiSend
    }

    if(!icon || !iconMap[icon]) return null;

    if(typeof iconMap[icon] !== undefined) {
        const Icon = iconMap[icon];
        return <Icon />
    }
}