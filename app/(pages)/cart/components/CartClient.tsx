'use client';
import React from 'react';
import CartItem from './CartItem';
import CartSumary from './CartSumary';

type Props = {};

const CartClient = (props: Props) => {
    return (
        <div className='container py-16'>
            <CartItem />
            <CartSumary />
        </div>
    );
};

export default CartClient;