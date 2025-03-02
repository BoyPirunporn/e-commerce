'use client';
import { motion, Variants } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { routes } from './Navbar';
import { usePathname } from 'next/navigation';

const MobileNav = ({
    open,
    variants,
    onClick
}: {
    open: boolean;
    variants: Variants;
    onClick: () => void;
}) => {
    const pathname = usePathname();
    return (
        <motion.aside
            animate={open ? "open" : "closed"}
            className="flex flex-col justify-center items-center bg-white text-color">
            <motion.div
                variants={variants}
                className="fixed top-0 left-0 bottom-0 w-full bg-white flex flex-col">

                <div className="flex flex-col h-full items-center justify-center gap-5 text-3xl">
                    <ul className='flex flex-col gap-5'>
                        {routes.map((route) => (
                            <Link href={route.path} key={route.path} onClick={onClick}>
                                {route.label}{pathname === route.path ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : null}
                            </Link>
                        ))}
                    </ul>

                </div>
                <div className="mt-auto pb-20 flex justify-center w-full" onClick={onClick}>
                    <Link href={"/sign-in"} className='border-none text-white bg-primary py-3 px-5 rounded-full w-[200px] text-center'>
                        Login
                    </Link>
                </div>
            </motion.div>

        </motion.aside>
    );
};

export default MobileNav;