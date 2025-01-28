"use client";
import Image from "next/image";
import { useState, useRef } from 'react';
import img from "../../../../public/images/fruitproduct/fruits.svg";
import { FaHeart, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Import heart and arrow icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const [selectedWeight, setSelectedWeight] = useState({
        id: 1,
        weight: '350g',
        price: 3,
        originalPrice: 8,  // Default original price
        discountedPrice: 3 // Default discounted price
    });

    const [cart, setCart] = useState([]);

    const [products, setProducts] = useState([
        {
            id: 1,
            category: 'Vegetables',
            name: 'Organic ..',
            image: img,
            price: {
                original: 8,
                discounted: 3,
            },
            discount: 77,
            rating: 5,
            reviews: 500,
            weights: [
                { label: '350g', originalPrice: 8, discountedPrice: 3 },
                { label: '500g', originalPrice: 10, discountedPrice: 4 },
                { label: '1kg', originalPrice: 15, discountedPrice: 7 },
            ]
        },
        {
            id: 2,
            category: 'Vegetables',
            name: 'Organic ..',
            image: img,
            price: {
                original: 8,
                discounted: 3,
            },
            discount: 77,
            rating: 5,
            reviews: 500,
            weights: [
                { label: '350g', originalPrice: 8, discountedPrice: 3 },
                { label: '500g', originalPrice: 10, discountedPrice: 4 },
                { label: '1kg', originalPrice: 15, discountedPrice: 7 },
            ]
        },
        {
            id: 3,
            category: 'Vegetables',
            name: 'Organic ..',
            image: img,
            price: {
                original: 8,
                discounted: 3,
            },
            discount: 77,
            rating: 5,
            reviews: 500,
            weights: [
                { label: '350g', originalPrice: 8, discountedPrice: 3 },
                { label: '500g', originalPrice: 10, discountedPrice: 4 },
                { label: '1kg', originalPrice: 15, discountedPrice: 7 },
            ]
        },
        {
            id: 4,
            category: 'Vegetables',
            name: 'Organic ..',
            image: img,
            price: {
                original: 8,
                discounted: 3,
            },
            discount: 77,
            rating: 5,
            reviews: 500,
            weights: [
                { label: '350g', originalPrice: 8, discountedPrice: 3 },
                { label: '500g', originalPrice: 10, discountedPrice: 4 },
                { label: '1kg', originalPrice: 15, discountedPrice: 7 },
            ]
        },
        {
            id: 5,
            category: 'Vegetables',
            name: 'Organic ..',
            image: img,
            price: {
                original: 8,
                discounted: 3,
            },
            discount: 77,
            rating: 5,
            reviews: 500,
            weights: [
                { label: '350g', originalPrice: 8, discountedPrice: 3 },
                { label: '500g', originalPrice: 10, discountedPrice: 4 },
                { label: '1kg', originalPrice: 15, discountedPrice: 7 },
            ]
        },
        {
            id: 6,
            category: 'Vegetables',
            name: 'Organic ..',
            image: img,
            price: {
                original: 8,
                discounted: 3,
            },
            discount: 77,
            rating: 5,
            reviews: 500,
            weights: [
                { label: '350g', originalPrice: 8, discountedPrice: 3 },
                { label: '500g', originalPrice: 10, discountedPrice: 4 },
                { label: '1kg', originalPrice: 15, discountedPrice: 7 },
            ]
        },
        {
            id: 7,
            category: 'Vegetables',
            name: 'Organic ..',
            image: img,
            price: {
                original: 8,
                discounted: 3,
            },
            discount: 77,
            rating: 5,
            reviews: 500,
            weights: [
                { label: '350g', originalPrice: 8, discountedPrice: 3 },
                { label: '500g', originalPrice: 10, discountedPrice: 4 },
                { label: '1kg', originalPrice: 15, discountedPrice: 7 },
            ]
        },
        {
            id: 8,
            category: 'Vegetables',
            name: 'Organic ..',
            image: img,
            price: {
                original: 8,
                discounted: 3,
            },
            discount: 77,
            rating: 5,
            reviews: 500,
            weights: [
                { label: '350g', originalPrice: 8, discountedPrice: 3 },
                { label: '500g', originalPrice: 10, discountedPrice: 4 },
                { label: '1kg', originalPrice: 15, discountedPrice: 7 },
            ]
        },
        {
            id: 9,
            category: 'Vegetables',
            name: 'Organic ..',
            image: img,
            price: {
                original: 8,
                discounted: 3,
            },
            discount: 77,
            rating: 5,
            reviews: 500,
            weights: [
                { label: '350g', originalPrice: 8, discountedPrice: 3 },
                { label: '500g', originalPrice: 10, discountedPrice: 4 },
                { label: '1kg', originalPrice: 15, discountedPrice: 7 },
            ]
        },
        {
            id: 10,
            category: 'Vegetables',
            name: 'Organic ..',
            image: img,
            price: {
                original: 8,
                discounted: 3,
            },
            discount: 77,
            rating: 5,
            reviews: 500,
            weights: [
                { label: '350g', originalPrice: 8, discountedPrice: 3 },
                { label: '500g', originalPrice: 10, discountedPrice: 4 },
                { label: '1kg', originalPrice: 15, discountedPrice: 7 },
            ]
        },
        // Other products...

    ]);

    const handleWeightChange = (weight, productId) => {
        setSelectedWeight({
            ...selectedWeight,
            weight: weight.label,
            price: weight.discountedPrice, // Update discounted price
            originalPrice: weight.originalPrice, // Update original price
            discountedPrice: weight.discountedPrice // Update the selected discounted price
        });
    };

    const handleAddToCart = (product) => {
        const productToAdd = {
            ...product,
            selectedWeight: selectedWeight.weight,
            selectedPrice: selectedWeight.price,
            selectedOriginalPrice: selectedWeight.originalPrice,
            selectedDiscountedPrice: selectedWeight.discountedPrice,
        };
        setCart([...cart, productToAdd]);
        console.log("Added to Cart:", productToAdd); // Optional: for debugging
    };

    const renderStars = (rating) => {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < rating ? '★' : '☆'; // Full stars for rating, empty stars for the rest
        }
        return stars;
    };

    const productContainerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const startDragging = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - productContainerRef.current.offsetLeft;
        scrollLeft.current = productContainerRef.current.scrollLeft;
    };

    const stopDragging = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - productContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Adjust the scroll speed
        productContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Feature Categories</h1>
                <a href="#" className="flex items-center text-green-700 hover:text-green-900">
                    View All <FaArrowRight className="ml-2" />
                </a>

            </div>
            <div className="relative">
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-lg z-10 opacity-60"

                    onClick={() => productContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
                >
                    <FaArrowLeft />
                </button>
                <div
                    className="flex overflow-x-auto scrollbar-hide"
                    ref={productContainerRef}
                    onMouseDown={startDragging}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                    onMouseMove={handleMouseMove}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex-none w-64 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-200 rounded-lg overflow-hidden relative mr-4"
                        >
                            <div className="absolute top-0 left-0 bg-white text-xs font-semibold text-gray-700 p-4">
                                {product.category}
                            </div>
                            <div className="flex items-center justify-between p-4">
                                <FaHeart className="text-red-500 ml-auto text-xl" />
                            </div>
                            <div className="p-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-28 object-cover transition-transform duration-500 transform group-hover:scale-105"
                                />
                                <div className="mt-3">
                                    <div className="flex gap-2 mt-2">
                                        {product.weights.map((weight) => (
                                            <button
                                                key={weight.label}
                                                onClick={() => handleWeightChange(weight, product.id)}
                                                className={`px-3 py-1 rounded-full border text-xs ${selectedWeight.weight === weight.label
                                                    ? 'bg-green-700 text-white'
                                                    : 'bg-green-200'
                                                    }`}
                                            >
                                                {weight.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-sm font-bold text-green-700">₹{selectedWeight.discountedPrice}</span>
                                        <span className="text-xs text-gray-500 line-through">₹{selectedWeight.originalPrice}</span>
                                    </div>
                                    <h2 className="text-sm font-semibold text-gray-800">
                                        {product.name}
                                        {product.discount > 0 && (
                                            <span className="bg-red-600 text-white text-xs font-bold ml-2 px-1 rounded">
                                                {product.discount}% OFF
                                            </span>
                                        )}
                                    </h2>
                                    <div className="text-xs text-gray-500 mt-1">({product.reviews} reviews)</div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-500 text-xs">{renderStars(product.rating)}</span>
                                </div>
                                <div className="mt-3">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-lg z-10 opacity-60"
                    onClick={() => productContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
                >
                    <FaArrowRight />
                </button>
            </div>
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </div>
    );
}