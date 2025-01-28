"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Seed from "../../../../public/images/homecategory/Seeds.svg";
import Drone from "../../../../public/images/homecategory/Drone.svg";
import Plasticulture from "../../../../public/images/homecategory/plasticulture.svg";
import "../Topcategory/category.css"
const ProductCategories = () => {
  const categories = [
    { category: "Plasti..", products: 4, image: Plasticulture },
    { category: "Plasti..", products: 4, image: Plasticulture },
    { category: "Plasti..", products: 4, image: Plasticulture },
    { category: "Plasti..", products: 4, image: Plasticulture },
    { category: "Plasti..", products: 4, image: Plasticulture },
    { category: "Plasti..", products: 4, image: Plasticulture },
    { category: "Plasti..", products: 4, image: Plasticulture },
    { category: "Drone", products: 8, image: Drone },
    { category: "Seeds", products: 10, image: Seed },
    { category: "Drone", products: 8, image: Drone },
    { category: "Seeds", products: 10, image: Seed },
    { category: "Drone", products: 8, image: Drone },
    { category: "Seeds", products: 10, image: Seed },
  ];

  const categoriesPerSlide = 6; 

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + categoriesPerSlide) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - categoriesPerSlide + categories.length) % categories.length);
  };

  const displayedCategories = categories.slice(currentIndex, currentIndex + categoriesPerSlide);

  if (displayedCategories.length < categoriesPerSlide) {
    displayedCategories.push(...categories.slice(0, categoriesPerSlide - displayedCategories.length));
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Top Categories</h1>

      <div className="relative flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 p-2 bg-gray-300 rounded-full text-black focus:outline-none"
          style={{ top: '50%', transform: 'translateY(-50%)', opacity: '0.6' }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="flex gap-6 flex-nowrap overflow-x-auto scrollbar-hide">
          {displayedCategories.map((category, index) => (
            <div key={index} className="p-4 w-48 flex-shrink-0 flex items-center">
              <Image
                src={category.image}
                alt={category.category}
                className="w-16 h-16 object-cover rounded-full mr-4"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-bold">{category.category}</h2>
                <p className="text-sm">{category.products} Products</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 p-2 bg-gray-300 rounded-full text-black focus:outline-none"
          style={{ top: '50%', transform: 'translateY(-50%)', opacity: '0.6' }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ProductCategories;