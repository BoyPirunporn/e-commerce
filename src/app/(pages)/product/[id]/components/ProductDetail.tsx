import { Button } from '@/components/ui/button';
import useCartItemStore from '@/zustandStore/cart-store';
import { FaStar } from 'react-icons/fa';
import { Product } from '@/types';
import ProductImages from './ProductImages';
import { cn } from '@/lib/utils';

const ProductDetail = (product: Product) => {
    const { addToCart, removeToCart } = useCartItemStore();
    const map = product.productOptions.find(e => e.enableImage);
    return (
        <div className="px-4  relative flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2 lg:sticky top-20">
                <ProductImages item={{
                    main: product.mainImage,
                    items: map?.productOptionValues!
                }} />
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
                {product.productOptions.map(option => {
                    return (
                        <div key={option.id} className="flex flex-col gap-5 m-[30px_0]">
                            <h1 className='text-xl font-bold'>Select {option.name}</h1>
                            <div className="flex flex-row gap-5 flex-wrap">
                                {option.productOptionValues.map((optionValue) => (
                                    <div key={optionValue.id} className={
                                        cn(
                                            "px-5 w-full text-center max-w-[80px] py-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-xl cursor-pointer",
                                        )
                                    } style={{
                                        backgroundColor: optionValue.value.toLowerCase(),
                                    }}>
                                        {optionValue.value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
                <div className="h-[2px] bg-gray-100" />
                <Button className='max-w-[250px]' onClick={() => addToCart(product)}>Addto cart</Button>
            </div>
        </div>

    );
};

export default ProductDetail;