import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Context";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { OrderCard } from "../OrderCard/OrderCard";
import { totalPrice } from "../../Utils";
import './style.css'

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProduct.filter(product => product.id != id)
        context.setCartProduct(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.2025',
            products: context.cartProduct,
            totalProducts: context.cartProduct.length,
            totalPrice: totalPrice(context.cartProduct)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProduct([]);
        context.setSearchByTitle(null);
    }

    return (
        <aside className={`${context.isOpenCheckoutSideMenu ? 'opacity-100' : 'opacity-0'} fixed right-2 flex flex-col bg-white border border-black rounded-lg checkout-side-menu`}>
            <div className='flex items-center justify-between p-6'>
                <h2 className='text-xl font-medium'>
                    My Order
                </h2>
                < IoIosCloseCircleOutline className='w-8 h-8 text-black cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            <section className="flex-1 px-6 overflow-y-scroll">
                {context.cartProduct.map(product => (
                    <OrderCard 
                    key={product.id} 
                    id={product.id} 
                    title={product.title} 
                    imageURL={product.images} 
                    price={product.price} 
                    handleDelete={handleDelete} />
                ))}
            </section>
            <section className="px-6 mb-6">
                <p className="flex items-center justify-between">
                    <span className="font-light">Total</span>
                    <span className="text-2xl font-medium">${totalPrice(context.cartProduct)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button className="w-full py-3 mt-2 text-white bg-black rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </section>
        </aside>
    );
}

export { CheckoutSideMenu };