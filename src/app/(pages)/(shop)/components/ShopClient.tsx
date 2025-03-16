'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import HeroV2 from './HeroV2';
import NewCollections from './NewsCollection';
import NewsLetters from './NewsLetters';
import Popular from './Popular';
import { Product } from '@/types';

type Props = {
    featureProduct: Product[];
};

const ShopClient = ({
    featureProduct
}: Props) => {
    return (
        <div className='mt-[80px]'>
            <HeroV2 />
            <div className="mt-24 container">
                <h1 className="text-2xl">Featured Products</h1>
                <Suspense fallback={<Skeleton />}>
                    <Popular featureProduct={featureProduct}/>
                </Suspense>
            </div>
            <div className="mt-24 container">
                <h1 className="text-2xl px-4  mb-12">
                    New Collection
                </h1>
                <Suspense fallback={<Skeleton />}>
                    <NewCollections />
                </Suspense>
            </div>

            <NewsLetters />
        </div>
    );
};

export default ShopClient;