import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Target, Heart, Star } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryAbout = () => {
    const values = [
        {
            icon: <Target />,
            title: "Strong Foundation",
            description: "Building solid academic and character foundations for lifelong learning"
        },
        {
            icon: <Heart />,
            title: "Value Education",
            description: "Inculcating good social habits, values, and cultural awareness"
        },
        {
            icon: <Star />,
            title: "Holistic Development",
            description: "360-degree development through academics and co-curricular activities"
        },
        {
            icon: <Users />,
            title: "Expert Faculty",
            description: "44+ experienced teachers dedicated to student success"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">About ICSE Primary Wing</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            S. Cadambi Vidya Kendra English Secondary School - Building Values through Education
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* School Info */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-primary mb-6">Our School</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                <strong>S. Cadambi Vidya Kendra English Secondary School</strong> is committed to providing 
                                the best quality primary education with a solid foundation to instill confidence and empower 
                                students to be lifelong learners.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Our ICSE Primary Wing focuses on inculcating good social and behavioral habits, values, and culture. 
                                From academics to co-curricular activities, we instill perseverance and a never-say-die spirit 
                                in every student's heart.
                            </p>
                            <div className="bg-secondary/10 rounded-xl p-6 border-l-4 border-secondary">
                                <p className="text-lg font-semibold text-primary mb-2">Affiliation</p>
                                <p className="text-gray-700">Affiliated to CISCE Board, New Delhi</p>
                                <p className="text-gray-700 font-bold">School Code: KA042</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full -mr-20 -mt-20"></div>
                            <div className="relative z-10">
                                <div className="text-6xl mb-6">🎓</div>
                                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                                <p className="text-lg leading-relaxed text-white/90 mb-6">
                                    To create an environment for future leaders who possess skills and aptitudes in an array 
                                    of functional disciplines, making them not only good students but honest, humble, and 
                                    brilliant human beings.
                                </p>
                                <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                                    <Award className="text-secondary" size={32} />
                                    <div>
                                        <p className="font-bold text-xl">Excellence</p>
                                        <p className="text-white/80">Since 1984</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600">
                            Principles that guide our educational approach
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    {React.cloneElement(value.icon, { className: 'text-secondary', size: 28 })}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principal's Message */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Principal's Message
                        </h2>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-12"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-32 h-32 rounded-full flex items-center justify-center text-6xl shrink-0">
                                    👨‍🏫
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-primary mb-2">ROHINI GOPAL</h3>
                                    <p className="text-xl text-gray-600 font-semibold">Principal - ICSE Primary Wing</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    I feel extremely privileged to serve as the Principal of ICSE Primary Wing. I strongly believe 
                                    that every student needs to be given the best quality primary education with a solid foundation 
                                    to instill confidence and empower them to be lifelong learners.
                                </p>
                                <p>
                                    The focus is to inculcate good social and behavioural habits, values and culture. From academics 
                                    to co-curricular activities, perseverance and a never-say-die spirit are entrenched in the heart 
                                    of every student not only making them good students but honest, humble and brilliant human beings.
                                </p>
                                <p>
                                    In today's dynamic world, a 360 degree development and grooming is of supreme importance and 
                                    through our methods, at primary school, we are creating an environment for future leaders, 
                                    who possess skills and aptitudes in an array of functional disciplines.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Campus Info */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-primary mb-6">Campus Overview</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                The Primary Wing is situated in the Basement floor and 1st Floor in the main campus 
                                of S. Cadambi Vidya Kendra, providing a dedicated learning environment for young students.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-secondary">
                                    <div className="flex items-center mb-2">
                                        <BookOpen className="text-secondary mr-3" size={24} />
                                        <h3 className="text-xl font-bold text-primary">21 Classrooms</h3>
                                    </div>
                                    <p className="text-gray-600">Spacious and well-equipped learning spaces</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-secondary">
                                    <div className="flex items-center mb-2">
                                        <BookOpen className="text-secondary mr-3" size={24} />
                                        <h3 className="text-xl font-bold text-primary">Specialized Rooms</h3>
                                    </div>
                                    <p className="text-gray-600">1 Computer Lab, 1 Language Room, 1 Common Library</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-secondary">
                                    <div className="flex items-center mb-2">
                                        <Users className="text-secondary mr-3" size={24} />
                                        <h3 className="text-xl font-bold text-primary">Expert Faculty</h3>
                                    </div>
                                    <p className="text-gray-600">44+ qualified and experienced teachers</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <h3 className="text-2xl font-bold text-primary mb-6">Quick Facts</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                                            <span className="text-2xl">🏫</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">Established</p>
                                            <p className="text-gray-600">Since 1984</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                                            <span className="text-2xl">📚</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">Board</p>
                                            <p className="text-gray-600">CISCE (ICSE)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                                            <span className="text-2xl">🎯</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">Grades</p>
                                            <p className="text-gray-600">1 to 5</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                                            <span className="text-2xl">🏆</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">Special Programs</p>
                                            <p className="text-gray-600">Scouts & Guides, Bal Vikas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        
        </div>
    );
};

export default IcsePrimaryAbout;
