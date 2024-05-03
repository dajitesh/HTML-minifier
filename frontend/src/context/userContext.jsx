
import { createContext, useContext, useEffect, useState } from "react";
import {useRouter} from "next/navigation"


const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [currentuser,setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const [loggedIn, setLoggedIn] = useState(currentuser !== null);

    const router = useRouter();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        router.push("/")
    }
    
    return (
        <UserContext.Provider value={{
            loggedIn, setLoggedIn, logout, currentuser, setCurrentUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext);

export default useUserContext;