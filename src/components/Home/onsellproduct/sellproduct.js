'use client';  // This tells Next.js that the component should run on the client side.
import Image from 'next/image'
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import img from "../../../../public/images/fruitproduct/fruits.svg"
const Banner = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [daysLeft, setDaysLeft] = useState(0);
    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);

    useEffect(() => {
        // Update the time every second
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);

            // Set the target date for countdown
            const targetDate = new Date('2024-12-01');
            const timeDiff = targetDate - now;

            if (timeDiff > 0) {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                setDaysLeft(days);
                setHoursLeft(hours);
                setMinutesLeft(minutes);
                setSecondsLeft(seconds);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mx-auto rounded-xl">

            {/* Bottom Section: Image and Product Columns */}
            <div className="flex p-2 rounded-md shadow-sm mt-4 flex-col md:flex-row">
                {/* Right Side - 3 Columns */}
                <div className="w-full md:w-2/2 flex flex-col md:grid md:grid-cols-3 gap-2">
                    {/* First Column */}
                    <div className='rounded-md'>
                        {/* Top Section: Day of the Week and Time */}
                        <div className="p-2 rounded-lg justify-between items-center py-6 flex-wrap">
                            {/* Left Section: Deal of the Week */}
                            <div className="text-xl font-semibold flex-grow">
                                <h1 className="text-2xl font-bold">On Sell Products</h1>
                            </div>
                        </div>

                        <div className="space-y-1 p-8 bg-grey-500 rounded-lg border-2">
                            <div className="flex items-center justify-between">
                                <ul className="flex space-x-1">
                                    <li className="bg-gray-200 px-1 py-0.5 rounded">
                                        <a href="https://www.radiustheme.com/demo/wordpress/themes/zilly/product-category/vegetables/" rel="tag">Vegetables</a>
                                    </li>
                                </ul>
                                <FaHeart className="text-red-500 text-base" />
                            </div>
                            <div className="relative">
                                <Image
                                    src={img}
                                    alt="Whole Foods Market, Organic Trimmed Green Beans, 12 oz"
                                    className="rounded"
                                    width={281}  // Adjust width as needed
                                    height={400} // Adjust height as needed
                                />
                            </div>
                            <div>
                                <h2 className="text-sm font-semibold">Whole Foods Market, Organic Trimmed Green Beans, 12 oz</h2>
                                <div className="flex items-center space-x-1">
                                    <span className="text-green-500 font-bold text-xs">$3.00 - $8.00</span>
                                    <span className="bg-red-500 text-white px-1 py-0.5 rounded text-xs">-77%</span>
                                </div>
                                <div className="flex items-center space-x-1 mt-1">
                                    <span className="text-yellow-500 text-xs">★★★★★</span>
                                    <span className="text-xs">(5.00)</span>
                                </div>
                                <div className="flex space-x-1 mt-2">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Add to Cart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Second Column */}
                    <div className="space-y-1">
                        <div className="flex justify-end items-center py-4">
                            <button className="flex border-2 p-2 items-center text-black-500">
                                See More <FaArrowRight className="ml-1" />
                            </button>
                        </div>

                        <div className="relative flex items-start  space-x-2 border-2 bg-grey-500 rounded-lg">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto border-r-0 border-gray-300 mx-2 sm:border-r-2"
                            />

                            <div className="flex-1 p-2">
                                <h2 className="text-md font-semibold">Delicious Lay's Potato Chips, Classic, 8 oz Bag</h2>
                                <div className="flex items-center space-x-1">
                                    <span className="line-through text-gray-500 text-sm">$21.00</span>
                                    <span className="text-green-500 font-bold text-sm">$12.00</span>
                                </div>
                                <div className="flex items-center space-x-1 mt-1">
                                    <span className="text-yellow-500 text-sm">★★★★☆</span>
                                    <span className="text-sm">(4.00)</span>
                                </div>
                                <div className="flex space-x-1 mt-2">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Add to Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-start  space-x-2 border-2 bg-grey-500 rounded-lg ">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto border-r-0 border-gray-300 mx-2 sm:border-r-2"
                            />

                            <div className="flex-1 p-2">
                                <h2 className="text-md font-semibold">Delicious Lay's Potato Chips, Classic, 8 oz Bag</h2>
                                <div className="flex items-center space-x-1">
                                    <span className="line-through text-gray-500 text-sm">$21.00</span>
                                    <span className="text-green-500 font-bold text-sm">$12.00</span>
                                </div>
                                <div className="flex items-center space-x-1 mt-1">
                                    <span className="text-yellow-500 text-sm">★★★★☆</span>
                                    <span className="text-sm">(4.00)</span>
                                </div>
                                <div className="flex space-x-1 mt-2">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-start  space-x-2 border-2 bg-grey-500 rounded-lg">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto border-r-0 border-gray-300 mx-2 sm:border-r-2"
                            />

                            <div className="flex-1 p-2">
                                <h2 className="text-md font-semibold">Delicious Lay's Potato Chips, Classic, 8 oz Bag</h2>
                                <div className="flex items-center space-x-1">
                                    <span className="line-through text-gray-500 text-sm">$21.00</span>
                                    <span className="text-green-500 font-bold text-sm">$12.00</span>
                                </div>
                                <div className="flex items-center space-x-1 mt-1">
                                    <span className="text-yellow-500 text-sm">★★★★☆</span>
                                    <span className="text-sm">(4.00)</span>
                                </div>
                                <div className="flex space-x-1 mt-2">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third Column */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-center py-4">
                            <h2 className="text-2xl font-bold">Best Seller</h2>
                            <button className="flex border-2 p-2 items-center text-black-500">
                                See More <FaArrowRight className="ml-1" />
                            </button>
                        </div>
                        <div className="relative flex items-start  space-x-2 border-2 bg-grey-500 rounded-lg">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto border-r-0 border-gray-300 mx-2 sm:border-r-2"
                            />

                            <div className="flex-1 p-2">
                                <h2 className="text-md font-semibold">Delicious Lay's Potato Chips, Classic, 8 oz Bag</h2>
                                <div className="flex items-center space-x-1">
                                    <span className="line-through text-gray-500 text-sm">$21.00</span>
                                    <span className="text-green-500 font-bold text-sm">$12.00</span>
                                </div>
                                <div className="flex items-center space-x-1 mt-1">
                                    <span className="text-yellow-500 text-sm">★★★★☆</span>
                                    <span className="text-sm">(4.00)</span>
                                </div>
                                <div className="flex space-x-1 mt-2">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Add to Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-start  space-x-2 border-2 bg-grey-500 rounded-lg ">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto border-r-0 border-gray-300 mx-2 sm:border-r-2"
                            />

                            <div className="flex-1 p-2">
                                <h2 className="text-md font-semibold">Delicious Lay's Potato Chips, Classic, 8 oz Bag</h2>
                                <div className="flex items-center space-x-1">
                                    <span className="line-through text-gray-500 text-sm">$21.00</span>
                                    <span className="text-green-500 font-bold text-sm">$12.00</span>
                                </div>
                                <div className="flex items-center space-x-1 mt-1">
                                    <span className="text-yellow-500 text-sm">★★★★☆</span>
                                    <span className="text-sm">(4.00)</span>
                                </div>
                                <div className="flex space-x-1 mt-2">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-start  space-x-2 border-2 bg-grey-500 rounded-lg">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto border-r-0 border-gray-300 mx-2 sm:border-r-2"
                            />

                            <div className="flex-1 p-2">
                                <h2 className="text-md font-semibold">Delicious Lay's Potato Chips, Classic, 8 oz Bag</h2>
                                <div className="flex items-center space-x-1">
                                    <span className="line-through text-gray-500 text-sm">$21.00</span>
                                    <span className="text-green-500 font-bold text-sm">$12.00</span>
                                </div>
                                <div className="flex items-center space-x-1 mt-1">
                                    <span className="text-yellow-500 text-sm">★★★★☆</span>
                                    <span className="text-sm">(4.00)</span>
                                </div>
                                <div className="flex space-x-1 mt-2">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;