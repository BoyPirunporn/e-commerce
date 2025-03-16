import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
type Props = {
    items: StaticImageData[];
};

const ProductImages = ({
    items
}: Props) => {
    const [index, setIndex] = useState(0);
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src={items[index].src}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-fill rounded-md"
                />
            </div>
            <div className="flex gap-4 mt-8 w-full overflow-x-auto whitespace-nowrap">
                <div className="inline-flex gap-4">
                    {items.map((item: StaticImageData, i: number) => (
                        <div
                            className="relative cursor-pointer min-w-[110px] h-32"
                            key={i}
                            onClick={() => setIndex(i)}
                        >
                            <Image
                                src={item.src}
                                alt=""
                                fill
                                sizes="40vw"
                                className="object-cover rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductImages;