'use client';
import React from 'react';
import CartItem from './CartItem';
import CartSumary from './CartSumary';

type Props = {};

const CartClient = (props: Props) => {
    return (
        <div className='container py-16 pb-20 flex flex-col md:flex-row gap-[30px]'>
            <div className="flex-3 py-20">
                <CartItem />
            </div>
            <div className="flex-1 py-20">
                <CartSumary />
            </div>
        </div>
    );
};

export default CartClient;