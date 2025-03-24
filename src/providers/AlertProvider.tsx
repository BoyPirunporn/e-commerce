'use client'
import { AlertDialogDemo } from '@/components/alert-dialog';
import React, { useEffect, useState } from 'react';


const AlertProvider = () => {
    const [isMounted,setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMounted) return null;
    return (
        <AlertDialogDemo />
    );
};

export default AlertProvider;