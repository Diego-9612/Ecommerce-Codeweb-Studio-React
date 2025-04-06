import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import { CiCirclePlus } from "react-icons/ci";

const Card = (data) => {

    const context = useContext(ShoppingCartContext);

    const ShowProduct = (data) => {
        context.openProductDetails();
        context.setShowToProduct(data);

    }

    return(
        <section 
        onClick={() => ShowProduct(data.data)}
        className="w-56 bg-white rounded-lg cursor-pointer h-60">
            <figure className="relative w-full mb-2 h-4/5">
                <span className="absolute bottom-0 left-0 m-2 text-xs text-black rounded-lg bg-white/60 px-3 py-0.5">{data.data.category.name}</span>
                <img src={data.data.images[0]} alt={data.data.title} className='object-cover w-full h-full rounded-lg' />
                <div
                className="absolute top-0 right-0 flex items-center justify-center m-2"
                onClick={() => context.setCounter(context.counter + 1)}
                ><CiCirclePlus className="w-6 h-6 bg-white rounded-full" /></div>
            </figure>
            <p className='flex items-center justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </section>
    );
}

export {Card};