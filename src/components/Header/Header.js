import Image from 'next/image';
import logo from "../../../public/images/img/logo.webp";
import seed from "../../../public/images/hometopcategoryicon/seeds.svg";
import Pesticides from "../../../public/images/hometopcategoryicon/pesticides.svg";
import Fertilizers from "../../../public/images/hometopcategoryicon/fertilizer.svg";
import Agriculture from "../../../public/images/hometopcategoryicon/agriculture.svg";
import Drone from "../../../public/images/hometopcategoryicon/drone.svg";
import Animalfeed from "../../../public/images/hometopcategoryicon/animalf.svg";
import Foodproduct from "../../../public/images/hometopcategoryicon/foodproduct.svg";
import Garden from "../../../public/images/hometopcategoryicon/garden.svg";
import Noga from "../../../public/images/hometopcategoryicon/noga.svg";
import Combopacks from "../../../public/images/hometopcategoryicon/combo.svg";
import Millets from "../../../public/images/hometopcategoryicon/millets.svg";
import Services from "../../../public/images/hometopcategoryicon/services.svg";
import Herb from "../../../public/images/hometopcategoryicon/herbs.svg";
import Art from "../../../public/images/hometopcategoryicon/arts.svg";
import Packing from "../../../public/images/hometopcategoryicon/packing.svg";
import Plasticulture from "../../../public/images/hometopcategoryicon/plasticulture.svg";
import Fruit from "../../../public/images/hometopcategoryicon/fruits.svg";

import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { BiMenuAltLeft } from "react-icons/bi";
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaCodeCompare } from "react-icons/fa6";
import { useState } from 'react';
import Topbar from '../Header/Topbar';
import Navbar from '../Header/Navbar';
import "../Header/header.css";

const categories = [
    { name: "Seed", image: seed, link: "" },
    { name: "Pesticides", image: Pesticides, link: "" },
    { name: "Fertilizers", image: Fertilizers, link: "" },  // Pass null for no image
    { name: "Agricultural Machineries", image: Agriculture, link: "" },
    { name: "Drone Services", image: Drone, link: "" },
    { name: "Animal Feed", image: Animalfeed, link: "" },
    { name: "Food Products", image: Foodproduct, link: "" },
    { name: "Garden ", image: Garden, link: "" },
    { name: "Noga ", image: Noga, link: "" },
    { name: "Combo packs", image: Combopacks, link: "" },
    { name: "Millets", image: Millets, link: "" },
    { name: "Services", image: Services, link: "" },
    { name: "Herb product", image: Herb, link: "" },
    { name: "Art and craft", image: Art, link: "" },
    { name: "Packing Materials", image: Packing, link: "" },
    { name: "Plasticulture", image: Plasticulture, link: "" },
    { name: "Fruits", image: Fruit, link: "" },
   

];

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

            <header className="container max-w-screen-3xl mx-auto flex items-center justify-between sm:px-7 lg:px-8 px-4 py-3 ">
                {/* Left side: Logo */}
                <div className="flex items-center space-x-4">
                    <Image src={logo} alt="Logo" className="h-auto w-[350px] sm:w-[350px] md:w-[200px] lg:w-[120px]" />
                </div>
                <div className="categories-dropdown">
                    {/* Desktop View */}
                    <div className="desktop-view">
                        <button
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)} // Toggle the dropdown
                            className="dropdown-btn"
                        >
                            <BiMenuAltLeft size={20} /> {/* Icon added */}
                            <span className="dropdown-text ">All Categories</span>
                            <FiChevronDown size={20} className="dropdown-arrow" /> {/* Down arrow added */}
                        </button>
                        <div className={`dropdown-menu ${isCategoryOpen ? "open" : ""}`}>
                            <ul>
                                {categories.map((category, index) => (
                                    <li key={index} className="dropdown-item">
                                        {/* Conditionally render image only if category has an image */}
                                        {category.image && (
                                            <Image src={category.image} width={40} height={40} alt={category.name} className="category-image " />
                                        )}
                                        <a href={category.link} aria-label={category.name} className='bottom'>{category.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative lg:flex md:hidden items-center space-x-4 w-full lg:w-auto xl:w-auto">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        className="px-6 py-2 rounded-full border border-gray-300 focus:outline-none font-poppins focus:ring-2 focus:ring-green-800 text-lg transition-all duration-300 ease-in-out w-full sm:w-[300px] md:w-[360px] lg:w-[500px] xl:w-[600px] lg:flex hidden lg:block" // Change lg:block to lg:hidden and adjust other widths
                    />
                    <button className="absolute right-0 top-0 bottom-0 bg-yellow-400 font-poppins flex items-center text-black px-6 py-2 rounded-r-full rounded-l-lg text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-yellow-500 focus:outline-none lg:flex hidden lg:block">
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
