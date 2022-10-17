import MainBrand from './MainBrand';
import NavBar from './NavBar';
import ShoppingCartWidget from './ShoppingCartWidget';

const Header = () => {
    return (
        <header className="header">
        <MainBrand />
        <NavBar />
        <ShoppingCartWidget shoppingCartQty = {0}/>
      </header>
    )
}

export default Header