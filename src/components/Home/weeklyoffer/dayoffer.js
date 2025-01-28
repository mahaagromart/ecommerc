'use client';  // This tells Next.js that the component should run on the client side.
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

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
        <div className="border-4  bg-[#D8F2DE] border-red-500 container mx-auto  rounded-xl">
            {/* Top Section: Day of the Week and Time */}
            <div className="p-2 rounded-lg shadow-md flex bg-[#FEFDF3] justify-between items-center flex-wrap">
                {/* Left Section: Deal of the Week */}
                <div className="text-xl font-semibold flex-grow">
                    <h1 className="text-2xl font-bold">Deal of the Week</h1>
                </div>

                {/* Right Section: Countdown Timer */}
                <div className="text-xl font-semibold">
                    <div className="flex p-2 rounded-lg space-x-2">
                        <div className="countdown-section text-white bg-red-500 px-2 rounded-lg">
                            <div className="countdown-number">{String(daysLeft).padStart(2, '0')}</div>
                            <div className="countdown-unit">Day</div>
                        </div>
                        <div className="countdown-section text-white bg-red-500 px-2 rounded-lg">
                            <div className="countdown-number">{String(hoursLeft).padStart(2, '0')}</div>
                            <div className="countdown-unit">Hr</div>
                        </div>
                        <div className="countdown-section text-white bg-red-500 px-2 rounded-lg">
                            <div className="countdown-number">{String(minutesLeft).padStart(2, '0')}</div>
                            <div className="countdown-unit">Min</div>
                        </div>
                        <div className="countdown-section text-white bg-red-500 px-2 rounded-lg">
                            <div className="countdown-number">{String(secondsLeft).padStart(2, '0')}</div>
                            <div className="countdown-unit">Secs</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Image and Product Columns */}
            <div className="flex  p-2 rounded-md shadow-sm mt-4 flex-col md:flex-row">
                {/* Left Side Image - Online Image */}
                <div className="w-full md:w-1/3 ">
                    <img
                        src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/12/deal-women.png"
                        alt="Beverage"
                        className="w-full h-auto rounded-md"
                    />
                </div>

                {/* Right Side - 3 Columns */}
                <div className="w-full md:w-2/2 flex flex-col md:grid md:grid-cols-3 gap-2">
                    {/* First Column */}
                    <div className='bg-white rounded-lg'>
                        <div className="rounded-md shadow-sm">
                            <div className="space-y-2  p-6 ">
                                <div className="flex items-center justify-between">
                                    <ul className="flex space-x-1">
                                        <li className="bg-gray-200 px-1 py-0.5 rounded">
                                            <a href="https://www.radiustheme.com/demo/wordpress/themes/zilly/product-category/vegetables/" rel="tag">Vegetables</a>
                                        </li>
                                    </ul>
                                    <FaHeart className="text-red-500 text-lg" />
                                </div>
                                <div className="relative">
                                    <img
                                        src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2024/01/veg_5-400x332.png"
                                        alt="Whole Foods Market, Organic Trimmed Green Beans, 12 oz"
                                        className="w-full h-auto rounded"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-md font-semibold">Whole Foods Market, Organic Trimmed Green Beans, 12 oz</h2>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-green-500 font-bold text-sm">$3.00 - $8.00</span>
                                        <span className="bg-red-500 text-white px-1 py-0.5 rounded text-xs">-77%</span>
                                    </div>
                                    <div className="flex items-center space-x-1 mt-1">
                                        <span className="text-yellow-500 text-sm">★★★★★</span>
                                        <span className="text-sm">(5.00)</span>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="space-y-2  ">
                        <div className="relative flex items-start p-3 space-x-2 bg-white rounded-lg">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto rounded"
                            />
                            <div className="flex-1">
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
                        <div className="relative flex items-start p-3 space-x-2 bg-white rounded-lg">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto rounded"
                            />
                            <div className="flex-1">
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
                        <div className="relative flex items-start p-3 space-x-2 bg-white rounded-lg">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto rounded"
                            />
                            <div className="flex-1">
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
                    <div className="space-y-2 ">
                        <div className="relative flex items-start p-3 space-x-2 bg-white rounded-lg">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto rounded"
                            />
                            <div className="flex-1">
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
                        <div className="relative flex items-start p-3 space-x-2 bg-white rounded-lg">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto rounded"
                            />
                            <div className="flex-1">
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
                        <div className="relative flex items-start p-3 space-x-2 bg-white rounded-lg">
                            <img
                                src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/chips_3-100x100.png"
                                alt="Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
                                className="w-1/3 h-auto rounded"
                            />
                            <div className="flex-1">
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
