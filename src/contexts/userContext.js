import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [token, setToken] = useState("")
    const [name, setName] = useState("")
    
    return(
        <UserContext.Provider value={{token, setToken,  name, setName}}>
            {children}
        </UserContext.Provider>
    )
}
