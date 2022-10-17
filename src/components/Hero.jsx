const Hero = ({title, text, button, href}) => {
    return (
    <div className = "hero">
        <div className = "hero__BigText">{title}</div>
        <div>{text}</div>
        <div className = "hero__Button"><a href={href}>{button}</a></div>
    </div>
    )
}

export default Hero