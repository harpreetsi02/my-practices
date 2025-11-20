const NavCenterItems = ({className = ""}) => {
    return(
        <div className={`${className}`}>
            <a href="#">Pricing</a>
            <a href="#">Docs</a>
            <a href="#">Changelog</a>
            <a href="#">Blog</a> 
            <a href="#">Login</a>
        </div>
    )
}

export default NavCenterItems