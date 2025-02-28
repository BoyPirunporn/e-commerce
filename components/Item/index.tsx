import React from 'react';
import Image from 'next/image';


interface ItemProps {
    image: string;
    name: string;
    newPrice: number;
    oldPrice: number
}

const Item = (props: ItemProps) => {
    return (
        <div className=''>
            <div className='w-full h-[400px] relative'>
                <Image src={props.image} alt="" fill className='object-fill'/>
            </div>
            <p className='m-[6px_0] text-text'>{props.name}</p>
            <div className="flex gap-[20px]">
                <div className=" text-[#374151] text-[18px] font-[600]">${props.newPrice}</div>
                <div className="text-[#8c8c8c] text-[18px] font-[500] line-through">${props.oldPrice}</div>
            </div>
        </div>
    );
}

export default Item;
