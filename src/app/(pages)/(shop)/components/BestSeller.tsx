'use client'
import CardItem from '@/components/Card/CardtItem';
import Item from '@/components/Item';
import { Product } from '@/types';
import { motion } from 'framer-motion';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
    products: Product[];
};

const BestSeller = ({
    products
}: Props) => {
    return (
        // <div className=" gap-2 mt-4 w-full inline-flex flex-row whitespace-nowrap flex-nowrap  overflow-x-auto scrollbar-hidden">
        //     {products.slice(0, 10).map((product: Product, index) => {
        //         return (
        //             <motion.div
        //                 initial={{ opacity: 0, scale: 0, x: -50 }}
        //                 animate={{ opacity: 1, scale: 1, x: 0 }}
        //                 exit={{ opacity: 0, scale: 0, x: -50 }}
        //                 transition={{ duration: 0.5, delay: .4 }}
        //                 key={index}
        //             >
        //                 <CardItem product={product} />
        //             </motion.div>
        //         );
        //     })}
        // </div>
        <div className=" gap-2 mt-4 w-full inline-flex flex-row whitespace-nowrap flex-nowrap  overflow-x-auto scrollbar-hidden">
            <Swiper
                spaceBetween={20}
                slidesPerView={2.2}
                breakpoints={{
                    300: { slidesPerView: 1.7 }, // จอเล็กสุด (มือถือ)
                    480: { slidesPerView: 2.7 }, // จอเล็กสุด (มือถือ)
                    960: { slidesPerView: 3.4}, // จอใหญ
                    1000: { slidesPerView: 3.8}, // จอใหญ
                    1240: { slidesPerView: 3.8}, // จอใหญ
                    1540: { slidesPerView: 4.2}, // จอใหญ
                }}
            >
                {products.map((product: Product, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0, x: -50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0, x: -50 }}
                                transition={{ duration: 0.5, delay: .4 }}

                            >
                                <Item product={product} />
                            </motion.div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default BestSeller;