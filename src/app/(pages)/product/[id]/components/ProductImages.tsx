import React, { useState } from 'react';
import Image from 'next/image';
import { ProductOptionValue } from '@/types';
type Props = {
    item: {
        main: string;
        items: ProductOptionValue[]
    };
};

const ProductImages = ({
    item
}: Props) => {
    console.log(item)
    const [index, setIndex] = useState(0);
    return (
        <div className="">
            <div className="h-[350px] relative">
                <Image
                    src={`${process.env.NEXT_PUBLIC_DOMAIN_IMAGE}/${item.main}`}
                    alt=""
                    fill
                    className="object-contain rounded-md"
                />
            </div>
            <div className="flex gap-4 mt-8 w-full overflow-x-auto whitespace-nowrap">
                <div className="inline-flex gap-4">
                    {item.items.map((item: ProductOptionValue, i: number) => (
                        <div
                            className="relative cursor-pointer min-w-[110px] h-32"
                            key={i}
                            onClick={() => setIndex(i)}
                        >
                            <Image
                                src={`${process.env.NEXT_PUBLIC_DOMAIN_IMAGE}/${item.image}`}
                                alt=""
                                fill
                                sizes="40vw"
                                className="object-contain rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductImages;