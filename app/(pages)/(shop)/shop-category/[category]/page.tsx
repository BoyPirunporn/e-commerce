import React from 'react';
import ShopCategoryClient from './components/shopCategoryClient';

const ShopPage = ({
    params
}: {
    params: {
        category: string;
    }
}) => {
    return <ShopCategoryClient category={params.category} />;
}

export default ShopPage;
