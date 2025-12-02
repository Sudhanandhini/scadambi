import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if we are on the home page for transparent header logic
    const isHome = location.pathname === '/';

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Academics', href: '/academics' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 cursor-pointer">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full p-1 shadow-sm flex items-center justify-center">
                            <img src={logo} alt="S. Cadambi Vidya Kendra Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h1 className={`text-lg md:text-2xl font-bold font-serif leading-none ${scrolled || !isHome ? 'text-primary' : 'text-white'}`}>
                                Scadambi Vidya Kendra
                            </h1>
                            <p className={`text-xs font-medium tracking-widest ${scrolled || !isHome ? 'text-secondary' : 'text-gray-200'}`}>
                                scadambi.edu.in
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-medium transition-colors hover:text-secondary ${scrolled || !isHome ? 'text-text' : 'text-white/90'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/admissions">
                            <button className="bg-secondary hover:bg-yellow-500 text-primary font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                                Apply Now
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${scrolled || !isHome ? 'text-primary' : 'text-white'} focus:outline-none`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white shadow-xl overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-text hover:text-primary hover:bg-gray-50 rounded-md border-b border-gray-100"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link to="/admissions" onClick={() => setIsOpen(false)}>
                                    <button className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md">
                                        Apply Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
