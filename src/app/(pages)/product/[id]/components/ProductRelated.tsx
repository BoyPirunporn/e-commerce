import Item from '@/components/Item';
// import data_product from '@/public/assets/Frontend_Assets/data';
function ProductRelated() {
    return (
        <div className='container flex flex-col items-center gap-3'>
            <h1 className='text-text text-5xl font-bold'>Telated Products</h1>
            <hr className='max-w-[200px] h-[6px] rounded-xl bg-text' />
            <div className="mt-3 justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8  p-0 m-0">
                {/* {data_product.map((item, i) => (
                     <Item key={i} name={item.name} image={item.image.src} oldPrice={item.old_price} newPrice={item.new_price} id={item.id} />
                ))} */}
            </div>
        </div>
    );
}

export default ProductRelated;