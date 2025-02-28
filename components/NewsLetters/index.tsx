import React from 'react';

const NewsLetters = () => {
    return (
        <div className="bg-custom-gradient ">
            <div className=' xl:w-[65%] h-[500px] flex flex-col items-center justify-center m-auto  gap-[30px]'>
                <h1 className='text-[#454545] text-center text-5xl font-bold'>Get Exclusive Offers On your Email</h1>
                <p className='text-[#454545] text-xl'>Subscribe to our newletter and stay updated</p>
                <div className='flex flex-row items-center justify-center bg-white xl:w-[730px] h-[70px] rounded-full border border-[#e3e3e3]'>
                    <input type="email" placeholder="Your Email id" className='xl:w-[500px] w-full md:w-[300px] ml-[30px] border-none outline-none font-[Poppins] text-[16px] text-text' />
                    <button className='xl:w-[210px] w-auto px-10 h-[70px] rounded-full bg-black text-white cursor-pointer'>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default NewsLetters;
