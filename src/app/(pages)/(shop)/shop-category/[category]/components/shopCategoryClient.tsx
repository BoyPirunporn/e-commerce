'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
import banner_kid from '../../../../../../../public/assets/Frontend_Assets/banner_kids.png';
import banner_men from '../../../../../../../public/assets/Frontend_Assets/banner_mens.png';
import banner_women from '../../../../../../../public/assets/Frontend_Assets/banner_women.png';
import ImageProvider from '@/providers/ImageProvider';

const banner = {
    men: banner_men,
    women: banner_women,
    kid: banner_kid
} as const

export type BannerCategory = keyof typeof banner;

const ShopCategoryClient = ({
    category
}: {
    category: BannerCategory;
}) => {
    return (
        <div className='py-[80px] flex flex-col container m-[30px_auto] text-text'>
            <div className="relative w-full h-[90px] md:h-[150px] lg:h-[200px] xl:h-[250px]">
                <ImageProvider
                    src={banner[category]}
                />
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
                    className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-content-center">
                    {/* {shopContext.allProduct.length && shopContext.allProduct.filter(p => p.category === category).map((product, index) => (
                        <Item key={product.id} id={product.id} name={product.name} image={product.image.src} oldPrice={product.oldPrice} newPrice={product.newPrice} />
                    ))} */}
                </motion.div>
            </AnimatePresence>

        </div>
    );
};

export default ShopCategoryClient;
