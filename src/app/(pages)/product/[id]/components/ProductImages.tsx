import ImageProvider from '@/providers/ImageProvider';
import { useState } from 'react';
type Props = {
    items: string[];
};

const ProductImages = ({
    items
}: Props) => {
    const [index,setIndex] = useState(0)
    return (
        <div className="flex gap-2">
            <div className="flex gap-4 overflow-x-auto  whitespace-nowrap">
                <div className="inline-flex flex-col gap-4">
                    {items.map((item: string, i: number) => (
                        <ImageProvider
                            key={i}
                            onClick={() => {
                                setIndex(i)
                            }}
                            src={item}
                            className="object-fill  cursor-pointer rounded-md  min-w-[70px] max-w-[120px] aspect-square"
                        />
                    ))}
                   
                </div>
            </div>
            <ImageProvider
                src={items[index]}
                className="flex-1 object-fill rounded-md w-full max-w-full  aspect-square"
            />
        </div>
    );
};

export default ProductImages;