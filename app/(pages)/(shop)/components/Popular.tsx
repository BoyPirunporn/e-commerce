
import data_product from '@/public/assets/Frontend_Assets/data';
import Item from '../../../../components/Item';
import { motion } from 'framer-motion';
const Popular = () => {
    return (
        <div className='container flex flex-col items-center gap-[10px] mb-10'>
            <h1 className='text-[#171717] text-3xl xl:text-[50px] font-bold'>POPULAR IN WOMEN</h1>
            <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
            <div className=" gap-8 mt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                {data_product.map((item,index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0,scale:0, x: -50 }}
                            animate={{ opacity: 1,scale:1, x: 0 }}
                            exit={{ opacity: 0,scale:0, x: -50 }}
                            transition={{ duration: 0.5,delay: index * 0.2 }}
                        >
                            <Item id={item.id} image={item.image.src} name={item.name} oldPrice={item.old_price} newPrice={item.new_price} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Popular;
