import React from 'react';

import data_product from '@/public/assets/Frontend_Assets/data'
import Item from '../Item';
const Popular = () => {
    return (
        <div className='container flex flex-col items-center gap-[10px] mb-10'>
            <h1 className='text-[#171717] text-[50px] font-bold'>POPULAR IN WOMEN</h1>
            <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
            <div className=" gap-8 mt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                {data_product.map((item) => {
                    return <Item key={item.id} image={item.image.src} name={item.name} oldPrice={item.old_price} newPrice={item.new_price}/>
                })}
            </div>
        </div>
    );
}

export default Popular;
