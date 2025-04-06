import './styles.css';

const ProductDetails = () => {
    return(
        <aside className='fixed right-0 flex flex-col bg-white border border-black rounded-lg product-details'>
            <div className='flex items-center justify-between p-6'>
                <h2 className='text-xl font-medium'>
                    Details
                </h2>
                <span>X</span>
            </div>
        </aside>
    );
}

export {ProductDetails};