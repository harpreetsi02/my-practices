import NavButton from "./NavButton"
import NavCenterItems from "./NavCenterItems"
import NavLogo from "./NavLogo"

const SideBar = ({handleClick}) => {
    return(
        <div id='nav-dialog' className='hidden fixed inset-0 py-2 md:py-4 px-10 bg-white shadow lg:hidden'>
            <div className='flex justify-between'>
                <NavLogo/>
                <button onClick={handleClick}>
                    <i class="ri-close-line text-2xl"></i>
                </button> 
            </div>
            <NavCenterItems className="text-xl flex flex-col mt-10 mx-8 gap-8"></NavCenterItems>
            <div className='w-full border border-gray-200 rounded-4xl my-8'></div>
            <NavButton/>
        </div>
    )
}

export default SideBar