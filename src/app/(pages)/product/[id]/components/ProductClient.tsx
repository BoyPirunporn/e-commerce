'use client';
import { ShopContext } from '@/Context/ShopContext';
import { useContext } from 'react';
import ProductDescript from './ProductDescript';
import ProductDetail from './ProductDetail';
import ProductRelated from './ProductRelated';
function ProductClient({ productId }: { productId: number; }) {
    const shopContext = useContext(ShopContext);
    const product = shopContext?.allProduct.find(p => p.id === productId);

    return (
        <div className='py-[120px] flex flex-col gap-10'>
            {/* <Breadcrum category={product?.category!} productName={product?.name!}/> */}
            <div className="container ">
                <ProductDetail {...product!} />
                <ProductDescript />
            </div>
            <ProductRelated />
        </div>
    );
}

export default ProductClient;