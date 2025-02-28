'use client';

import ShopContextProvider from '@/Context/ShopContext';
import React from 'react';

const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ShopContextProvider>
            {children}
        </ShopContextProvider>
        );
}

export default ShopProvider;
