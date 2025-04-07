import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) =>{

    // Shopping Cart Increment Quantity 
    const [counter, setCounter] = useState(0);

    // Shopping Cart Add Products to Cart
    const [cartProduct, setCartProduct] = useState([]);

    // Product Details Open/Close
    const [isOpenProductDetails, setIsOpenProductDetails] = useState(false);
    const openProductDetails = () => setIsOpenProductDetails(true);
    const closeProductDetails = () => setIsOpenProductDetails(false);

    // Checkout Side Menu Open/Close
    const [isOpenCheckoutSideMenu, setIsOpenCheckoutSideMenu] = useState(false);
    const openCheckoutSideMenu = () => setIsOpenCheckoutSideMenu(true);
    const closeCheckoutSideMenu = () => setIsOpenCheckoutSideMenu(false);

    //Product Details Show Product 
    const [showToProduct, setShowToProduct] = useState({});

    // Shopping Cart Order
    const [order, setOrder] = useState([]);

    return(

        <ShoppingCartContext.Provider value={{
            counter,
            setCounter,
            openProductDetails,
            closeProductDetails,
            isOpenProductDetails,
            showToProduct,
            setShowToProduct,
            cartProduct,
            setCartProduct,
            isOpenCheckoutSideMenu,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartProvider, ShoppingCartContext};