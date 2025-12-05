import { useState, useContext } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {login, user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    if(user){
        navigate("/dashboard", {replace: true});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!username.trim()){
            alert("Enter a username");
            return;
        }
        login(username.trim());

        const from = location.state?.from?.pathname || "/dashboard";
        navigate(from, {replace: true});
    }


    return(
        <div className="p-6">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="max-w-80">
                <div className="m-2">
                    <label>Username</label>
                    <input 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text" 
                        className="w-full p-2"
                        placeholder="Enter Your Name..."
                        />
                </div>

                <div className="m-2">
                    <label>Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2"
                        placeholder="Enter Your Password..." 
                        type="text" 
                        /> 
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login