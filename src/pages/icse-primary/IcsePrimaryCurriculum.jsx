import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Target, Award } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryCurriculum = () => {
    const grade12Subjects = [
        "English 1 (Grammar and Composition)",
        "English 2 (Literature - Prose and Poetry)",
        "Kannada and Hindi",
        "Environmental Science",
        "Computer Basics and Applications",
        "Art and Craft Education",
        "Value Education and General Knowledge"
    ];

    const grade35Subjects = [
        "English 1 (Grammar and Composition)",
        "English 2 (Literature - Prose and Poetry)",
        "Second Language (Kannada or Hindi)",
        "Science",
        "Social Studies",
        "Computer Basics and Applications",
        "Art and Craft Education",
        "Personality Development and General Knowledge"
    ];

    const methodology = [
        {
            step: "1",
            title: "Previous Knowledge",
            description: "Connect new concepts with existing understanding"
        },
        {
            step: "2",
            title: "Hands-on Activities",
            description: "Carefully designed practical activities for learning"
        },
        {
            step: "3",
            title: "Logical Reasoning",
            description: "Develop critical thinking and reasoning skills"
        },
        {
            step: "4",
            title: "Real-life Application",
            description: "Apply learning to practical situations"
        },
        {
            step: "5",
            title: "Concept Reinforcement",
            description: "Deepen understanding through review and practice"
        }
    ];

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
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">ICSE Curriculum</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Comprehensive education framework designed for holistic development
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Curriculum Overview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
                            Curriculum Details
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We follow the <strong>ICSE Curriculum framework</strong> that aims to enrich the educational journey 
                            with its unique and special components integrated into the curriculum. This approach lets students go 
                            beyond textbooks and immerse themselves in real-world experiences, igniting their inquisitive spirits.
                        </p>
                    </motion.div>

                    {/* Subjects by Grade */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <div className="flex items-center mb-6">
                                <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                    <BookOpen className="text-primary" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Grade 1 & 2</h3>
                            </div>
                            <ul className="space-y-3">
                                {grade12Subjects.map((subject, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                        <span className="text-gray-700">{subject}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <div className="flex items-center mb-6">
                                <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                    <BookOpen className="text-primary" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Grade 3 to 5</h3>
                            </div>
                            <ul className="space-y-3">
                                {grade35Subjects.map((subject, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                        <span className="text-gray-700">{subject}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Teaching Methodology */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            5-Step Teaching Methodology
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A dynamic framework extending beyond traditional methods
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {methodology.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="text-3xl font-bold text-primary">{item.step}</span>
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-3 text-center">{item.title}</h3>
                                <p className="text-gray-600 text-sm text-center">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-4">Our Teaching Philosophy</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We firmly believe in empowering each child by giving them the opportunity to explore and think 
                            independently. We develop basic literacy and numeracy skills, foster socialization, and nurture 
                            a love for learning. We aim to prepare students and lay a strong foundation for further education 
                            and lifelong learning.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Assessment */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-primary mb-6">
                                Continuous & Comprehensive Evaluation
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We adopt a Continuous and Comprehensive Evaluation approach that combines regular assessments 
                                through class tests, unit tests, and semester examinations.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Students showcase their content knowledge and acquired skills through diverse platforms such as:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                    <span className="text-gray-700">Literary competitions and creative writing</span>
                                </li>
                                <li className="flex items-start">
                                    <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                    <span className="text-gray-700">Sports activities and physical education</span>
                                </li>
                                <li className="flex items-start">
                                    <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                    <span className="text-gray-700">Cultural competitions and creative arts</span>
                                </li>
                                <li className="flex items-start">
                                    <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                    <span className="text-gray-700">Science exhibitions and projects</span>
                                </li>
                                <li className="flex items-start">
                                    <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                    <span className="text-gray-700">Interschool competitions</span>
                                </li>
                                <li className="flex items-start">
                                    <Award className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                    <span className="text-gray-700">Annual Day performances</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full -mr-20 -mt-20"></div>
                            <div className="relative z-10">
                                <Target className="text-secondary mb-6" size={48} />
                                <h3 className="text-3xl font-bold mb-6">Our Goal</h3>
                                <p className="text-lg leading-relaxed text-white/90">
                                    Through emphasizing practical applications and skills development, we equip students for 
                                    a smooth transition to Middle School, nurturing their confidence and competence for future 
                                    academic pursuits.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

          
        </div>
    );
};

export default IcsePrimaryCurriculum;
