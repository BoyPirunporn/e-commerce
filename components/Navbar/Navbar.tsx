'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import MobileNav from './MobileNavbar';
import useCartItemStore from '@/zustandStore/cart-store';


const variants: Variants = {
  open: {
    clipPath: "circle(1200px at 88% 50px)",
    transition: {
      type: "spring",
      stiffness: 20
    }
  },
  closed: {
    clipPath: "circle(0 at 88% 50px)",
    transition: {
      // type: "spring",
      // stiffness: 500,
      // damping: 10
    }
  }
};

export const routes = [
  { path: "/", label: "Shop" },
  { path: "/shop-category/men", label: "Men" },
  { path: "/shop-category/women", label: "Women" },
  { path: "/shop-category/kid", label: "Kids" },
];


function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { cartItems } = useCartItemStore();
  return (
    <div className='flex fixed top-0 left-0 right-0 z-10  lg:justify-around p-[16px] bg-white'>
      <div className="flex flex-row gap-2 items-center ">
        <img src="/assets/Frontend_Assets/logo.png" alt="logo" />
        <p className='text-lg font-bold xl:text-3xl'>SHOPPER</p>
      </div>
      <ul className="hidden lg:flex flex-row gap-[50px] text-text/80 text-xl items-center">
        {routes.map((route, index) => {
          return (
            <li key={index} className='text-base lg:text-lg xl:text-xl'>
              <Link href={route.path}>
                {route.label}{pathname === route.path ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : null}
              </Link>
            </li>
          );
        })}
      </ul>

      <motion.div animate={open ? "open" : "closed"} className="flex items-center gap-[45px] ml-auto lg:ml-0">
        <Link href={"/sign-in"} className='hidden lg:flex py-5 w-[157px] max-w-[157px] justify-center items-center text-[#7a7a7a] h-[58px]  border rounded-full border-[#7a7a7a] cursor-pointer'>
          Login
        </Link>
        <Link className='relative' href={"/cart"}>
          <ShoppingCart size={30} />
          <div className="absolute bg-red -top-3 -right-4 bottom-0  rounded-full w-6 h-6 text-center text-white">{cartItems.length}</div>
        </Link>
        <button onClick={() => setOpen(prve => !prve)} className='text-center lg:hidden cursor-pointer rounded-full h-[25px] z-10  bg-transparent border-none items-center flex w-full'>
          <svg width="23" height="23" viewBox="0 0 23 23" d={"M 2 9.423 L 20 9.423"}>
            <motion.path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
              initial={"closed"}
              animate={open ? "open" : "closed"}
              strokeWidth="3" stroke="black" strokeLinecap="round" />
            <motion.path strokeWidth="3" stroke="black" d={"M 2 9.423 L 20 9.423"}
              initial={"closed"}
              animate={open ? "open" : "closed"}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              strokeLinecap="round"
            />
            <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
              initial="closed"
              animate={open ? "open" : "closed"}
            />
          </svg>
        </button>

        <AnimatePresence mode='wait'>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1
            }}>
            <MobileNav open={open} variants={variants} onClick={() => setOpen(false)} />
          </motion.div>
        </AnimatePresence>
      </motion.div>


    </div >
  );
}

export default Navbar;