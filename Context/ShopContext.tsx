import React, { createContext, useMemo } from 'react';
import app_product from '@/public/assets/Frontend_Assets/all_product'
import { StaticImageData } from 'next/image';

interface ProductModal {
    id: number;
    name: string;
    category: string;
    image: StaticImageData;
    newPrice: number;
    oldPrice: number;
}
interface ShopContextProps {
    allProduct: ProductModal[]
}
export const ShopContext = createContext<ShopContextProps | null>(null);



const ShopContextProvider = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    const contextValue: ShopContextProps = React.useMemo(() => ({
        allProduct: app_product.map((p) => ({ ...p, oldPrice: p.old_price, newPrice: p.new_price }))
    }), [])


    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}

export default ShopContextProvider