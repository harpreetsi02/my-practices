import { useEffect, useState, createContext } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        try{
            const row = localStorage.getItem("user");
            return row ? JSON.parse(row) : null;
        } catch {
            return null;
        } 
    });

    useEffect(() => {
        if (user) localStorage.setItem("user", JSON.stringify(user));
        else localStorage.removeItem("user");
    }, [user]);

    const login = (username) => {
        setUser({name: username});
    }

    const logout = () => {
        setUser(null);
    }

    return(
        <AuthContext.Provider value = {{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}