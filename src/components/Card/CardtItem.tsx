'use client';
import React from 'react';
import Image from 'next/image';
import SpecialDeal from '../../../public/assets/special-deal.jpg';
import { Product } from '@/types';
import ImageProvider from '@/providers/ImageProvider';
import Link from 'next/link';
type Props = {
    product: Product;
};

const CardItem = ({
    product
}: Props) => {
    return (
        <div className=" w-[200px] h-full md:w-[200px] lg:w-[250px]  xl:w-[320px] flex-shrink-0 bg-white relative  rounded-sm">
            <Link href={`/product/${product.id}`} className='item-warp relative overflow-hidden mb-2'>
                {/* Container ของรูปภาพ */}
                <div className='relative w-full h-[200px]  lg:h-[250px] xl:h-[320px] overflow-hidden'>
                    {/* รูปภาพที่สามารถซูมได้เมื่อ Hover */}
                    <ImageProvider
                        onClick={() => window.scrollTo(0, 0)}
                        src={product.mainImage}
                        className='object-cover object-top rounded-tl-sm rounded-tr-sm transition-transform duration-500 ease-out hover:scale-105'
                    />

                    {/* Special deal detail */}
                    <div className="absolute hidden md:block bottom-0 left-0 h-10 w-full">
                        <Image fill src={"/assets/special-deal.jpg"} alt={''} />
                    </div>
                </div>

            </Link>
            {/* Product detail */}
            <div className="flex flex-col gap-2 flex-wrap shrink-0 whitespace-normal  p-2">
                <div className="flex flex-col">
                    <p className=" text-text/60 text-sm md:text-base lg:text-lg font-[500] ">{product.category.toUpperCase()}</p>
                    <p className=" text-text text-sm md:text-base lg:text-lg font-[500] ">{product.name}</p>
                    <span className="text-text/90 text-xs md:text-sm lg:text-base font-[400] line-clamp-2">{product.description}</span>
                </div>
                <div className="flex gap-[20px] h-full items-center mt-auto">
                    <div className=" text-[18px] text-text/60 text-sm md:text-base lg:text-lg font-[500] line-through">${product.price}</div>
                    <div className="text-red/70  text-sm md:text-base lg:text-lg font-[600]">${product.price}</div>
                </div>
            </div>
            {/* Special deal percentage */}
            <div className="absolute top-2 right-2 rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl bg-red py-1 px-4">
                <p className='text-white text-xs sm:text-sm md:text-base font-[500]'>30%</p>
            </div>
        </div>

    );
};

export default CardItem;;