import { Suspense } from 'react';
import ShopClient from './components/ShopClient';
import Skelenton from '@/components/Skelenton';

const ShopPage = async () => {
    return (
        <Suspense fallback={<Skelenton />}>
            <ShopClient />
        </Suspense>
    );
};

export default ShopPage;
