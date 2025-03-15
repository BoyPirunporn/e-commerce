import { Suspense } from 'react';
import ShopCategoryClient, { BannerCategory } from './components/shopCategoryClient';
import Skelenton from '@/components/Skelenton';

const ShopPage = async ({
    params
}: {
    params: Promise<{
        category: string;
    }>;
}) => {
    return (
        <Suspense fallback={<Skelenton />}>
            <ShopCategoryClient category={(await params).category as BannerCategory} />
        </Suspense>
    );
};

export default ShopPage;
