const NavBarItem = ({itemName, itemHref}) => {
    return (
        <h3 className="header__nav-item hover-underline-animation"><a href={itemHref}>{itemName}</a></h3>
    )
}

export default NavBarItem