'use client'
import { AlertDialogDemo } from '@/components/alert-dialog';
import React, { useEffect, useState } from 'react';


const AlertProvider = () => {
    const [isMounted,setIsMounted] = useState(false);

    useEffect(() => {
        console.log("✅ AlertProvider mounted"); // ตรวจสอบว่า Provider ทำงาน
        setIsMounted(true);
    },[]);

    if(!isMounted) return null;
    return (
        <AlertDialogDemo />
    );
};

export default AlertProvider;