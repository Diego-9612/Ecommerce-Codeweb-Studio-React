import { Layout } from "../../Components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { TbCircleChevronLeft } from "react-icons/tb";

function MyOrder() {

    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className="relative flex items-center justify-center w-1/4 mb-2">
                <Link to="/my-orders" className="absolute left-0">
                    <TbCircleChevronLeft className="w-6 h-6 text-black" />
                </Link>
                <h2>Mi Orden</h2>
            </div>
            <section className="flex flex-col w-1/4 my-4">
                {context.order?.slice(-1)[0].products.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageURL={product.images}
                        price={product.price} />
                ))}
            </section>
            {context.order.map((order, index) => (
                <p key={index} className="flex items-center justify-between w-1/4 ">
                    <span className="font-light">Total</span>
                    <span className="text-2xl font-medium">${(order.totalPrice)}</span>
                </p>
            ))
            }

        </Layout>
    )
}

export { MyOrder };