'use client';
import React from 'react';
import Hero from './Hero';
import Popular from './Popular';
import Offers from './Offers';
import NewCollections from './NewsCollection';
import NewsLetters from './NewsLetters';

type Props = {};

const ShopClient = (props: Props) => {
    return (
        <div className='py-[60px]'>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetters />
        </div>
    );
};

export default ShopClient;