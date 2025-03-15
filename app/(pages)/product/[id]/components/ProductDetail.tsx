import React, { Suspense, useContext } from 'react';
import Image from 'next/image';
import { ProductModal, ShopContext } from '@/Context/ShopContext';
import { FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import useCartItemStore from '@/zustandStore/cart-store';
import ProductImages from './ProductImages';

const ProductDetail = (product: ProductModal) => {
    const shopContext = useContext(ShopContext);
    const { addToCart, removeToCart } = useCartItemStore();
    const images = [...Array.from(Array(5).keys()).map(e => product.image)];
    return (
        <div className="px-4  relative flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages items={images} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className='font-[700] text-2xl'>{product?.name}</h1>
                <div className="flex flex-row gap-2 mt-3">
                    <FaStar size={24} className='text-amber-300' />
                    <FaStar size={24} className='text-amber-300' />
                    <FaStar size={24} className='text-amber-300' />
                    <FaStar size={24} className='text-amber-300' />
                    <FaStar size={24} className='text-amber-300' />
                    <p>(122)</p>
                </div>
                <div className="h-[2px] bg-gray-100" />
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">
                        ${product.newPrice}
                    </h3>
                    <h2 className="font-medium text-2xl">
                        ${product.oldPrice}
                    </h2>
                </div>
                <div className="h-[2px] bg-gray-100" />
                <div className="product-display-right-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quis nemo voluptatum dolorem totam eum itaque, maxime accusamus inventore? Beatae!
                </div>
                <div className="h-[2px] bg-gray-100" />
                <div className="flex flex-col gap-5 m-[30px_0]">
                    <h1 className='text-xl font-bold'>Select Size</h1>
                    <div className="flex flex-row gap-5 flex-wrap">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <div key={size} className='px-5 w-full text-center max-w-[80px] py-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-xl cursor-pointer'>
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[2px] bg-gray-100" />
                <Button className='max-w-[250px]' onClick={() => addToCart(product)}>Addto cart</Button>
            </div>
        </div>

    );
};

export default ProductDetail;