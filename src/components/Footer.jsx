import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-white rounded-full p-1 flex items-center justify-center">
                                <img src={logo} alt="S. Cadambi Vidya Kendra Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-bold font-serif">S. Cadambi Vidya Kendra</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Empowering students to become global citizens through academic excellence and holistic development.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-secondary">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Admissions', 'Academics', 'Campus Life', 'Careers', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Divisions */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-secondary">Our Divisions</h4>
                        <ul className="space-y-3">
                            {['Pre-School', 'Primary School', 'High School', 'PU College'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-secondary">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                                <span className="text-gray-300 text-sm">123 Academic Avenue, Knowledge City, State - 560001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-secondary flex-shrink-0" />
                                <span className="text-gray-300 text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-secondary flex-shrink-0" />
                                <span className="text-gray-300 text-sm">admissions@scadambi.edu.in</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} S. Cadambi Vidya Kendra. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
