import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Props = {};

const CartSumary = (props: Props) => {
    return (
        <div className='flex flex-row flex-wrap gap-40'>
            <div className="flex flex-col flex-1 gap-5">
                <h1 className='text-2xl font-bold'>cart Totals</h1>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-1 flex-row justify-between items-center">
                        <p>Subtotal</p>
                        <p>${0}</p>
                    </div>
                    <hr />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-1 flex-row justify-between items-center">
                        <p>Shipping Free</p>
                        <p>Free</p>
                    </div>
                    <hr />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold flex flex-1 flex-row justify-between items-center">
                        <p>Total</p>
                        <p>$0</p>
                    </div>
                </div>
                <Button className='rounded-none max-w-[220px]' size={"lg"}>
                PROCEED TO CHECKOUT
                </Button>
            </div>
            <div className='flex-1 gap-5 flex flex-col'>
                <p className="text-text/60">
                    if you have a promo code. Enter it here
                </p>
                <div className='max-w-[450px] flex flex-row'>
                    <Input placeholder='Promo code' className='h-14 bg-text/10 rounded-none border-none text-text/60'/>
                    <Button className=' bg-text px-10 max-w-[150px] w-full h-full rounded-none'>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default CartSumary;