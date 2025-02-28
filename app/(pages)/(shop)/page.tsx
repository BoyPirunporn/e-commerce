import Hero from '@/components/Hero';
import NewCollections from '@/components/NewCollection';
import NewsLetters from '@/components/NewsLetters';
import Offers from '@/components/Offers';
import Popular from '@/components/Popular';
import React from 'react';

const ShopPage = () => {
    return (
        <div >
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetters />
        </div>
    );
}

export default ShopPage;
