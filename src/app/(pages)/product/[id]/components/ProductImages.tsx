import ImageProvider from '@/providers/ImageProvider';
import { useState } from 'react';
type Props = {
    items: string[];
};

const ProductImages = ({
    items
}: Props) => {
    const [index, setIndex] = useState(0)
    return (
        <div className="flex flex-row gap-2">
            <div className="inline-flex   flex-col gap-4">
                    {items.map((item: string, i: number) => (
                        <ImageProvider
                            key={i}
                            onClick={() => {
                                setIndex(i)
                            }}
                            src={item}
                            className="object-cover  cursor-pointer  w-[50px]  aspect-square"
                        />
                    ))}

                </div>
            <ImageProvider
                src={items[index]}
                className="flex-1 object-cover  md:aspect-square h-auto  aspect-[2/3]"
            />
        </div>
    );
};

export default ProductImages;