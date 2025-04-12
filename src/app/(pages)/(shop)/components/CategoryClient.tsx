'use client';
import { Category } from '@/types';
import { motion } from 'framer-motion';
import React from 'react';
import CategoryItem from './CategoryItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

type Props = {
    categories: Category[];
};

const ShowCategoryClient = ({
    categories
}: Props) => {

    const results: Category[] = [];
    categories.forEach(c => {
        if (c.children.length) {
            packElement(c.children);
        } else {
            results.push(c);
        }
    });

    function packElement(element: Category[]) {
        element.forEach(e => {
            if (e.children.length) {
                packElement(e.children);
            } else {
                results.push(e);
            }
        });
    };

    return (
        <div className="gap-3 md:gap-8 mt-10 w-full inline-flex flex-row whitespace-nowrap flex-nowrap  overflow-x-auto scrollbar-hidden">
            <Swiper
                className='w-full'
                spaceBetween={10}
                slidesPerView={3.8}
                breakpoints={{
                    600: { slidesPerView: 6 }, // จอเล็กสุด (มือถือ)
                }}
            >
                {categories.map((category: Category, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0, x: -50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0, x: -50 }}
                                transition={{ duration: 0.5, delay: .4 }}
                                key={index} >
                                <Link href={"/shop-category/" + category.name.toLowerCase()}>
                                    <CategoryItem category={category} />
                                </Link>
                            </motion.div>
                        </SwiperSlide>

                    );
                })}
            </Swiper>

        </div>
    );
};

export default ShowCategoryClient;