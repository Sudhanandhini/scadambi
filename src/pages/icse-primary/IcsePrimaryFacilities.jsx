import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Monitor, Trophy, Library } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryFacilities = () => {
    const facilities = [
        { icon: <BookOpen />, title: "21 Classrooms", description: "Spacious and well-equipped learning spaces" },
        { icon: <Monitor />, title: "Computer Lab", description: "Modern computer lab for digital learning" },
        { icon: <BookOpen />, title: "Language Room", description: "Dedicated space for language development" },
        { icon: <Library />, title: "Common Library", description: "Well-stocked library for all grades" },
        { icon: <Trophy />, title: "Sports Facilities", description: "Indoor and outdoor games facilities" }
    ];

    const sportsActivities = {
        indoor: ["Bowling Pins", "Cones and Rings", "Chess", "Brainvita", "Snake and Ladder", "Chouka bara"],
        outdoor: ["Hoops Relay", "Throw Ball", "Kho Kho", "Tug of War", "4 x 100 m Relay", "Roll the Ball"]
    };

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Facilities</h1>
                        <p className="text-xl text-white/90">World-class infrastructure for holistic development</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {facilities.map((facility, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="bg-secondary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    {React.cloneElement(facility.icon, { className: 'text-secondary', size: 32 })}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{facility.title}</h3>
                                <p className="text-gray-600">{facility.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-12">
                        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Campus Overview</h2>
                        <p className="text-lg text-gray-700 text-center mb-8">
                            Primary Wing is situated in Basement floor and 1st Floor in the main campus of S Cadambi Vidya Kendra
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Sports & Games</h2>
                        <p className="text-xl text-gray-600">Instrumental tools for holistic development</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Indoor Games</h3>
                            <ul className="space-y-3">
                                {sportsActivities.indoor.map((sport, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <span className="text-secondary mr-3">•</span>
                                        <span>{sport}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-secondary to-secondary/80 text-primary rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Outdoor Games</h3>
                            <ul className="space-y-3">
                                {sportsActivities.outdoor.map((sport, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <span className="text-primary mr-3">•</span>
                                        <span>{sport}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default IcsePrimaryFacilities;
