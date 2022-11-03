import { Link } from "react-router-dom";

export const Hero = ({ title, text, button, targetPath }) => {
    return (
        <div className="hero">
            <div className="hero__BigText">{title}</div>
            <div>{text}</div>
            <Link to={targetPath}>
                <div className="hero__Button">
                    {button}
                </div>
            </Link>
        </div>
    )
}
