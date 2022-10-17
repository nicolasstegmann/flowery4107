import NavBarItem from './NavBarItem';

const NavBar = () => {
    const navBarItems = [
        {
            itemName: 'Bulbos',
            itemHref: '#'
        },
        {
            itemName: 'Rizomas',
            itemHref: '#'
        },
        {
            itemName: 'Semillas',
            itemHref: '#'
        }
    ]

    return (
        <div className="header__nav">
            {
            navBarItems.map((navBarItem) => (  
                <NavBarItem
                itemName = {navBarItem.itemName}
                itemHref = {navBarItem.itemHref}
                />
            ))
            }
        </div>
    )
}

export default NavBar