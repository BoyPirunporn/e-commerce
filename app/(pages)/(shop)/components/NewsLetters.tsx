import React from 'react';

const NewsLetters = () => {
    return (
        <div className="bg-custom-gradient ">
            <div className='container xl:w-[65%] h-[500px] flex flex-col items-center justify-center m-auto  gap-[30px]'>
                <h1 className='text-[#454545] text-center text-3xl xl:text-5xl font-bold'>Get Exclusive Offers On your Email</h1>
                <p className='text-[#454545] text-xl'>Subscribe to our newletter and stay updated</p>
                <div className='flex flex-row items-center justify-center bg-white max-w-[730px] w-full h-[70px] rounded-full border border-[#e3e3e3]'>
                    <input type="email" placeholder="Your Email id" className='w-full ml-[30px] border-none outline-none font-[Poppins] text-[16px] text-text' />
                    <button className='max-w-[210px] w-full px-10 h-[70px] rounded-full bg-black text-white cursor-pointer'>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default NewsLetters;
