import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { OrdersCard } from "../../Components/OrdersCard/OrdersCard";
function MyOrders() {

    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className="relative flex items-center justify-center mb-5 w-80">
                <h2 className="text-xl font-medium">Mis Pedidos</h2>
            </div>
            {context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts} />
                </Link>
            ))}
        </Layout>
    )
}

export { MyOrders };