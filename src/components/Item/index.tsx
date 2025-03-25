import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageProvider from '@/providers/ImageProvider';
import { Product } from '@/types';


interface ItemProps {
    id: number;
    image: string;
    name: string;
    category: string;
    description: string;
    newPrice: number;
    oldPrice: number;
}


const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, transformOrigin: "50% 50% 0px" },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { ease: "easeInOut" }
    },
    exit: {
        opacity: 0,
        scale: 0,
        transition: { ease: "easeInOut" }
    }
};
function Item({
    product
}: {
    product: Product
}) {
    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            key={product.id}
            className=' border border-text/20 rounded-sm  bg-white'>
            <div className='p-2'>
                <Link href={`/product/${product.id}`} className='item-warp relative overflow-hidden mb-2'>
                    {/* Container ของรูปภาพ */}
                    <div className='relative w-full max-h-[300px]  overflow-hidden'>
                        {/* รูปภาพที่สามารถซูมได้เมื่อ Hover */}
                        <ImageProvider
                            onClick={() => window.scrollTo(0, 0)}
                            src={product.mainImage}
                            fill
                            className='object-cover object-top transition-transform duration-500 ease-out hover:scale-105'
                        />
                    </div>
                </Link>
                <p className='m-[6px_0] text-text line-clamp-1'>{product.name}</p>
                {/* Product detail */}
                <div className="flex flex-col gap-2 flex-wrap shrink-0 whitespace-normal">
                    <div className="flex flex-col  text-ellipsis">
                        <p className=" text-text/60 text-sm md:text-base lg:text-lg font-[500] line-clamp-1">{product.category.toUpperCase()}</p>
                        <p className=" text-text text-sm md:text-base lg:text-lg font-[500] line-clamp-1">{product.name}</p>
                        <span className="text-text/90 text-xs md:text-sm lg:text-base font-[400] line-clamp-1">{product.description}</span>
                    </div>
                    <div className="flex gap-[20px] h-full items-center mt-auto">
                        <div className=" text-[18px] text-text/60 text-sm md:text-base lg:text-lg font-[500] line-through">${product.price}</div>
                        <div className="text-red/70  text-sm md:text-base lg:text-lg font-[600]">${product.price}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Item;
