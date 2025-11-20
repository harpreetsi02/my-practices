const NavButton = ({className = ""}) => {
    return(
        <button className={`flex items-center gap-2 border border-gray-400 hover:border-gray-600 rounded py-1 px-4 ${className}`}>
            <i class="ri-at-fill text-2xl"></i>
            <span>Electron Developers</span>
            <i class="ri-arrow-right-line"></i>
        </button>
    )
}

export default NavButton