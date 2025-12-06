import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock, Facebook, ArrowRight, Heart } from 'lucide-react';

const PrePrimaryFooter = () => {
    const quickLinks = [
        { name: 'About Us', path: '/pre-primary/about' },
        { name: 'Academic', path: '/pre-primary/academic' },
        { name: 'Admissions', path: '/pre-primary/admissions' },
        { name: 'Facilities', path: '/pre-primary/facilities' },
        { name: 'Activities', path: '/pre-primary/activities' },
        { name: 'News & Events', path: '/pre-primary/news' },
        {name:'Gallery', path:'/pre-primary/gallery'},
        { name: 'Contact Us', path: '/pre-primary/contact' }
    ];

    const programs = [
        { name: 'SHISHU CHAITANYA-PLAY HOME', path: '/play-school' },
            { name: 'Pre Primary', path: '/pre-primary' },
            { name: 'ICSE PRIMARY WING', path: '/icse-primary' },
            { name: 'ICSE HIGH SCHOOL WING', path: '/icse-high' },
            { name: ' State High School ', path: '/high-school' },
            { name: 'PU COLLEGE', path: '/pu-college' },
    ];

    return (
        <footer className="bg-[#0F2A4A]  text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center">
                                <span className="text-2xl">🎈</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Pre-Primary Wing</h3>
                                <p className="text-sm text-white/80">Ages 3-6 years</p>
                            </div>
                        </div>
                        <p className="text-white/90 mb-6 leading-relaxed">
                            Nurturing young minds through play-based learning. "Sowing Seeds of Knowledge for Success"
                        </p>
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=100095136330780"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-secondary hover:text-primary p-3 rounded-lg transition-all"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                         <Link
                            to="/"
                            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center border border-white/20 py-4 my-4"
                        >
                            <ArrowRight size={18} className="mr-2 rotate-180" />
                            Visit Main Website
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-secondary">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.path}
                                        className="flex items-center text-white/90 hover:text-secondary transition-colors group"
                                    >
                                        <ArrowRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-secondary">Our Divisions</h3>
                        <ul className="space-y-3">
                            {programs.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.path}
                                        className="flex items-center text-white/90 hover:text-secondary transition-colors group"
                                    >
                                        <ArrowRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-secondary">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                <span className="text-white/90 text-sm">
                                    # 1025, 10th Main Road,<br />
                                    2nd Cross Road, 3rd Stage,<br />
                                    Basaveshwaranagar,<br />
                                    Bangalore - 560079
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-secondary mr-3 shrink-0" size={20} />
                                <a href="mailto:scvk123@rediffmail.com" className="text-white/90 hover:text-secondary transition-colors text-sm">
                                    scvk123@rediffmail.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Clock className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                <span className="text-white/90 text-sm">
                                    Mon - Sat: 8:45 AM - 2:30 PM<br />
                                    Sunday: Closed
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Back to Main Site */}
            {/* <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-center">
                        <Link
                            to="/"
                            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center border border-white/20"
                        >
                            <ArrowRight size={18} className="mr-2 rotate-180" />
                            Visit Main S. Cadambi Website
                        </Link>
                    </div>
                </div>
            </div> */}

            {/* Bottom Bar */}

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">

                        <p className="flex items-center">
                            © 2025 S. Cadambi Pre-Primary Wing. All rights reserved.
                        </p>

                        <div className="flex items-center space-x-6">

                            <a
                                href="https://www.sunsys.in/"
                                className="flex items-center hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Made with
                                <Heart className="mx-1 text-secondary" size={16} fill="currentColor" />
                                by Sunsys Technologies
                            </a>

                        </div>

                    </div>
                </div>
            </div>

        </footer>
    );
};

export default PrePrimaryFooter;
