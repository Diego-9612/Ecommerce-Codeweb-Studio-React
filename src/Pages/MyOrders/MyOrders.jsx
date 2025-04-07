import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { OrdersCard } from "../../Components/OrdersCard/OrdersCard";
function MyOrders() {

    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            
            MyOrders
            {context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${order.id}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts} />
                </Link>

            ))}

        </Layout>
    )
}

export { MyOrders };