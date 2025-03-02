import React, { useContext } from 'react';
import Image from 'next/image';
import { ProductModal, ShopContext } from '@/Context/ShopContext';
import { FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import useCartItemStore from '@/zustandStore/cart-store';

const ProductDetail = (product: ProductModal) => {
    const shopContext = useContext(ShopContext);
    const { addToCart, removeToCart } = useCartItemStore();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex-row gap-10">
            <div className="produc grid grid-cols-4 gap-4 justify-center items-center p-4">
                {/* Sidebar รูปภาพเล็ก */}
                <div className="relative flex flex-col gap-10 h-[600px]  overflow-auto">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="relative w-full sm:w-[133px] h-[133px]">
                            <Image
                                src={product?.image.src!}
                                alt=""
                                width={163}
                                height={163}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* ภาพใหญ่หลัก */}
                <div className="col-span-3 relative w-full max-w-[583px] h-[600px]">
                    <Image
                        src={product?.image.src!}
                        alt=""
                        width={589}
                        height={600}
                        className="object-fill w-full h-full"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div>
                    <h1 className='font-[700] text-2xl'>{product?.name}</h1>
                    <div className="flex flex-row gap-2 mt-3">
                        <FaStar size={24} className='text-amber-300' />
                        <FaStar size={24} className='text-amber-300' />
                        <FaStar size={24} className='text-amber-300' />
                        <FaStar size={24} className='text-amber-300' />
                        <FaStar size={24} className='text-amber-300' />
                        <p>(122)</p>
                    </div>
                </div>
                <div className="flex m-[40px_0] gap-8 text-2xl font-[700] items-center">
                    <div className="text-[#818181] line-through">${product?.oldPrice}</div>
                    <div className="text-red">${product?.newPrice}</div>
                </div>
                <div className="product-display-right-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quis nemo voluptatum dolorem totam eum itaque, maxime accusamus inventore? Beatae!
                </div>
                <div className="flex flex-col gap-5 m-[30px_0]">
                    <h1 className='text-xl font-bold'>Select Size</h1>
                    <div className="flex flex-row gap-5 flex-wrap">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <div key={size} className='px-5 w-full text-center max-w-[80px] py-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-xl cursor-pointer'>
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <Button className='max-w-[250px]' onClick={() => addToCart(product)}>Addto cart</Button>
                <p className="mt-3">
                    <span className="font-bold">{product?.category}</span>
                </p>
            </div>
        </div>

    );
};

export default ProductDetail;