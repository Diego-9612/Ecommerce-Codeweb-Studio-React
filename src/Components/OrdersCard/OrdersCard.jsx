import { CiCircleChevRight } from "react-icons/ci";

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;

    return (

        <div className="flex items-center justify-between gap-2 p-4 mb-3 border border-black rounded-lg w-80">
            <p className="flex justify-between">
                <div className="flex flex-col">
                    <span  className="font-light" >01.02.03</span>
                    <span className="font-light">{totalProducts} Articulos</span>
                </div>
            </p>
            <span className="flex items-center gap-2 text-2xl font-medium">${totalPrice} <CiCircleChevRight /></span>
        </div>
    );
}

export { OrdersCard };