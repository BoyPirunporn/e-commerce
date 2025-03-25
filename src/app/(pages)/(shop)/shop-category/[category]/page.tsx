import Skelenton from '@/components/Skelenton';
import { Suspense } from 'react';
import ShopCategoryClient, { BannerCategory } from './components/shopCategoryClient';
import { getAllProduct, getProductByCategory } from '@/service/product.service';

const ShopPage = async ({
    params
}: {
    params: Promise<{
        category: string;
    }>;
}) => {
    const category = (await params).category;
    const products = await getProductByCategory(category,0,10);
    console.log(products)
    return (
        <Suspense fallback={<Skelenton />}>
            <ShopCategoryClient category={category as BannerCategory} products={products} />
        </Suspense>
    );
};

export default ShopPage;
