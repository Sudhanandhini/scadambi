import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryContact = () => {
    return (
        <div className="min-h-screen bg-background pt-20">
            <IcsePrimaryHeader />

            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-white/90">Get in touch with ICSE Primary Wing</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-bold text-primary mb-8">Get In Touch</h2>
                            
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-lg flex items-start">
                                    <MapPin className="text-secondary mr-4 mt-1 shrink-0" size={28} />
                                    <div>
                                        <h3 className="font-bold text-primary text-lg mb-2">Address</h3>
                                        <p className="text-gray-700">
                                            # 1025, 10th Main Road,<br />
                                            2nd Cross Road, 3rd Stage,<br />
                                            Basaveshwaranagar,<br />
                                            Bangalore - 560079
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg flex items-start">
                                    <Mail className="text-secondary mr-4 mt-1 shrink-0" size={28} />
                                    <div>
                                        <h3 className="font-bold text-primary text-lg mb-2">Email</h3>
                                        <a href="mailto:scvk123@rediffmail.com" className="text-gray-700 hover:text-secondary transition-colors">
                                            scvk123@rediffmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg flex items-start">
                                    <Clock className="text-secondary mr-4 mt-1 shrink-0" size={28} />
                                    <div>
                                        <h3 className="font-bold text-primary text-lg mb-2">Office Hours</h3>
                                        <p className="text-gray-700">
                                            Mon - Fri: 8:45 AM - 2:30 PM<br />
                                            Sat: 8:45 AM - 11:40 AM<br />
                                            Every 2nd Saturday: Holiday<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg flex items-start">
                                    <Facebook className="text-secondary mr-4 mt-1 shrink-0" size={28} />
                                    <div>
                                        <h3 className="font-bold text-primary text-lg mb-2">Social Media</h3>
                                        <a 
                                            href="https://www.facebook.com/profile.php?id=100095136330780" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-secondary transition-colors"
                                        >
                                            Follow us on Facebook
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-2xl p-12">
                            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-white/90 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                                </div>
                                <div>
                                    <label className="block text-white/90 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                                </div>
                                <div>
                                    <label className="block text-white/90 mb-2">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                                </div>
                                <div>
                                    <label className="block text-white/90 mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg text-gray-900"></textarea>
                                </div>
                                <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all w-full">
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

           
        </div>
    );
};

export default IcsePrimaryContact;
