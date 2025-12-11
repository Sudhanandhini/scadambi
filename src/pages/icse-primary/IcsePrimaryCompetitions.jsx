import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Palette, Music, Book } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryCompetitions = () => {
    const competitions = [
        {
            icon: <Book />,
            title: "Pick and Speak",
            description: "Environmental topics competition on World Environment Day",
            category: "Literary"
        },
        {
            icon: <Palette />,
            title: "Fancy Dress Competition",
            themes: [
                "5th Std: Mythological characters",
                "4th Std: Famous personalities",
                "3rd Std: Historical characters",
                "2nd Std: Costumes of different states",
                "1st Std: Daily use items"
            ],
            category: "Creative"
        },
        {
            icon: <Music />,
            title: "Solo Singing Competition",
            description: "Showcase musical talents across all grades",
            category: "Cultural"
        },
        {
            icon: <Palette />,
            title: "Art Competition (Pair Event)",
            themes: [
                "5th Std: Rangoli (girls) / Kite Making (boys)",
                "4th Std: Torana Making",
                "3rd Std: Flower bouquet making",
                "2nd Std: Greeting card making",
                "1st Std: Clay model making"
            ],
            category: "Creative"
        },
        {
            icon: <Book />,
            title: "General Knowledge Quiz",
            description: "Test knowledge across various subjects and current affairs",
            category: "Academic"
        },
        {
            icon: <Music />,
            title: "Mono Acting Competition",
            description: "Individual dramatic performance showcasing acting skills",
            category: "Cultural"
        },
        {
            icon: <Book />,
            title: "Oratory Competition",
            description: "Public speaking competition to develop communication skills",
            category: "Literary"
        },
        {
            icon: <Trophy />,
            title: "Olympiad Preliminary Round",
            description: "Academic olympiad across various subjects",
            category: "Academic"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Competitions</h1>
                        <p className="text-xl text-white/90">Platforms for students to showcase their talents</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We encourage students to learn and grow in various areas including academics, arts, culture, and sports. 
                            Competitions are organized at different levels within classrooms and across different classes.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {competitions.map((comp, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <div className="bg-secondary/20 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                                        {React.cloneElement(comp.icon, { className: 'text-secondary', size: 28 })}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">{comp.title}</h3>
                                        <span className="text-sm text-secondary font-semibold">{comp.category}</span>
                                    </div>
                                </div>
                                {comp.description && <p className="text-gray-600 mb-4">{comp.description}</p>}
                                {comp.themes && (
                                    <div>
                                        <p className="font-semibold text-primary mb-2">Grade-wise Themes:</p>
                                        <ul className="space-y-2">
                                            {comp.themes.map((theme, tIdx) => (
                                                <li key={tIdx} className="text-gray-600 text-sm flex items-start">
                                                    <span className="text-secondary mr-2">•</span>
                                                    {theme}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

          
        </div>
    );
};

export default IcsePrimaryCompetitions;
