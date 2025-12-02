import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold font-serif text-primary mb-8 text-center"
                >
                    About Excellence Academy
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="School Building"
                            className="rounded-2xl shadow-xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-bold text-secondary mb-4">Our History</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Founded in 1998, Excellence Academy has grown from a humble beginning with 50 students to a premier institution with over 2000 scholars. Our journey has been marked by a relentless pursuit of academic brilliance and character building.
                        </p>
                        <h2 className="text-2xl font-bold text-secondary mb-4">Our Philosophy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We believe that every child is unique. Our educational philosophy centers on "Holistic Growth" - balancing rigorous academics with sports, arts, and ethical values to shape well-rounded global citizens.
                        </p>
                    </motion.div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Leadership Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. Sarah Johnson", role: "Principal", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                            { name: "Prof. Alan Smith", role: "Vice Principal", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                            { name: "Mrs. Emily Davis", role: "Head of Academics", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
                        ].map((person, idx) => (
                            <div key={idx} className="text-center">
                                <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-secondary/20" />
                                <h3 className="text-xl font-bold text-primary">{person.name}</h3>
                                <p className="text-gray-500">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
