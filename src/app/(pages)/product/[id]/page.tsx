import React from 'react';
import ProductClient from './components/ProductClient';

const Page = async ({
    params
}: {
    params: Promise<{
        id: string;
    }>;
}) => {
    const productId = (await params).id;
    return (
        <ProductClient productId={Number(productId)} />
    );
};

export default Page;