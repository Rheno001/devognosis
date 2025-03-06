import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../devalone.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md rounded-4xl mt-[20px]">
            {/* Overlay when menu is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 bg-opacity-50 z-40 transition-opacity"
                    onClick={toggleNavbar}
                ></div>
            )}

            <div className="flex items-center justify-between px-6 lg:px-12 py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        className="h-[50px] w-[50px] md:h-[80px] md:w-[80px]"
                        alt="Logo"
                    />
                    <p className="ml-2 text-gray-600 text-xs md:text-sm font-bold leading-tight">
                        DEVONGNOSIS<br />EDUCATION
                    </p>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleNavbar}
                    className="text-gray-800 lg:hidden text-2xl"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navbar Links */}
                <nav
                    className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-orange-500 to-orange-300 md:bg-none shadow-lg transform transition-transform duration-300 lg:static lg:flex lg:bg-transparent lg:shadow-none lg:w-auto lg:translate-x-0 ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    } z-50`}
                >
                    <div className="flex flex-col lg:flex-row lg:space-x-6 items-center justify-center mt-16 lg:mt-0 p-6 lg:p-0">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About Us", path: "/about" },
                            { name: "Courses", path: "/courses" },
                            { name: "Trainers", path: "/trainers" }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="relative text-lg py-3 text-white lg:text-gray-800 group transition-all"
                                onClick={() => {
                                    handleClick()
                                    setIsOpen(false)
                                }}
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white lg:bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </Link>
                            
                        ))}
                        <Link
                        onClick={handleClick}
                        to="/contact"
                        className="text-orange-500 text-lg px-6 py-2 rounded-3xl bg-white transition-transform duration-300 hover:scale-105 hover:text-orange-500 md:hidden shadow-md hover:bg-white"
                    >
                        Contact Us
                    </Link>
                    </div>
                </nav>

                {/* Contact Us Button */}
                <div className="hidden lg:flex">
                    <Link
                        onClick={handleClick}
                        to="/contact"
                        className="text-white text-lg px-6 py-2 rounded-3xl bg-orange-500 transition-transform duration-300 hover:scale-105 hover:text-orange-500 shadow-md hover:bg-white"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;