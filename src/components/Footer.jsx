import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../devalone.png";
import { Link } from 'react-router-dom';

export default function Footer() {
    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top
    };
  return (
    <footer className="bg-gray-900 text-white py-12 rounded-t-2xl relative z-1">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Company Logo" className="h-20 w-20 mb-2" />
          <p className="text-gray-400 text-center md:text-left text-sm">
            Devognosis Education Limited - Building resourceful capacity.
          </p>
          <p className="mt-4 text-gray-400 text-sm">📍 Lux Mundi Estate Plot 3727 Lugbe, Off Airport 
          Road Abuja, Nigeria</p>
          <p className="text-gray-400 text-sm">📧 devognosiseducation@gmail.com</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 flex flex-col text-center text-gray-400">
          <Link to="/" onClick={handleClick} className="hover:border-b-2 hover:border-orange-500">Home</Link>
          <Link to="/about" onClick={handleClick} className="hover:border-b-2 hover:border-orange-500">About Us</Link>
          <Link to="/courses" onClick={handleClick} className="hover:border-b-2 hover:border-orange-500">Courses</Link>
          <Link to="/trainers" onClick={handleClick} className="hover:border-b-2 hover:border-orange-500">Trainers</Link>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 text-sm text-center md:text-left mb-2">
            Subscribe to get the latest updates & offers.
          </p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-l-md text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-orange-500 rounded-r-md hover:bg-white hover:text-orange-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Devognosis Education. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}