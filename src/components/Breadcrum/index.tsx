'use client';
import React from 'react';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
function Breadcrum({
    category,
    productName,
}: {
    category: string;
    productName: string;
}) {

    return (
        <div className="flex items-center gap-2 text-primary/80">
            <Link href={""} className=''>
                HOME
            </Link>
            <ChevronRight />
            <Link href={""} className=''>
                SHOP
            </Link>
            <ChevronRight />
            {category}
            <ChevronRight />
            {productName}
        </div>
    );
}


export default Breadcrum;