import React from 'react';
import ProductClient from './components/ProductClient';
import { getProductById } from '@/service/product.service';

const Page = async ({
    params
}: {
    params: Promise<{
        id: string;
    }>;
}) => {
    const productId = (await params).id;
    const product = await getProductById(Number(productId))
    return (
        <ProductClient product={product!} />
    );
};

export default Page;