import { NavLink } from "react-router-dom";

export const NavBarItem = ({ category }) => {
    return (
        <NavLink
            className={({ isActive }) => (isActive ? "header__nav-item header__nav-item_underline" : "header__nav-item hover-underline-animation")}
            to={category.id ? `/category/${category.id}` : '/store'}
        >
            <h3>
                {category.name}
            </h3>
        </NavLink>
    )
}
