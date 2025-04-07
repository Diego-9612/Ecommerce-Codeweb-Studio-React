import {  IoIosClose } from "react-icons/io";

const OrderCard = props => {
    const {id, title, imageURL, price, handleDelete} = props;

    let renderIoIosClose

    if (handleDelete){
        renderIoIosClose =  < IoIosClose onClick={() => handleDelete(id)} className='text-black cursor-pointer w-7 h-7'/>;
    }

    return(

        <div className="flex items-center justify-between gap-2 mb-3">
            <section className="flex items-center w-2/3 gap-3">
                <figure className="flex items-center w-20 h-20">
                    <img className="object-cover w-full h-full rounded-lg" src={imageURL} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </section>
            <section className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                {renderIoIosClose}
            </section>
        </div>
    );
}

export {OrderCard};