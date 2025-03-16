import Skelenton from '@/components/Skelenton';
import { Suspense } from 'react';
import ShopClient from './components/ShopClient';
import { getAllProduct, getFeatureProduct } from '@/service/product.service';

const ShopPage = async () => {
    const featureProduct = await getAllProduct(0, 10);
    return (
        <Suspense fallback={<Skelenton />}>
            <ShopClient featureProduct={featureProduct} />
        </Suspense>
    );
};

export default ShopPage;
