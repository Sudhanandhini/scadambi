import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryTimings = () => {
    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />
            
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">School Timings</h1>
                        <p className="text-xl text-white/90">Our daily schedule for optimal learning</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-12 shadow-xl">
                            <Clock className="text-secondary mb-6" size={48} />
                            <h2 className="text-3xl font-bold text-primary mb-6">Monday to Friday</h2>
                            <div className="text-4xl font-bold text-secondary mb-4">8:45 AM - 2:30 PM</div>
                            <p className="text-lg text-gray-600">Regular school hours with full curriculum</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-12 shadow-xl">
                            <Calendar className="text-secondary mb-6" size={48} />
                            <h2 className="text-3xl font-bold text-primary mb-6">Saturday</h2>
                            <div className="text-4xl font-bold text-secondary mb-4">8:45 AM - 11:40 AM</div>
                            <p className="text-lg text-gray-600">Half day with essential classes</p>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-primary mb-4">Important Note</h3>
                        <p className="text-lg text-gray-700 mb-2">Every second Saturday is a holiday</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                    </motion.div>
                </div>
            </section>

           
        </div>
    );
};

export default IcsePrimaryTimings;
