import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Target, Award, Star } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryClubs = () => {
    const scoutsActivities2025 = [
        "23/01/2025 - Traffic awareness",
        "12/02/2025 - Chaturtha Charan/Heerak Pankh testing camp",
        "22/02/2025 - Baden Powell's birthday (Founder's day)",
        "17/03/2025 - Rajya Puraskar",
        "26/06/2025 - Nature Camp at Doddamaranahalli, Kanakapura",
        "31/08/2025 - Geeta Gayana Competition",
        "26/10/2025 - Dwitiya Charan / Rajat Pankh testing camp"
    ];

    const balVikasProgram = {
        title: "Bal Vikas Program",
        description: "A character building and human values program emphasizing principles like truth, righteousness, peace, love, and non-violence.",
        activities: [
            "Storytelling sessions",
            "Prayer and meditation",
            "Community service",
            "Value-based activities"
        ],
        goals: [
            "Foster self-confidence",
            "Develop respect for all",
            "Build strong character",
            "Nurture human values"
        ]
    };

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Clubs & Societies</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Building character, values, and leadership through engaging activities
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bharat Scouts and Guides */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Bharat Scouts and Guides
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Active since 2009, building discipline, teamwork, and responsibility
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                                <div className="flex items-center mb-6">
                                    <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                                        <Users className="text-primary" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary">About the Program</h3>
                                </div>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    The Bharat Scouts and Guides is an educational movement for young people that develops 
                                    their physical, intellectual, social, and spiritual potential through activities like 
                                    camps, community service, and skill-building.
                                </p>
                                <div className="bg-secondary/10 rounded-xl p-6 border-l-4 border-secondary mb-6">
                                    <p className="text-primary font-bold text-lg mb-2">Motto: "Be Prepared"</p>
                                    <p className="text-gray-600">Since 2009</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                        <p className="text-gray-700">Development of physical, intellectual, and spiritual potential</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                        <p className="text-gray-700">Life-saving skills and 'Learning by Doing'</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                        <p className="text-gray-700">Character development and self-reliance</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                        <p className="text-gray-700">Leadership and teamwork skills</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-2xl p-8 h-full">
                                <h3 className="text-2xl font-bold mb-6">Recent Activities (2025)</h3>
                                <div className="space-y-4">
                                    {scoutsActivities2025.map((activity, idx) => (
                                        <div key={idx} className="flex items-start p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                                            <Target className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                            <p className="text-white/90">{activity}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sections */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Age-Specific Sections</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-6 text-center">
                                <div className="text-5xl mb-3">🦁</div>
                                <h4 className="text-xl font-bold text-primary mb-2">Cubs & Bulbuls</h4>
                                <p className="text-gray-600">Primary School Students</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 text-center">
                                <div className="text-5xl mb-3">⚜️</div>
                                <h4 className="text-xl font-bold text-primary mb-2">Scouts & Guides</h4>
                                <p className="text-gray-600">Middle School Students</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 text-center">
                                <div className="text-5xl mb-3">🎖️</div>
                                <h4 className="text-xl font-bold text-primary mb-2">Rangers & Rovers</h4>
                                <p className="text-gray-600">Senior Students</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bal Vikas Program */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Bal Vikas Program
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Character building through human values and spiritual development
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl p-8 h-full">
                                <Heart className="text-secondary mb-6" size={48} />
                                <h3 className="text-2xl font-bold text-primary mb-4">{balVikasProgram.title}</h3>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    {balVikasProgram.description}
                                </p>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-primary mb-3">Core Values:</h4>
                                    {['Truth', 'Righteousness', 'Peace', 'Love', 'Non-violence'].map((value, idx) => (
                                        <div key={idx} className="flex items-center">
                                            <Star className="text-secondary mr-3 shrink-0" size={20} />
                                            <span className="text-gray-700 font-semibold">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                                <h3 className="text-2xl font-bold text-primary mb-6">Activities</h3>
                                <div className="space-y-4">
                                    {balVikasProgram.activities.map((activity, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <div className="bg-secondary/20 w-10 h-10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                                                <span className="font-bold text-primary">{idx + 1}</span>
                                            </div>
                                            <p className="text-gray-700 text-lg pt-2">{activity}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-6">Program Goals</h3>
                                <div className="space-y-3">
                                    {balVikasProgram.goals.map((goal, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <Target className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                            <p className="text-white/90">{goal}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bhagavat Gita */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-white rounded-2xl p-12 shadow-xl text-center"
                    >
                        <div className="text-6xl mb-6">📖</div>
                        <h2 className="text-4xl font-bold text-primary mb-6">Bhagavat Gita Recitation</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Every day in the school assembly, students are taught the Bhagavat Gita. The goal is to provide 
                            moral and spiritual guidance. We strongly believe the Bhagavat Gita can help students develop 
                            better decision-making skills by learning about life lessons.
                        </p>
                        <div className="bg-secondary/10 rounded-xl p-6 border-l-4 border-secondary">
                            <p className="text-primary font-semibold text-lg">
                                Daily assembly program focused on character development and life values
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

           
        </div>
    );
};

export default IcsePrimaryClubs;
