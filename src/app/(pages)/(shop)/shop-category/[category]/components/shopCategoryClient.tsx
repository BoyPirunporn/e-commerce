'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import banner_kid from '@/public/assets/Frontend_Assets/banner_kids.png';
import banner_men from '@/public/assets/Frontend_Assets/banner_mens.png';
import banner_women from '@/public/assets/Frontend_Assets/banner_women.png';
import ImageProvider from '@/providers/ImageProvider';
import { Product } from '@/types';
import Item from '@/components/Item';

const banner = {
    men: banner_men,
    women: banner_women,
    kid: banner_kid
} as const

export type BannerCategory = keyof typeof banner;

const ShopCategoryClient = ({
    category,
    products
}: {
    category: BannerCategory;
    products: Product[]
}) => {
    return (
        <div className='py-[80px] flex flex-col container m-[30px_auto] text-text'>
            <ImageProvider
                staticImage
                src={banner[category]}
                className='object-fill w-full aspect-[16/4]'
            />

            <div className="shopcategory-indexSort flex  justify-between py-5 md:py-[60px] items-center">
                <div className='flex gap-2'>
                    <span>Showing 1-12</span>
                    out of 36 products
                </div>
                <div className="p-[10px_20px] rounded-xl border border-[#888] flex gap-2 items-center">
                    <span>Sort by</span>
                    <FaArrowDown />
                </div>
            </div>
            <AnimatePresence mode='wait'>
                <motion.div key={category}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-content-center">
                    {products.map((product, index) => (
                        <Item
                            key={product.id}
                            product={product}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>

        </div>
    );
};

export default ShopCategoryClient;
