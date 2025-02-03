import { useState, useEffect } from 'react';
import { FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiGlobe } from 'react-icons/fi';
import "../Header/google.css";

const Topbar = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [userLocation, setUserLocation] = useState(null);

    // Fetch user location using Geolocation API (Optional)
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ lat: latitude, lng: longitude });
            });
        }
    }, []);

    useEffect(() => {
        if (!window.googleTranslateElementInit) {
            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'en,hi,mr', // English, Hindi, Marathi
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,  // Disable the default display of the dropdown
                        multilanguagePage: true,
                    },
                    'google_translate_element'
                );

                // Ensuring the translation dropdown remains visible without 'Select Language'
                setTimeout(() => {
                    const dropdown = document.querySelector('.goog-te-menu-value');
                    const selectLabel = document.querySelector('.goog-te-menu-value span');
                    // Hides the "Select Language" option in the dropdown
                    if (dropdown && selectLabel) {
                        selectLabel.style.display = 'none';
                    }
                    
                    // Hide the Google branding
                    document.querySelectorAll('.goog-logo-link').forEach(el => el.style.display = 'none');
                }, 1000);
            };

            const script = document.createElement('script');
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    const handleLocationClick = () => {
        setIsMapOpen(true);
    };

    const closeMap = () => {
        setIsMapOpen(false);
    };

    return (
        <div className="bg-green-900 text-white py-2 px-4 sm:px-16 hidden sm:block">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                    <div className="flex items-center">
                        <FiMapPin className="mr-2 cursor-pointer" onClick={handleLocationClick} />
                        <span className='font-poppins'>Location</span>
                    </div>
                    <div className="flex items-center">
                        <FiMail className="mr-2" />
                        <span className='font-poppins'>contact@example.com</span>
                    </div>
                </div>

                {/* Google Translate Widget with Icon */}
                <div className="flex items-center space-x-2">
                    <FiGlobe size={18} />
                    <div id="google_translate_element" className="text-black"></div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-2 sm:mt-0">
                    <a href="#" className="text-white hover:text-gray-400">
                        <FiFacebook size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-400">
                        <FiTwitter size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-400">
                        <FiInstagram size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-400">
                        <FiYoutube size={20} />
                    </a>
                </div>
            </div>

            {/* Modal for Map */}
            {isMapOpen && userLocation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-4xl">
                        <div className="absolute top-0 right-0 p-4 text-white">
                            <button onClick={closeMap} className="bg-red-500 p-2 rounded-full">X</button>
                        </div>
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${userLocation.lat},${userLocation.lng}`}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Topbar;
