import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Heart, ArrowRight, } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const HighSchoolFooter = () => {
  const quickLinks = [
    { name: 'Home', path: '/high-school' },
    { name: 'About Us', path: '/high-school/about' },
    { name: 'Academic', path: '/high-school/academic' },
    { name: 'Admissions', path: '/high-school/admissions' },
    { name: 'Facilities', path: '/high-school/facilities' },
    { name: 'Activities', path: '/high-school/activities' },
  ];

  const academics = [
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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg">S. Cadambi</h3>
                <p className="text-sm text-yellow-300">High School</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Enlightenment through education. Building responsible citizens with academic excellence and strong values.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1AngmCMEAV/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all hover:scale-110"
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
            <h4 className="text-lg font-bold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-secondary group-hover:w-4 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Our Division</h4>
            <ul className="space-y-2">
              {academics.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-secondary group-hover:w-4 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
           
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-secondary" />
                <span className="text-sm">
                  Basaveshwara Nagar, Bangalore, Karnataka
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="flex-shrink-0 text-secondary" />
                <a href="tel:08023232831" className="text-sm hover:text-secondary transition-colors">
                  080-23232831
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="flex-shrink-0 text-secondary" />
                <a href="mailto:scvk123@rediffmail.com" className="text-sm hover:text-secondary transition-colors">
                  scvk123@rediffmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>
              © {new Date().getFullYear()} S. Cadambi Vidya Kendra High School. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Made with <Heart size={16} className="text-secondary fill-secondary" /> by{' '}
              <a 
                href="https://sunsystechnologies.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:underline font-semibold"
              >
                Sunsys Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HighSchoolFooter;
