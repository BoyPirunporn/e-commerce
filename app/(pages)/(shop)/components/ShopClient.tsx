'use client';
import React, { Suspense } from 'react';
import Hero from './Hero';
import Popular from './Popular';
import Offers from './Offers';
import NewCollections from './NewsCollection';
import NewsLetters from './NewsLetters';
import HeroV2 from './HeroV2';
import { Skeleton } from '@/components/ui/skeleton';

type Props = {};

const ShopClient = (props: Props) => {
    return (
        <div className='mt-[80px]'>
            <HeroV2 />
            <div className="mt-24 container">
                <h1 className="text-2xl">Featured Products</h1>
                <Suspense fallback={<Skeleton />}>
                    <Popular />
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