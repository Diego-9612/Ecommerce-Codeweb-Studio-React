import { createContext, useState, useEffect } from "react";

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

    // Get Products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    // Get Products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    // Get Products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products').
            then(response => response.json()).
            then(data => setItems(data));
    }, []);

    // Filter by Title
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    };

    // Filter by Category
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    };


    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {

        if(searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchByTitle);
        };

        if(searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory);
        };

        if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        };

        if(!searchType){
            return items;
        };
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory));
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory));
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory));
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory)); 
        
    }, [items, searchByTitle, searchByCategory]); 

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
            setOrder, 
            items, 
            setItems, 
            searchByTitle,
            setSearchByTitle, 
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartProvider, ShoppingCartContext};