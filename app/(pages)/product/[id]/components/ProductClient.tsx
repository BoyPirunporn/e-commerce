'use client';
import Breadcrum from '@/components/Breadcrum';
import { Button } from '@/components/ui/button';
import { ShopContext } from '@/Context/ShopContext';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import ProductDetail from './ProductDetail';
import ProductDescript from './ProductDescript';
import ProductRelated from './ProductRelated';
function ProductClient({ productId }: { productId: number; }) {
    const shopContext = useContext(ShopContext);
    const product = shopContext?.allProduct.find(p => p.id === productId);

    return (
        <div className='py-[120px] flex flex-col gap-10'>
            {/* <Breadcrum category={product?.category!} productName={product?.name!}/> */}
            <div className="container">
                <ProductDetail {...product!} />
                <ProductDescript />
            </div>
            <ProductRelated />
        </div>
    );
}

export default ProductClient;