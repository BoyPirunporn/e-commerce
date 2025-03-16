
import { Product } from '@/types';
import Item from '../../../../components/Item';
import { motion } from 'framer-motion';
const Popular = ({
    featureProduct
}: {
    featureProduct: Product[];
}) => {
    return (
        <div className=' flex flex-col items-center gap-[10px] mb-10'>
            <div className=" gap-8 mt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                {featureProduct.map((item: Product, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0, x: -50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0, x: -50 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Item id={item.id} image={item.mainImage} name={item.name} oldPrice={item.price} newPrice={item.price} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Popular;
