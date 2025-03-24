'use client';
import { Product } from '@/types';
import ProductDescript from './ProductDescript';
import ProductDetail from './ProductDetail';
import ProductRelated from './ProductRelated';

function ProductClient({
    product
}: Readonly<{
    product: Product
}>) {
    return (
        <div className='py-[120px] flex flex-col gap-10'>
            {/* <Breadcrum category={product?.category!} productName={product?.name!}/> */}
            <div className="px-3 md:px-0 md:container  ">
                <ProductDetail {...product} />
                <ProductDescript />
            </div>
            <ProductRelated />
        </div>
    );
}

export default ProductClient;