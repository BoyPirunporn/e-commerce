'use client';
import CardItem from '@/components/Card/CardtItem';
import { Product } from '@/types';
import { motion } from 'framer-motion';
const NewProductClient = ({
    products
}: {
    products: Product[];
}) => {
    return (
        <div className=" gap-2 mt-4 w-full inline-flex flex-row whitespace-nowrap flex-nowrap  overflow-x-auto scrollbar-hidden">
            {products.slice(0, 10).map((product: Product, index) => {
                return (
                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0, x: -50 }}
                        transition={{ duration: 0.5, delay: .4 }}
                        key={index}
                        >
                        <CardItem product={product} />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default NewProductClient;
