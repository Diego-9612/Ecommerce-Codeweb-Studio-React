import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { Card } from "../../Components/Card/Card";
import { ProductDetails } from "../../Components/ProductDetail/ProductDetail";
function Home() {

    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products').
            then(response => response.json()).
            then(data => setItems(data));
    }, [])

    return (

        <Layout>
            Home
            <main className="grid w-full max-w-screen-lg grid-cols-4 gap-4">
                {
                    items?.map(data => (
                        <Card key={data.id} data={data} />
                    ))
                }
            </main>
            <ProductDetails/>
        </Layout>
    )
}

export { Home };