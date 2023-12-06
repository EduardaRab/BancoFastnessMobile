// arquivo para acessar o id do usuário logado em todas as páginas
import React, { createContext, useState, useContext } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [id, setId] = useState('')

    return (
        <AppContext.Provider value={{id, setId}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}