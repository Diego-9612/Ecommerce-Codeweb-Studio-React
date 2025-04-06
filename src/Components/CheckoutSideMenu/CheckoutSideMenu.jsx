import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { OrderCard } from "../OrderCard/OrderCard";
import './style.css'

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <aside className={`${context.isOpenCheckoutSideMenu ? 'opacity-100' : 'opacity-0'} fixed right-2 flex flex-col bg-white border border-black rounded-lg checkout-side-menu`}>
            <div className='flex items-center justify-between p-6'>
                <h2 className='text-xl font-medium'>
                    My Order
                </h2>
                < IoIosCloseCircleOutline className='w-8 h-8 text-black cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            <section className="px-6">
                {context.cartProduct.map(product => (
                    <OrderCard key={product.id} title={product.title} imageURL={product.images} price={product.price} />
                ))}
            </section>
        </aside>
    );
}

export { CheckoutSideMenu };