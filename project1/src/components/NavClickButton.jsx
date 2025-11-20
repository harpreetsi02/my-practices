const NavClickButton = ({handleClick}) => {
    return(
        <button className='lg:hidden' onClick={handleClick}>
            <i class="ri-menu-line text-2xl"></i>
        </button>
    )
}

export default NavClickButton