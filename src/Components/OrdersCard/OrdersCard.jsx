import {  IoIosClose } from "react-icons/io";

const OrdersCard = props => {
    const {totalPrice, totalProducts} = props;

    return(

        <div className="flex items-center justify-between gap-2 mb-3 border border-black">
            <p>
                <span>01.02.03</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
}

export {OrdersCard};