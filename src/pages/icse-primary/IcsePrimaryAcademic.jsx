import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryAcademic = () => {
    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Academic Information</h1>
                        <p className="text-xl text-white/90">Comprehensive ICSE curriculum and schedule</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Link to="/icse-primary/curriculum">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full group">
                                <BookOpen className="text-secondary mb-6" size={48} />
                                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">Curriculum Details</h3>
                                <p className="text-gray-600 mb-6">ICSE curriculum framework with 5-step teaching methodology</p>
                                <div className="flex items-center text-secondary group-hover:translate-x-2 transition-transform">
                                    <span className="font-semibold mr-2">Learn More</span>
                                    <ArrowRight size={20} />
                                </div>
                            </motion.div>
                        </Link>

                        <Link to="/icse-primary/calendar">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full group">
                                <Calendar className="text-secondary mb-6" size={48} />
                                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">Academic Calendar</h3>
                                <p className="text-gray-600 mb-6">Complete schedule of events, tests, and examinations for 2025-26</p>
                                <div className="flex items-center text-secondary group-hover:translate-x-2 transition-transform">
                                    <span className="font-semibold mr-2">View Calendar</span>
                                    <ArrowRight size={20} />
                                </div>
                            </motion.div>
                        </Link>

                        <Link to="/icse-primary/timings">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full group">
                                <Clock className="text-secondary mb-6" size={48} />
                                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">School Timings</h3>
                                <p className="text-gray-600 mb-6">Daily schedule and operational hours for students</p>
                                <div className="flex items-center text-secondary group-hover:translate-x-2 transition-transform">
                                    <span className="font-semibold mr-2">View Timings</span>
                                    <ArrowRight size={20} />
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>

          
        </div>
    );
};

export default IcsePrimaryAcademic;
