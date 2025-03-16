import ImageProvider from '@/providers/ImageProvider';
import { Category } from '@/types';
import ShopByCate from '/assets/ShopByCate_2_Men.jpg';
import React from 'react';
import Image from 'next/image';

type Props = {
    category: Category;
};

const CategoryItem = ({
    category
}: Props) => {
    return (
        <div className="flex flex-col gap-2 items-center jusitfy-center">
            <div className="relative rounded-full w-18 h-18 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36  xl:h-36 ">
                <Image
                    alt=''
                    fill
                    src={"/assets/ShopByCate_2_Men.jpg"}
                    className='rounded-full object-center object-cover'
                />
            </div>
            <h1 className='text-text font-bold text-sm md:text-base lg:text-xl'>{category.name}</h1>
        </div>
    );
};

export default CategoryItem;