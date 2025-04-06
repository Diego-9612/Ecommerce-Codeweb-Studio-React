import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) =>{

    // Shopping Cart Increment Quantity 
    const [counter, setCounter] = useState(0);

    // Product Details Open/Close
    const [isOpenProductDetails, setIsOpenProductDetails] = useState(false);
    const openProductDetails = () => setIsOpenProductDetails(true);
    const closeProductDetails = () => setIsOpenProductDetails(false);

    //Product Details Show Product 
    const [showToProduct, setShowToProduct] = useState({});

    return(

        <ShoppingCartContext.Provider value={{
            counter,
            setCounter,
            openProductDetails,
            closeProductDetails,
            isOpenProductDetails,
            showToProduct,
            setShowToProduct
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartProvider, ShoppingCartContext};