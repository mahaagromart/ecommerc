import Image from 'next/image';
import logo from "../../../public/images/img/logo.webp";
import { FiSearch, FiMenu } from 'react-icons/fi';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaCodeCompare } from "react-icons/fa6";
import { useState } from 'react';
import Topbar from '../Header/Topbar';
import Navbar from '../Header/Navbar';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State for category dropdown visibility

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            {/* Topbar */}
            <Topbar />

            <header className="max-w-screen-2xl mx-auto flex items-center justify-between  sm:px-7 lg:px-8 px-4 py-3">
                {/* Left side: Logo */}
                <div className="flex items-center space-x-4">
                    <Image src={logo} alt="Logo" className="h-auto w-[350px] sm:w-[350px] md:w-[200px] lg:w-[120px]" />
                </div>


                {/* Categories Dropdown */}
                <div className="relative hidden sm:block lg:block">
                    {/* Desktop View */}
                    <div className="hidden sm:flex">
                        <button
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)} // Toggle the dropdown
                            className="flex items-center space-x-2 bg-gray-100 px-2 py-2 rounded-lg text-lg sm:text-sm lg:text-base ease-in-out hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
                        >
                            <FiMenu size={20} /> {/* Icon added */}
                            <span className="text-sm sm:text-hidden lg:text-base">All Categories</span>
                        </button>
                        <div
                            className={`absolute left-0 w-full mt-2 bg-white shadow-xl rounded-lg transition-opacity duration-300 ${isCategoryOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}
                        >
                            <ul>
                                <li className="px-6 py-2 hover:bg-gray-200 rounded-md text-lg">Category 1</li>
                                <li className="px-6 py-2 hover:bg-gray-200 rounded-md text-lg">Category 2</li>
                                <li className="px-6 py-2 hover:bg-gray-200 rounded-md text-lg">Category 3</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative sm:flex items-center space-x-4 w-full sm:w-auto lg:w-auto">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        className="px-6 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg transition-all duration-300 ease-in-out w-full sm:w-[300px] md:w-[360px] lg:w-[500px] xl:w-[600px] sm:flex hidden"
                    />
                   <button className="absolute right-0 top-0 bottom-0 bg-yellow-400 flex items-center text-black px-6 py-2 rounded-r-full rounded-l-lg text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-yellow-500 focus:outline-none sm:flex hidden">
                        Search
                        <span className="ml-2">
                            <FiSearch />
                        </span>
                    </button>

                </div>


                {/* Right side: Icons */}
                <div className="flex items-center space-x-4 sm:space-x-6">
                    <FaUser className="text-xl cursor-pointer hover:text-gray-700 transition-all duration-300 ease-in-out" />
                    <FaCodeCompare className="text-xl cursor-pointer hover:text-gray-700 transition-all duration-300 ease-in-out" />
                    <FaHeart className="text-xl cursor-pointer hover:text-gray-700 transition-all duration-300 ease-in-out" />
                    <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-700 transition-all duration-300 ease-in-out" />
                </div>
            </header>

            {/* Divider for Mobile */}
            <div className="sm:hidden mt-1 border-t-2 border-gray-300 my-1"></div>

            {/* Navbar */}
            <Navbar />
        </div>
    );
};

export default Header;
