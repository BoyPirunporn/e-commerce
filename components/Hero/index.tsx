'use client'
import React from 'react';
import './hero.css'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <div className="bg-custom-gradient  mx-auto w-full pt-[110px] py-[60px]">
            <div className="container flex flex-col md:flex-row">
                <div className="hero-left">
                    <motion.h2  className='text-[#090909] text-[26px] font-[600] '>NEEW ARRIVALS ONLY</motion.h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>new</p>
                            <img src="/assets/Frontend_Assets/hand_icon.png" alt="" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                        <img src="/assets/Frontend_Assets/arrow.png" alt="" />
                    </div>
                </div>
                <div className="hero-right">
                    <img src="/assets/Frontend_Assets/hero_image.png" alt="" />
                </div>
            </div>

        </div>
    );
}

export default Hero;
