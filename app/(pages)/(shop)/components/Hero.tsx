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
        <motion.div key={"hero"} className="bg-custom-gradient  mx-auto w-full pt-[110px] py-[60px]">
            <div className="container">
                <AnimatePresence mode='wait'>
                    {isMen ? (
                        <motion.div
                            key="men"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                            className=" flex flex-col md:flex-row">
                            <div className="flex flex-1 flex-col gap-[20px]  leading-[1.1] justify-center items-center xl:items-start">
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
                                <div className="flex justify-center items-center gap-[15px] w-full max-w-[310px] h-[60px] rounded-xl mt-[30px] bg-[#ff4141] text-white text-base xl:text-[22px] font-[500]">
                                    <div>Latest Collection</div>
                                    <img src="/assets/Frontend_Assets/arrow.png" alt="" />
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center ">
                                <Image src="/assets/Frontend_Assets/hero_image.png" alt="" width={500} height={500} quality={100} className='object-contain' />
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
                                className="  flex flex-col md:flex-row">
                                <div className="flex flex-1 flex-col gap-[20px] justify-center leading-[1.1] items-center xl:items-start">
                                    <motion.h2
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{
                                            opacity: 1, x: 0, transition: {
                                                duration: 0.8, delay: .3
                                            }
                                        }}
                                        exit={{ opacity: 0, x: -50, }}
                                        className='text-red text-[26px] font-[600] '>NEEW ARRIVALS ONLY</motion.h2>
                                    <div className='flex flex-col gap-[10px]'>
                                        <motion.p
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{
                                                opacity: 1, x: 0, transition: {
                                                    duration: 0.8, delay: .5
                                                }
                                            }}
                                            exit={{ opacity: 0, x: -50, }}
                                            className='md:text-3xl text-xl xl:text-6xl '>New Season</motion.p>
                                        <motion.p
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{
                                                opacity: 1, x: 0, transition: {
                                                    duration: 0.8, delay: .7
                                                }
                                            }}
                                            exit={{ opacity: 0, x: -50, }}
                                            className='md:text-3xl text-xl xl:text-6xl '>Women Collection</motion.p>
                                    </div>
                                    <div className="flex justify-center items-center gap-[15px] w-full max-w-[310px] h-[60px] rounded-xl mt-[30px] bg-[#ff4141] text-white text-base xl:text-[22px] font-[500]">
                                        <div>Latest Collection</div>
                                        <img src="/assets/Frontend_Assets/arrow.png" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-center ">
                                    <Image src="/assets/Frontend_Assets/hero_image.png" alt="" width={500} height={500} quality={100} className='object-contain' />
                                </div>
                            </motion.div>
                        )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Hero;
