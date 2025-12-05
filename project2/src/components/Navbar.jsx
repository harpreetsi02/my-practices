import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout(){
        logout();
        navigate("/");
    }

    return(
        <nav className="p-3 border-b-2 border-gray-800">
            <Link className="m-3" to="/">Login</Link>
            <Link className="m-3" to="/dashboard">Dashboard</Link>
            <Link className="m-3" to="/user/:id">User Details</Link>

            <span className="float-right">
                {user ? (
                    <>
                        <strong className="mr-2">{user.name}</strong>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <em>Not Logged in</em>
                )} 
            </span>
        </nav>  
    )
}

export default Navbar