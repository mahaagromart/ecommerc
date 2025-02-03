import Image from 'next/image';
import logo from '../../../public/images/img/footerlogo.webp';
import barcode from '../../../public/images/img/qrcode.png';
import iosIcon from '../../../public/images/img/secure.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa'; // React icons

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16">

          {/* First Column: Logo & Contact Info */}
          <div className="flex flex-col items-start space-y-6">
            <Image src={logo} alt="Logo" className="mb-6 max-w-[250px] max-h-[80px]" />
            <div className="space-y-4">
              <p className="text-sm text-gray-600 flex items-center">
                <FaPhoneAlt className="text-green-600 mr-2 text-xl" />
                <span>Call us: Monday - Friday, 9:30 AM - 5:50 PM</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <FaMapMarkerAlt className="text-green-600 mr-2 text-6xl" /> {/* Increased icon size */}
                <span>Address: E-Commerce Division, MAIDC, Krushi Udyog Bhavan Dinkarrao Desai Marg, Aarey Milk Colony, Goregaon (E), Mumbai - 400065</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <FaEnvelope className="text-green-600 mr-2 text-3xl" /> {/* Increased icon size */}
                <span>Email: support@mahaagromart.com, info@mahaagromart.com</span>
              </p>
              {/* Working Hours */}
              <p className="text-sm text-gray-600 flex items-center">
                <FaClock className="text-green-600 mr-2 text-2xl" />
                <span>Working Hours: Mon - Fri, 9:30 AM - 5:50 PM</span>
              </p>
            </div>
          </div>


          {/* Second Column: Helpful Links */}
          <div>
            <h3 className="text-lg font-bold text-green-600 mb-6">Helpful Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Customer Service</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Returns</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Shipping Information</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Third Column: Services */}
          <div>
            <h3 className="text-lg font-bold text-green-600 mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Farm Tours</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Crop Harvesting</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Cooking Experiences</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Farm Workshops</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Group Packages</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition duration-300">Gift Vouchers</a></li>
            </ul>
          </div>

          {/* Fourth Column: Barcode, App Download, Payment & Social Links */}
          <div>
            <h3 className="text-lg font-bold text-green-600 mb-6">Install  App</h3>
            <div className="flex flex-col items-start space-y-6">
              {/* Barcode */}
              <Image src={barcode} alt="Barcode" width={130} height={130} className="transition-transform duration-300 transform hover:scale-105" />
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-green-600 transition duration-300">
                  <Image src={iosIcon} alt="Download on iOS" width={180} height={80} />
                </a>
              </div>
              {/* Payment Security & Social Icons */}
              <div className="flex items-center space-x-4 mt-6">
                <span className="material-icons text-gray-600">lock</span>
                <p className="text-sm text-gray-600">Secure Payment Gateway</p>
              </div>
              <div className="flex space-x-6 mt-6">
                <a href="#" className="text-gray-600 hover:text-green-600 transition duration-300"><FaFacebookF className="text-xl" /></a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition duration-300"><FaTwitter className="text-xl" /></a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition duration-300"><FaInstagram className="text-xl" /></a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition duration-300"><FaLinkedinIn className="text-xl" /></a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-green-600 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-white">&copy; 2025 MahaAgroMart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
