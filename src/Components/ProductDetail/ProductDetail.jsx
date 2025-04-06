import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './styles.css';

const ProductDetails = () => {

    const context = useContext(ShoppingCartContext);
    
    return(
        <aside  className={`${context.isOpenProductDetails ? 'opacity-100' :'opacity-0'} fixed right-2 flex flex-col bg-white border border-black rounded-lg product-details`}>
            <div className='flex items-center justify-between p-6'>
                <h2 className='text-xl font-medium'>
                    Details
                </h2>
                < IoIosCloseCircleOutline className='w-8 h-8 text-black cursor-pointer' onClick={() => context.closeProductDetails()} />
            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg" src={context.showToProduct.images} alt={context.showToProduct.title}/>
            </figure >
            <p className="flex flex-col p-6">
                <span className="mb-2 text-2xl font-medium">${context.showToProduct.price}</span>
                <span  className="text-sm font-medium">${context.showToProduct.title}</span>
                <span  className="text-xs font-light">${context.showToProduct.description}</span>
            </p>
        </aside>
    );
}

export {ProductDetails};