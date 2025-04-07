import { useContext } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { Card } from "../../Components/Card/Card";
import { ProductDetails } from "../../Components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../Context/Context";

function Home() {

    const context = useContext(ShoppingCartContext);

    const renderView = () => {

        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(data => (
                    <Card key={data.id} data={data} />
                ))
            )
        } else {
            return (
                <p>No existen productos :(</p>
            )
        }
    }

    return (

        <Layout>
            <div className="relative flex flex-col items-center justify-center w-1/2 gap-1 mb-4">
                <h1 className="text-xl font-semibold">Tienda CodewebStudio</h1>
                <h2 className="text-lg font-light">Encuentra Productos Exclusivos</h2>
            </div>
            <input
                type="text"
                placeholder="Busca un producto"
                className="w-1/3 px-6 py-2 mb-4 border border-black rounded-lg focus:outline-none"
                onChange={(event) => context.setSearchByTitle(event.target.value)} />
            <main className="grid w-full max-w-screen-lg grid-cols-3 gap-4">
                {renderView()}
            </main>
            <ProductDetails />
        </Layout>
    )
}

export { Home };