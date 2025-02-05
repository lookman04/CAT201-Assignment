import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar= () => {
    const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
    const [isVisible, setIsVisible] = useState(true); // Navbar visibility state
    const [lastScrollY, setLastScrollY] = useState(0); // To track the last scroll position

    // Handle scroll events
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down, hide the navbar
            setIsVisible(false);
        } else {
            // Scrolling up, show the navbar
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white border-none rounded-xl transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="container px-4 flex justify-between items-center h-16">
                <h3 className="text-2xl font-bold">Travel</h3>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4 text-sm font-bold">
                    <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
                        Home
                    </Link>
                    <Link to="/gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
                        Gallery
                    </Link>
                    <Link to="/destination" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
                        Destination
                    </Link>
                    <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
                        About
                    </Link>
                    <button
                        className="py-2 px-6 border bg-gray-300 hover:bg-gray-600 border-none hover:text-white transform transition hover:scale-110"
                    >
                        Login
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden space-y-6 py-4 bg-white flex flex-col items-center">
                    <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
                        Home
                    </Link>
                    <Link to="/gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
                        Gallery
                    </Link>
                    <Link to="/destination" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
                        Destination
                    </Link>
                    <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
                        About
                    </Link>
                    <button className="py-2 px-6 border bg-gray-300">Login</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
