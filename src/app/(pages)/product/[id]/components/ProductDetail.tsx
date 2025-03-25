import { Button } from '@/components/ui/button';
import useCartItemStore from '@/zustandStore/cart-store';
import { FaStar } from 'react-icons/fa';
import { Product, ProductOptionValue } from '@/types';
import ProductImages from './ProductImages';
import { cn } from '@/lib/utils';
import ImageProvider from '@/providers/ImageProvider';
import { useCallback, useState } from 'react';
import { useStoreAlert } from '@/zustandStore/store-alert';

const ProductDetail = (product: Product) => {
    const { addToCart, removeToCart } = useCartItemStore();
    const { onOpen } = useStoreAlert();
    // State เก็บค่า option ที่เลือก
    const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: ProductOptionValue; }>({});

    // ฟังก์ชันเลือก option
    const handleSelectOption = useCallback((optionId: number, optionValue: ProductOptionValue) => {
        setSelectedOptions(prev => ({
            ...prev,
            [optionId]: optionValue,
        }));
    }, []);


    const handleAddToCart = () => {
        if (Object.keys(selectedOptions).length < product.productOptions.length) {
            onOpen("กรุณรเลือกตัวเลือกสินค้า",)
            return;
        }
        addToCart(product, selectedOptions);
    };
    return (
        <div className="px-4  grid relative gird-cols-1 md:grid-cols-2 gap-16">
            <div className=" top-20">
                <ProductImages
                    items={[
                        product.mainImage,
                        ...product.productOptions
                            .flatMap(option => option.productOptionValues)
                            .map(e => e.image).filter(e => e !== null)
                    ]}
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className='font-[700] text-2xl'>{product?.name}</h1>
                <div className="flex flex-row gap-2 mt-3">
                    <FaStar size={24} className='text-amber-300' />
                    <FaStar size={24} className='text-amber-300' />
                    <FaStar size={24} className='text-amber-300' />
                    <FaStar size={24} className='text-amber-300' />
                    <FaStar size={24} className='text-amber-300' />
                    <p>(122)</p>
                </div>
                <div className="h-[2px] bg-gray-100" />
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">
                        {/* ${product.newPrice} */}
                    </h3>
                    <h2 className="font-medium text-2xl">
                        {/* ${product.oldPrice} */}
                    </h2>
                </div>
                <div className="h-[2px] bg-gray-100" />
                <div className="product-display-right-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quis nemo voluptatum dolorem totam eum itaque, maxime accusamus inventore? Beatae!
                </div>
                <div className="h-[2px] bg-gray-100" />
                {product.productOptions.map(option => (
                    <div key={option.id} className="flex flex-col gap-2 m-[10px_0]">
                        <h1 className='text-xl font-bold'>{option.name}</h1>
                        <div className="flex flex-row gap-2 flex-wrap">
                            {option.productOptionValues.map((optionValue) => {
                                const isActive = selectedOptions[option.id]?.id === optionValue.id;

                                return option.enableImage ? (
                                    // 🎨 ถ้าเป็นแบบ image option
                                    <div
                                        key={optionValue.id}
                                        onClick={() => handleSelectOption(option.id, optionValue)}
                                        className={cn(
                                            "relative border border-[#ebebeb] transition-all ease-in-out duration-300 hover:border-accent-hover cursor-pointer aspect-square w-full max-w-[80px]",
                                            { "border-black": isActive } // เพิ่ม class border-black เมื่อ active
                                        )}
                                    >
                                        <ImageProvider src={optionValue.image} className="cursor-pointer p-2" />
                                    </div>
                                ) : (
                                    // 🎨 ถ้าเป็นแบบ text/color option
                                    <div
                                        key={optionValue.id}
                                        onClick={() => handleSelectOption(option.id, optionValue)}
                                        className={cn(
                                            "text-center p-2 w-10 h-10 hover:bg-gray-200 transition-all duration-300 bg-[#fbfbfb] border border-[#ebebeb] rounded-sm cursor-pointer",
                                            { "bg-gray-400 text-white": isActive } // เปลี่ยน bg/text เมื่อ active
                                        )}
                                        style={{ backgroundColor: optionValue.value.toLowerCase() }}
                                    >
                                        {optionValue.value}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
                <div className="h-[2px] bg-gray-100" />
                <Button className='max-w-[250px]' onClick={handleAddToCart}>Addto cart</Button>
            </div>
        </div>

    );
};

export default ProductDetail;