import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) =>{

    const [counter, setCounter] = useState(0);
    console.log ('Counter', counter);

    return(

        <ShoppingCartContext.Provider value={{
            counter,
            setCounter
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartProvider, ShoppingCartContext};