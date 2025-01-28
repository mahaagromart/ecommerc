// components/Topbar.js
import { FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Topbar = () => {
    return (
        <div className="bg-green-900 text-white py-2 px-4 sm:px-16 hidden sm:block">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                    <div className="flex items-center">
                        <FiMapPin className="mr-2" />
                        <span>Location</span>
                    </div>
                    <div className="flex items-center">
                        <FiMail className="mr-2" />
                        <span>contact@example.com</span>
                    </div>
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
