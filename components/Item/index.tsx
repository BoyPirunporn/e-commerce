import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


interface ItemProps {
    id: number;
    image: string;
    name: string;
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
function Item(props: ItemProps) {
    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            key={props.id}
            className='max-w-[319px] border border-text/20 rounded-sm  '>
            <div className='p-2'>
                <Link href={`/product/${props.id}`} className='item-warp relative overflow-hidden mb-2'>
                    {/* Container ของรูปภาพ */}
                    <div className='relative w-full h-[330px] lg:h-[300px] overflow-hidden'>
                        {/* รูปภาพที่สามารถซูมได้เมื่อ Hover */}
                        <Image
                            onClick={() => window.scrollTo(0, 0)}
                            src={props.image}
                            alt=""
                            fill
                            className='object-cover object-top transition-transform duration-500 ease-out hover:scale-105'
                        />
                    </div>
                </Link>
                <p className='m-[6px_0] text-text'>{props.name}</p>
                <div className="flex gap-[20px]">
                    <div className=" text-[#374151] text-[18px] font-[600]">${props.newPrice}</div>
                    <div className="text-[#8c8c8c] text-[18px] font-[500] line-through">${props.oldPrice}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default Item;
