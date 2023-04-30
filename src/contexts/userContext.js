import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const initValue = JSON.parse(localStorage.getItem('userinfo'))
    const [token, setToken] = useState(initValue?.token || "")
    const [name, setName] = useState(initValue?.name || "")
    
    return(
        <UserContext.Provider value={{token, setToken,  name, setName}}>
            {children}
        </UserContext.Provider>
    )
}
