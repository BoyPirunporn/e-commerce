'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';


const baners = [
    {
        id: "men",
        head: "NEW ARRIVALS ONLY",
        new: "NEW Season",
        sub: "Men Collections",
        image: ""
    },
    {
        id: "women",
        head: "NEW ARRIVALS ONLY",
        new: "NEW Season",
        sub: "Men Collections",
        image: ""
    }
];

const Hero = () => {
    const [isMen, setIsMen] = useState(true);

    // เปลี่ยน Banner ทุก 5 วินาที
    useEffect(() => {
        const interval = setInterval(() => {
            setIsMen((prev) => !prev);
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <motion.div key={"hero"} className=" mx-auto w-full pb-20">
            <AnimatePresence mode='wait'>
                {isMen ? (
                    <motion.div
                        key="men"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className=" relative w-full">

                        <img src={"/assets/freestocks-_3Q3tsJ01nc-unsplash.jpg"} alt='' className='object-cover h-[calc(100vh_-_100px)] w-full' />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-4xl font-bold ">
                            <motion.h2
                                key={"men-h2"}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, delay: .3 }}
                                className='text-red text-[26px] font-[600] '>NEEW ARRIVALS ONLY</motion.h2>
                            <div className='flex flex-col gap-[10px]'>
                                <motion.p
                                    key={"men-p1"}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, delay: .5 }}
                                    className='md:text-3xl text-xl xl:text-6xl '>New Season</motion.p>
                                <motion.p
                                    key={"men-p2"}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, delay: .8 }}
                                    className='md:text-3xl text-xl xl:text-6xl'>Men Collection</motion.p>
                            </div>
                        </div>
                    </motion.div>
                )
                    : (
                        <motion.div
                            key="women"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                            className=" relative w-full">

                            <img src={"/assets/woman-2564660_1920.jpg"} alt='' className='object-cover h-[calc(100vh_-_100px)] w-full' />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-4xl font-bold ">
                                <motion.h2
                                    key={"men-h2"}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, delay: .3 }}
                                    className='text-red text-[26px] font-[600] '>NEEW ARRIVALS ONLY</motion.h2>
                                <div className='flex flex-col gap-[10px]'>
                                    <motion.p
                                        key={"men-p1"}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.8, delay: .5 }}
                                        className='md:text-3xl text-xl xl:text-6xl '>New Season</motion.p>
                                    <motion.p
                                        key={"men-p2"}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.8, delay: .8 }}
                                        className='md:text-3xl text-xl xl:text-6xl'>Men Collection</motion.p>
                                </div>
                            </div>
                        </motion.div>
                    )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Hero;
