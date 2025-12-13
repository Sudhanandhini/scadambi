import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, ArrowLeft } from 'lucide-react';

const PuCollegeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/pu-college' },
    { name: 'About', path: '/pu-college/about' },
    { name: 'Academic', path: '/pu-college/academic' },
    { name: 'Admissions', path: '/pu-college/admissions' },
    { name: 'Facilities', path: '/pu-college/facilities' },
    { name: 'Contact', path: '/pu-college/contact' }
  ];

  const isActive = (item) => {
    return item.path === location.pathname;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#0F2A4A] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center hover:text-[#FDB913] transition-colors"
              >
                <ArrowLeft size={14} className="mr-1" />
                Back to Main Site
              </Link>
              <span className="hidden sm:inline">|</span>
              <a
                href="mailto:scvk123@rediffmail.com"
                className="hidden sm:flex items-center hover:text-[#FDB913] transition-colors"
              >
                <Mail size={14} className="mr-1" />
                scvk123@rediffmail.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-xs">PU College - Science & Commerce</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/pu-college" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-[#0F2A4A] w-12 h-12 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎓</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#0F2A4A] leading-tight">
                  PU COLLEGE
                </h1>
                <p className="text-xs text-gray-600">Science & Commerce Streams</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    isActive(item)
                      ? 'text-[#FDB913] bg-[#FDB913]/10'
                      : 'text-gray-700 hover:text-[#FDB913] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#0F2A4A] p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <nav className="space-y-2">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                    isActive(item)
                      ? 'text-[#FDB913] bg-[#FDB913]/10'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/pu-college/admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0F2A4A] text-center font-bold px-6 py-3 rounded-lg transition-all mt-4"
              >
                Apply Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default PuCollegeHeader;
