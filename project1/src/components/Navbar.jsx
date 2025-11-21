import 'remixicon/fonts/remixicon.css'
import NavLogo from './NavLogo';
import SideBar from './SideBar';
import NavButton from './NavButton';
import NavCenterItems from './NavCenterItems';
import NavClickButton from './NavClickButton';

const Navbar = () => {
    const navDialog = document.getElementById('nav-dialog');
    const handleClick = () => { 
        navDialog.classList.toggle('hidden');
    } 

    return(
        <nav className='w-full py-2 px-10 flex items-center justify-between shadow'>
            <NavLogo/>
            <NavCenterItems className='text-sm hidden lg:flex gap-10 font-medium'></NavCenterItems>
            <NavButton className='hidden lg:flex'></NavButton>
            <NavClickButton handleClick={handleClick}/>
            <SideBar handleClick={handleClick}/>
        </nav>
    )
}

export default Navbar