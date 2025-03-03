import React from 'react';
import ShopCategoryClient, { BannerCategory } from './components/shopCategoryClient';

const ShopPage =async ({
    params
}: {
    params: Promise<{
        category: string;
    }>;
}) => {
    return <ShopCategoryClient category={(await params).category as BannerCategory} />;
};

export default ShopPage;
