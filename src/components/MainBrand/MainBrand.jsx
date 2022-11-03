import { Link } from "react-router-dom";

export const MainBrand = () => {
    return (
        <Link to="/">
        <img src={require('../../img/floweryLogo.png')} className="header__logo" alt="4107 Flowery" />        
        </Link>
    )
}
