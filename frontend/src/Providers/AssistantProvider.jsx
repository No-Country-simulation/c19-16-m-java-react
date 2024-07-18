import React, { createContext, useContext, useState } from 'react';

const AssistantContext = createContext();

const AssistantProvider = ({ children }) => {
    
    // Definir estado global   
    const [assistantActive, setAssistantActive] = useState(false)
    
    // Define funcion para actualizar estado
    

    return (
        <AssistantContext.Provider value={[assistantActive, setAssistantActive]}>
            { children }
        </AssistantContext.Provider>
    );

}

const useAssistant = () => {    
    const context = useContext(AssistantContext)
    if (!context) {
        throw new Error('useAssistant debe ser usado dentro de un AssistantProvider');
    }
    
    return context;    
}


export { AssistantProvider, useAssistant };