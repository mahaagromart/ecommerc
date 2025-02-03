'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import Imageone from '../../../../public/images/homebanner/img..svg';
import Imagethree from '../../../../public/images/homebanner/drone.svg';
import Imagefour from '../../../../public/images/homebanner/noga.svg';
import Imagefive from '../../../../public/images/homebanner/bannerfive.svg';

const Banner = () => {
    return (
        <div className="container mx-auto max-w-screen-3xl py-3 p-1 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Swiper Component for First Banner */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                autoplay={{ delay: 3000 }}
                className="w-full relative"
            >
                <SwiperSlide>
                    <div className="bg-[#9ecf3f] rounded-2xl shadow-md p-3 flex flex-col items-center md:items-center">
                        <div className="flex justify-center">
                            <Image
                                src={Imageone}
                                alt="Grocery Items"
                                className="rounded-md"
                                width={270}
                                height={270}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center mb-2">
                            <h2 className="text-xl font-bold mb-8 text-white">Get Up to 30%* OFF</h2>
                            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 mb-2 rounded-md">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#9ecf3f] rounded-2xl shadow-md p-3 flex flex-col items-center md:items-center">
                        <div className="flex justify-center">
                            <Image
                                src={Imageone}
                                alt="Grocery Items"
                                className="rounded-md"
                                width={270}
                                height={270}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center mb-2">
                            <h2 className="text-xl font-bold mb-8 text-white">Get Up to 30%* OFF</h2>
                            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 mb-2 rounded-md">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>

            {/* Second Banner */}
            <div className="bg-white rounded-2xl space-y-3">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true, el: '.swiper-pagination' }}
                    autoplay={{ delay: 4000 }}
                    className="w-full relative"
                >
                    <SwiperSlide>
                        <div className="bg-yellow-400 p-2 rounded-2xl shadow-md flex flex-col items-center md:items-center sm:flex-row">
                            <Image
                                src={Imagethree}
                                alt="Drone Service"
                                className="rounded-md mb-4 sm:mb-0 sm:mr-4"
                                width={180}
                                height={190}
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="text-lg font-bold text-black font-poppins mb-4">Get Drone Service At</h2>
                                <p className="mb-4 text-black">Get up 50% off</p>
                                <button className="bg-black hover:bg-gray-800 text-white font-bold text-sm py-2 px-4 rounded-md mb-10">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-yellow-400 p-2 rounded-2xl shadow-md flex flex-col items-center md:items-center sm:flex-row">
                            <Image
                                src={Imagethree}
                                alt="Drone Service"
                                className="rounded-md mb-4 sm:mb-0 sm:mr-4"
                                width={180}
                                height={200}
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="text-lg font-bold text-black font-poppins mb-4">Get Drone Service At</h2>
                                <p className="mb-4 text-black">Get up 50% off</p>
                                <button className="bg-black hover:bg-gray-800 text-white font-bold text-sm py-2 px-4 rounded-md mb-10">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination p-4"></div>
                </Swiper>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true, el: '.swiper-pagination' }}
                    autoplay={{ delay: 4000 }}
                    className="w-full relative"
                >
                    <SwiperSlide>
                        <div className="bg-[#ff574c] p-2 rounded-2xl shadow-md flex flex-col items-center md:items-center sm:flex-row">
                            <Image
                                src={Imagefour}
                                alt="Plant Protection"
                                className="rounded-md mb-4 sm:mb-0 sm:mr-4"
                                width={180}
                                height={180}
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="text-lg font-bold text-white font-poppins mb-4">Protect Your Plant</h2>
                                <button className="bg-black hover:bg-gray-800 text-white font-bold text-sm py-2 px-4 rounded-md mb-10">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#ff574c] p-2 rounded-2xl shadow-md flex flex-col items-center md:items-center sm:flex-row">
                            <Image
                                src={Imagefour}
                                alt="Plant Protection"
                                className="rounded-md mb-4 sm:mb-0 sm:mr-4"
                                width={180}
                                height={180}
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="text-lg font-bold text-white font-poppins mb-4">Protect Your Plant</h2>
                                <button className="bg-black hover:bg-gray-800 text-white font-bold text-sm py-2 px-4 rounded-md mb-10">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination p-4"></div>
                </Swiper>
            </div>

            {/* Third Banner */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                autoplay={{ delay: 3000 }}
                className="w-full relative"
            >
                <SwiperSlide>
                    <div className="bg-[#e78f54] rounded-2xl shadow-md p-3 flex flex-col items-center md:items-center">
                        <div className="flex justify-center">
                            <Image
                                src={Imagefive}
                                alt="Grocery Items"
                                className="rounded-md"
                                width={270}
                                height={270}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center mb-2">
                            <h2 className="text-xl font-bold mb-8 text-white">Get Up to 30%* OFF</h2>
                            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 mb-2 rounded-md">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#e78f54] rounded-2xl shadow-md p-3 flex flex-col items-center md:items-center">
                        <div className="flex justify-center">
                            <Image
                                src={Imagefive}
                                alt="Grocery Items"
                                className="rounded-md"
                                width={270}
                                height={270}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center mb-2">
                            <h2 className="text-xl font-bold mb-8 text-white">Get Up to 30%* OFF</h2>
                            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 mb-2 rounded-md">
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