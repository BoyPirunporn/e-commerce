import React, { createContext, useMemo, useState } from 'react';
import app_product from '@/public/assets/Frontend_Assets/all_product';
import { StaticImageData } from 'next/image';
import all_product from '@/public/assets/Frontend_Assets/all_product';

export interface ProductModal {
    id: number;
    name: string;
    category: string;
    image: StaticImageData;
    newPrice: number;
    oldPrice: number;
}
interface ShopContextProps {
    allProduct: ProductModal[];
    cartItem: ({ qty: number; } & ProductModal)[];
    addToCart: (id: number) => void;
    removeToCart: (id: number) => void;
}
export const ShopContext = createContext<ShopContextProps | null>(null);



const getDefaultCart = () => {
    let cart: {
        [key: number]: number;
    } = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};


const ShopContextProvider = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [cartItem, setCartItem] = useState([]);

    const addToCart = (id: number) => {
        // setCartItem(p => {
        //     p[id] = p[id + 1];
        //     return p;
        // });
    };
    const removeToCart = (id: number) => {
        // setCartItem(p => ({ ...p, [id]: p[id - 1] }));
    };

    const allProduct = app_product.map((p) => ({ ...p, oldPrice: p.old_price, newPrice: p.new_price }));
    const contextValue: ShopContextProps = React.useMemo(() => ({
        allProduct,
        cartItem,
        addToCart,
        removeToCart
    }), [allProduct, cartItem, addToCart, removeToCart,]);

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;