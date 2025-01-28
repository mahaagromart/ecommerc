'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';


import Imageone from '../../../../public/images/homebanner/img..svg';
import Imagefour from '../../../../public/images/homebanner/imgfour.svg';
import Imagetwo from '../../../../public/images/homebanner/imgtwo.svg';
import Imagethree from '../../../../public/images/homebanner/imgthree.svg';

const Banner = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-2xl container mx-auto py-2 p-2">
            
            {/* Swiper Component for First Banner */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                autoplay={{ delay: 3000 }}
                className="w-full relative"
            >
                <SwiperSlide>
                    <div className="bg-[#9ecf3f] rounded-2xl shadow-md p-6 flex flex-col items-center">
                        <div className="flex justify-center mb-4">
                            <Image
                                src={Imageone}
                                alt="Grocery Items"
                                className="rounded-md"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center mb-2">
                            <h2 className="text-xl font-bold mb-2 text-white">Get Up to 30%* OFF</h2>
                            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md mt-2">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#9ecf3f] rounded-2xl shadow-md p-6 flex flex-col items-center">
                        <div className="flex justify-center mb-4">
                            <Image
                                src={Imageone}
                                alt="Grocery Items"
                                className="rounded-md"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center mb-2">
                            <h2 className="text-xl font-bold mb-2 text-white">Get hii Up to 30%* OFF</h2>
                            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md mt-2">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Add more SwiperSlide components if needed */}
                <div className="swiper-pagination"></div>
            </Swiper>

            {/* Second Banner */}
            <div className="bg-white rounded-2xl shadow-md space-y-4">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true, el: '.swiper-pagination' }}
                    autoplay={{ delay: 4000 }}
                    className="w-full relative"
                >
                    <SwiperSlide>
                        {/* Milk Chocolate */}
                        <div className="bg-orange-400 p-4 rounded-2xl shadow-md flex flex-col items-center sm:flex-row">
                            <Image
                                src={Imagethree}
                                alt="Milk Chocolate"
                                className="rounded-md mb-4 sm:mb-0 sm:mr-4"
                                width={170}
                                height={170}
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="text-xl font-bold text-white mb-4">DAILY  ITEMS</h2>
                                <p className="mb-4 text-white"> Offers Available</p>
                                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md mt-2">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Milk Chocolate */}
                        <div className="bg-orange-400 p-4 rounded-2xl shadow-md flex flex-col items-center sm:flex-row">
                            <Image
                                src={Imagethree}
                                alt="Milk Chocolate"
                                className="rounded-md mb-4 sm:mb-0 sm:mr-4"
                                width={170}
                                height={170}
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="text-xl font-bold text-white mb-4">DAILY  ITEMS</h2>
                                <p className="mb-4 text-white">Offers Available</p>
                                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md mt-2">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                </Swiper>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true, el: '.swiper-pagination' }}
                    autoplay={{ delay: 6000 }}
                    className="w-full relative"
                >
                    <SwiperSlide>
                        {/* Household Items */}
                        <div className="bg-yellow-400 p-4 px-6 rounded-2xl shadow-md flex flex-col items-center sm:flex-row">
                            <Image
                                src={Imagetwo}
                                alt="Household Items"
                                className="rounded-md mb-4 sm:mb-0 sm:mr-4"
                                width={160}
                                height={160}
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="text-xl font-bold mb-4">DAILY  ITEMS</h2>
                                <p className="mb-4">Offers Available</p>
                                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md mt-2">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Household Items */}
                        <div className="bg-yellow-400 p-4 px-6 rounded-2xl shadow-md flex flex-col items-center sm:flex-row">
                            <Image
                                src={Imagetwo}
                                alt="Household Items"
                                className="rounded-md mb-4 sm:mb-0 sm:mr-4"
                                width={160}
                                height={160}
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="text-xl font-bold mb-4">DAILY  ITEMS</h2>
                                <p className="mb-4"> Offers Available</p>
                                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md mt-2">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
            
            {/* Third Banner */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                autoplay={{ delay: 5000 }}
                className="w-full relative"
            >
                <SwiperSlide>
                    <div className="bg-[#9ecf3f] rounded-2xl shadow-md p-6 flex flex-col items-center">
                        <div className="flex justify-center mb-4">
                            <Image
                                src={Imagefour}
                                alt="Grocery Items"
                                className="rounded-md"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center mb-2">
                            <h2 className="text-xl font-bold mb-2 text-white">Get Up to 30%* OFF</h2>
                            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md mt-2">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#9ecf3f] rounded-2xl shadow-md p-6 flex flex-col items-center">
                        <div className="flex justify-center mb-4">
                            <Image
                                src={Imagefour}
                                alt="Grocery Items"
                                className="rounded-md"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center mb-2">
                            <h2 className="text-xl font-bold mb-2 text-white">Get hii Up to 30%* OFF</h2>
                            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md mt-2">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>
        </div>
    );
};

export default Banner;