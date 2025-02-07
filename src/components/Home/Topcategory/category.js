"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Noga from "../../../../public/images/hometopcategoryicon/homecategorytwo/noga.svg";
import Fertilizer from "../../../../public/images/hometopcategoryicon/homecategorytwo/fertilizer.svg";
import Agriculture from "../../../../public/images/hometopcategoryicon/homecategorytwo/agriculturemachines.svg";
import Drone from "../../../../public/images/hometopcategoryicon/homecategorytwo/droneservice.svg";
import Animal from "../../../../public/images/hometopcategoryicon/homecategorytwo/animalfeed.svg";
import Food from "../../../../public/images/hometopcategoryicon/homecategorytwo/foodproduct.svg";
import Gardening from "../../../../public/images/hometopcategoryicon/homecategorytwo/gardening.svg";
import Millets from "../../../../public/images/hometopcategoryicon/homecategorytwo/millets.svg";
import Service from "../../../../public/images/hometopcategoryicon/homecategorytwo/service.svg";
import Herbal from "../../../../public/images/hometopcategoryicon/homecategorytwo/herbal.svg";
import Art from "../../../../public/images/hometopcategoryicon/homecategorytwo/artandcraft.svg";
import Fruits from "../../../../public/images/hometopcategoryicon/homecategorytwo/fruits.svg";
import "../Topcategory/category.css";

const ProductCategories = () => {
  const categories = [
    { category: "Nogaa brand..", image: Noga },
    { category: "Fertilizer", image: Fertilizer },
    { category: "Agriculture", image: Agriculture },
    { category: "Drone Service", image: Drone },
    { category: "Animal feed", image: Animal },
    { category: "Food product", image: Food },
    { category: "Gardening", image: Gardening },
    { category: "Millets", image: Millets },
    { category: "Service", image: Service },
    { category: "Herbal product", image: Herbal },
    { category: "Art and craft", image: Art },
    { category: "Fruits", image: Fruits },
  ];

  const categoriesPerSlide = {
    base: 12, // 3 items on small screens
    md: 12,   // 4 items on medium screens (tablets)
    lg: 5,   // 6 items on large screens (desktops)
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [categoriesPerView, setCategoriesPerView] = useState(categoriesPerSlide.base);

  // Update categories per slide based on screen width
  useEffect(() => {
    const updateCategoriesPerView = () => {
      if (window.innerWidth >= 1024) {
        setCategoriesPerView(categoriesPerSlide.lg);
      } else if (window.innerWidth >= 768) {
        setCategoriesPerView(categoriesPerSlide.md);
      } else {
        setCategoriesPerView(categoriesPerSlide.base);
      }
    };

    updateCategoriesPerView();
    window.addEventListener("resize", updateCategoriesPerView);
    return () => window.removeEventListener("resize", updateCategoriesPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + categoriesPerView;
      return newIndex >= categories.length ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - categoriesPerView;
      return newIndex < 0 ? categories.length - categoriesPerView : newIndex;
    });
  };

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

        <div className="flex  flex-nowrap overflow-x-auto scrollbar-hide">
          {categories.slice(currentIndex, currentIndex + categoriesPerView).map((category, index) => (
            <div key={index} className="w-64 flex-shrink-0 flex items-center">
              <div className="bg-[#e8f2ee;] rounded-full inline-block p-2 ml-2">
                <Image
                  src={category.image}
                  alt={category.category}
                  className="w-20 h-20 rounded-full"
                />
              </div>

              <div className="flex flex-col">
                <h2 className="text-lg font-bold p-4">{category.category}</h2>
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