import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Heart, Sparkles, Baby, Award, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrePrimaryHome = () => {
    const stats = [
        { icon: Users, number: "200+", label: "Happy Children" },
        { icon: Award, number: "15+", label: "Experienced Teachers" },
        { icon: BookOpen, number: "3", label: "Age Groups" },
        { icon: Sparkles, number: "100%", label: "Safe Environment" }
    ];

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=1080&fit=crop')"
            }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white max-w-3xl"
                        >
                            <div className="inline-block bg-secondary px-6 py-3 rounded-full mb-6">
                                <span className="text-primary font-bold text-lg">Pre-Primary Wing</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
                                S. Cadambi Education Center
                            </h1>
                            <p className="text-2xl md:text-3xl text-secondary font-bold mb-4">
                                Pre-Primary School (Pre-KG, LKG, UKG)
                            </p>
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Nurturing young minds through play-based learning for ages 3-6 years
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/pre-primary/admissions">
                                    <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center group">
                                        Enroll Your Child
                                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                    </button>
                                </Link>
                                <Link to="/pre-primary/contact">
                                    <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all border-2 border-white/30">
                                        Schedule a Visit
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative -mt-20 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-2xl p-8 text-center hover:scale-105 transition-transform"
                            >
                                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="text-primary" size={32} />
                                </div>
                                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Programs Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Programs</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-6">
                            Choose the Right Program
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Pre-KG", age: "3-4 years", icon: "🎈", desc: "Foundation stage focusing on play and exploration" },
                            { name: "LKG", age: "4-5 years", icon: "🎨", desc: "Lower Kindergarten with basic literacy and numeracy" },
                            { name: "UKG", age: "5-6 years", icon: "📚", desc: "Upper Kindergarten preparing for formal schooling" }
                        ].map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-t-4 border-secondary"
                            >
                                <div className="text-6xl mb-4 text-center">{program.icon}</div>
                                <h3 className="text-2xl font-bold text-primary mb-2 text-center">{program.name}</h3>
                                <p className="text-secondary font-semibold text-center mb-4">{program.age}</p>
                                <p className="text-gray-600 text-center leading-relaxed">{program.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "About Us", link: "/pre-primary/about", icon: Heart },
                            { title: "Academic", link: "/pre-primary/academic", icon: BookOpen },
                            { title: "Admissions", link: "/pre-primary/admissions", icon: Users },
                            { title: "Contact", link: "/pre-primary/contact", icon: Sparkles }
                        ].map((item, idx) => (
                            <Link key={idx} to={item.link}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all group cursor-pointer"
                                >
                                    <item.icon className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={40} />
                                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                                        {item.title}
                                    </h3>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-gradient-to-r from-primary to-primary/90">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
                            Ready to Begin Your Child's Journey?
                        </h2>
                        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                            Join our nurturing community where every child blooms
                        </p>
                        <Link to="/pre-primary/admissions">
                            <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                                Apply Now
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PrePrimaryHome;
