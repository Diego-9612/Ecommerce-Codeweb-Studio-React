import { Layout } from "../../Components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { TbCircleChevronLeft } from "react-icons/tb";

function MyOrder() {

    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if (index === 'last') index = context.order?.length - 1;
    console.log(context.order);

    return (
        <Layout>
            <div className="relative flex items-center justify-center w-1/4 mb-2">
                <Link to="/my-orders" className="absolute left-0">
                    <TbCircleChevronLeft className="w-6 h-6 text-black" />
                </Link>
                <h2>Mi Orden</h2>
            </div>
            <section className="flex flex-col w-1/4 my-4">
                {context.order?.[index]?.products.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageURL={product.images}
                        price={product.price} />
                ))}
            </section>
            <p className="flex items-center justify-between w-1/4">
                <span className="font-light">Total</span>
                <span className="text-2xl font-medium">${context.order?.[index]?.totalPrice}</span>
            </p>

        </Layout>
    )
}

export { MyOrder };
