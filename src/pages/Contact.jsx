import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">Get in Touch</h1>
                    <p className="text-gray-600">We'd love to hear from you. Visit us or drop a message.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Campus Address</h3>
                                        <p className="text-gray-600">123 Academic Avenue, Knowledge City,<br />Bangalore, Karnataka - 560001</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="text-secondary flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Phone</h3>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail className="text-secondary flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Email</h3>
                                        <p className="text-gray-600">admissions@excellence.edu</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Clock className="text-secondary flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Office Hours</h3>
                                        <p className="text-gray-600">Mon - Sat: 9:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 h-64 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center text-gray-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003673091571!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1633072000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Inquiry about..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none h-32" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-primary hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
