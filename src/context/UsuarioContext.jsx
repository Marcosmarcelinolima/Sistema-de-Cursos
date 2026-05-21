import  {createContext, useContext, useState} from "react";

const UsuarioContext = createContext(null);

export function UsuarioProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    
    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export function useUsuario() {
    const context = useContext(UsuarioContext);
    if (!context) {
        throw new Error('useUsuario must be used within a UsuarioProvider');
    }
    return context;
}