import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    
    // Definir estado global   
    const [user, setUser] = useState({})
    
    
    

    return (
        <UserContext.Provider value={[user, setUser]}>
            { children }
        </UserContext.Provider>
    );

}

const useUser = () => {    
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser debe ser usado dentro de un UserProvider');
    }
    
    return context;    
}


export { UserProvider, useUser };