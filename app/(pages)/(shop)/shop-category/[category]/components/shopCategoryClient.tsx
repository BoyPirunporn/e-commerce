'use client';
import Item from '@/components/Item';
import { ShopContext } from '@/Context/ShopContext';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const ShopCategoryClient = ({
    category
}: {
    category: string;
}) => {
    const shopContext = useContext(ShopContext)!
    return (
        <div className='flex flex-col container m-[30px_auto] text-text'>
            <div className="relative h-[350px]">
                <Image src="/assets/Frontend_Assets/banner_mens.png" alt="" fill />
            </div>
            <div className="shopcategory-indexSort flex  justify-between py-[60px] items-center">
                <p>
                    <span>Showing 1-12</span>
                    out of 36 products
                </p>
                <div className="p-[10px_20px] rounded-xl border border-[#888] flex gap-2 items-center">
                    <span>Sort by</span>
                    <FaArrowDown />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {shopContext.allProduct.length && shopContext.allProduct.filter(p => p.category === category).map((product) => (
                    <Item key={product.id} name={product.name} image={product.image.src} oldPrice={product.oldPrice} newPrice={product.newPrice} />
                ))}
            </div>

        </div>
    );
}

export default ShopCategoryClient;
