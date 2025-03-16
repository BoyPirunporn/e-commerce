import { Button } from '@/components/ui/button';
import useCartItemStore from '@/zustandStore/cart-store';
import { X } from 'lucide-react';

type Props = {};

const CartItem = (props: Props) => {
    const { cartItems } = useCartItemStore();
    return (
        <div className='my-[100px] overflow-x-auto'>
            <div className="grid grid-cols-[.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-18 py-5 font-bold">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='h-[3px] bg-[#e2e2e2] border-none' />
            {cartItems.map((item, index) => (
                <div key={index}>
                    <div className="text-lg font-[500] grid grid-cols-[.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-18 py-5 ">
                        <img src={item.mainImage} className='h-[62px]' alt="" />
                        <p className='text-base'>{item.name}</p>
                        <p className='text-base'>${item.price}</p>
                        <Button>{item.qty}</Button>
                        <p className='text-base'>{item.price * item.qty}</p>
                        <X size={18} className='cursor-pointer mx-10' />
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default CartItem;