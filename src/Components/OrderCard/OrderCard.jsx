import {  IoIosClose } from "react-icons/io";

const OrderCard = props => {
    const {title, imageURL, price} = props;

    return(

        <div className="flex items-center justify-between mb-3">
            <section className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="object-cover w-full h-full rounded-lg" src={imageURL} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </section>
            <section className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                < IoIosClose className='w-5 h-5 text-black cursor-pointer'/>
            </section>
        </div>
    );
}

export {OrderCard};