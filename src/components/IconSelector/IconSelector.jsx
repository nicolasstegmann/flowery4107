import { FiShoppingCart, FiBell, FiClock } from "react-icons/fi";

export const IconSelector = ({icon}) => {
    const iconMap = {
        cart: FiShoppingCart,
        alert: FiBell,
        clock: FiClock
    }

    if(!icon || !iconMap[icon]) return null;

    if(typeof iconMap[icon] !== undefined) {
        const Icon = iconMap[icon];
        return <Icon />
    }
}