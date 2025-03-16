import React, { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from "swiper/types"; // ✅ นำเข้า type ของ Swiper

import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import Link from 'next/link';
type Props = {};
const slides = [
    {
        id: 1,
        title: "Summer Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Winter Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Spring Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];
const HeroV2 = (props: Props) => {
    const [current, setCurrent] = useState(0);

    const swiperRef = useRef<SwiperType | null>(null);

    const goToSlide = (index: number) => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    };
    return (
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
            modules={[Navigation, Autoplay]}
            loop={true}
            freeMode={true}
            speed={1500}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            className='h-[calc(100vh)] overflow-hidden'>
            <div
                className="relative w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}>
                            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                                <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                                    {slide.description}
                                </h2>
                                <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                                    {slide.title}
                                </h1>
                                <Link href={slide.url}>
                                    <button className="rounded-md bg-black text-white py-3 px-4 ">
                                        SHOP NOW
                                    </button>
                                </Link>
                            </div>
                            <div className="h-1/2 xl:w-1/2 xl:h-[calc(100vh-80px)]  relative">
                                <Image
                                    src={slide.img}
                                    alt=""
                                    fill
                                    sizes="100%"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </div>
            <div className="absolute z-10 m-auto left-1/2 bottom-8 flex gap-4">
                {slides.map((slide, index) => (
                    <div
                        className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""
                            }`}
                        key={slide.id}
                        onClick={() => goToSlide(index)}
                    >
                        {current === index && (
                            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>

        </Swiper>
    );
};

export default HeroV2;