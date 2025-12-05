import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const PrePrimaryContact = () => {
    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-white/90">
                            Get in touch with our Pre-Primary Wing
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all"
                    >
                        <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="text-secondary" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                            # 1025, 10th Main Road,<br />
                            2nd Cross Road, 3rd Stage,<br />
                            Basaveshwaranagar,<br />
                            Bangalore - 560079
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all"
                    >
                        <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="text-secondary" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">Email</h3>
                        <a href="mailto:scvk123@rediffmail.com" className="text-gray-600 hover:text-secondary transition-colors">
                            scvk123@rediffmail.com
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all"
                    >
                        <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="text-secondary" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">Phone</h3>
                        <p className="text-gray-600">
                            Contact office for details
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all"
                    >
                        <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="text-secondary" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">Hours</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Mon - Sat<br />
                            8:45 AM - 2:30 PM<br />
                            Sunday: Closed
                        </p>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary text-center mb-8 font-serif">
                            Send us a Message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Parent's Name *</label>
                                    <input 
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                                    <input 
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                                <input 
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Child's Name</label>
                                    <input 
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Program</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                                        <option>Select Program</option>
                                        <option>Pre-KG</option>
                                        <option>LKG</option>
                                        <option>UKG</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea 
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                            >
                                <Send className="mr-2" size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.section>

                {/* Map */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        {/* <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7584892638744!2d77.53751!3d12.99316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzM1LjQiTiA3N8KwMzInMTUuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="School Location"
                        ></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d775.2886857829224!2d77.53933029850626!3d12.99258234578071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1764911445399!5m2!1sen!2sin"
                         width="100%" height="450"  style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="School Location"></iframe>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default PrePrimaryContact;
