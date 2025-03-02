'use client';
import Item from '@/components/Item';
import { ShopContext } from '@/Context/ShopContext';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Item จะแสดงทีละตัว ทุก 0.2 วิ
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
};
const ShopCategoryClient = ({
    category
}: {
    category: string;
}) => {
    const shopContext = useContext(ShopContext)!;
    return (
        <div className='py-[80px] flex flex-col container m-[30px_auto] text-text'>
            <div className="relative h-[250px] w-full">
                <Image src="/assets/Frontend_Assets/banner_mens.png" alt="" fill className='object-fill' />
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
            <AnimatePresence mode='wait'>
                <motion.div key={category}
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {shopContext.allProduct.length && shopContext.allProduct.filter(p => p.category === category).map((product, index) => (
                        <Item key={product.id} id={product.id} name={product.name} image={product.image.src} oldPrice={product.oldPrice} newPrice={product.newPrice} />

                    ))}
                </motion.div>
            </AnimatePresence>

        </div>
    );
};

export default ShopCategoryClient;
