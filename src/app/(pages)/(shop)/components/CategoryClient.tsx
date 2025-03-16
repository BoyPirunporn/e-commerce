'use client';
import { Category } from '@/types';
import { motion } from 'framer-motion';
import React from 'react';
import CategoryItem from './CategoryItem';

type Props = {
    categories: Category[];
};

const ShowCategoryClient = ({
    categories
}: Props) => {

    const cs = Array.from(Array(10)).map((_, index) => {
        return ({
            id: index,
            name: "Cate_" + (index + 1)
        });
    });
    return (
        <div className="gap-3 md:gap-8 mt-10 w-full inline-flex flex-row whitespace-nowrap flex-nowrap  overflow-x-auto scrollbar-hidden">
            {cs.map((category: Category, index) => {
                return (
                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0, x: -50 }}
                        transition={{ duration: 0.5, delay: .4 }}
                        key={index} >
                        <CategoryItem category={category} />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ShowCategoryClient;