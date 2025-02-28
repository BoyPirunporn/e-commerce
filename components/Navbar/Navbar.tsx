'use client';
import React, { useState } from 'react'
import "./nav.css"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { path: "/", label: "Shop" },
  { path: "/shop-category/men", label: "Men" },
  { path: "/shop-category/women", label: "Women" },
  { path: "/shop-category/kid", label: "Kids" },
];


function Navbar() {

  const pathname = usePathname();
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="flex flex-row gap-2 items-center">
        <img src="/assets/Frontend_Assets/logo.png" alt="logo" />
        <p className='text-text text-xl font-bold xl:text-3xl'>SHOPPER</p>
      </div>
      <ul className="flex flex-row gap-[50px] text-text/80 text-xl items-center">
        {routes.map((route, index) => {
          return (
            <li key={index} >
              <Link href={route.path}>
                {route.label}{pathname === route.path ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : null}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="nav-login-cart">
        <Link href={"/sign-in"} className='flex w-[157px] justify-center items-center text-[#7a7a7a] h-[58px]  border rounded-full border-[#7a7a7a] cursor-pointer'>
          Login
        </Link>
        <Link href={"/cart"}>
          <img src="/assets/Frontend_Assets/cart_icon.png" alt='' />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar