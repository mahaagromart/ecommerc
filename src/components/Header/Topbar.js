import { useState } from 'react';
import { FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Topbar = () => {
    const [language, setLanguage] = useState('');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        // Add logic here to update the language in your application
        console.log('Language changed to:', event.target.value);
    };

    return (
        <div className="bg-green-900 text-white py-2 px-4 sm:px-16 hidden sm:block">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                    <div className="flex items-center">
                        <FiMapPin className="mr-2" />
                        <span className='font-poppins'>Location</span>
                    </div>
                    <div className="flex items-center">
                        <FiMail className="mr-2" />
                        <span className='font-poppins'>contact@example.com</span>
                    </div>
                </div>

                {/* Language Dropdown (Center of top bar) */}
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                    <label htmlFor="language" className="mr-2 font-poppins">Language:</label>
                    <select
                        id="language"
                        name="language"
                        className="bg-green-900 text-white border border-gray-400 rounded px-2 py-1"
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        <option value="" disabled hidden>Select Language</option>
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="mr">Marathi</option>
                    </select>
                </div>

                {/* Social Icons (Right side of top bar) */}
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
        </div>
    );
};

export default Topbar;