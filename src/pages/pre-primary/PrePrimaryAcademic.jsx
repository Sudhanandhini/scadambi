import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Sparkles, Heart, Brain } from 'lucide-react';

const PrePrimaryAcademic = () => {
    const subjects = [
        { name: "Literacy", icon: "📚", desc: "Alphabets, words, and reading skills" },
        { name: "Numeracy", icon: "🔢", desc: "Numbers, counting, and math basics" },
        { name: "General Awareness", icon: "🌍", desc: "World around us and environment" },
        { name: "Social Development", icon: "👫", desc: "Making friends and social skills" },
        { name: "Emotional Development", icon: "❤️", desc: "Understanding and expressing feelings" },
        { name: "Physical Development", icon: "🤸", desc: "Motor skills and physical activities" },
        { name: "Art & Craft", icon: "🎨", desc: "Creative expression and fine motor" },
        { name: "Storytelling", icon: "📖", desc: "Language and imagination building" }
    ];

    const programs = [
        {
            name: "Pre-KG",
            age: "3-4 years",
            focus: "Foundation stage with focus on play, exploration, and social skills",
            color: "from-pink-400 to-pink-600"
        },
        {
            name: "LKG",
            age: "4-5 years",
            focus: "Lower Kindergarten with basic literacy and numeracy introduction",
            color: "from-blue-400 to-blue-600"
        },
        {
            name: "UKG",
            age: "5-6 years",
            focus: "Upper Kindergarten preparing children for formal schooling",
            color: "from-purple-400 to-purple-600"
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
                            Academic Information
                        </h1>
                        <p className="text-xl text-white/90">
                            Play-based curriculum for Pre-KG, LKG & UKG
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Programs */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4">
                            Our Programs
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                            >
                                <div className={`bg-gradient-to-br ${program.color} p-6 text-white`}>
                                    <h3 className="text-3xl font-bold mb-2">{program.name}</h3>
                                    <p className="text-white/90">{program.age}</p>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 leading-relaxed">{program.focus}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Subjects */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4">
                            Subjects Offered
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {subjects.map((subject, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
                            >
                                <div className="text-5xl mb-4">{subject.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-2">{subject.name}</h3>
                                <p className="text-gray-600 text-sm">{subject.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* School Timings */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-12 border-2 border-secondary/20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <Clock className="text-secondary mx-auto mb-4" size={40} />
                                <h3 className="text-2xl font-bold text-primary mb-2">Working Hours</h3>
                                <p className="text-gray-700 text-lg">8:45 AM - 2:30 PM</p>
                            </div>
                            <div>
                                <Users className="text-secondary mx-auto mb-4" size={40} />
                                <h3 className="text-2xl font-bold text-primary mb-2">Working Days</h3>
                                <p className="text-gray-700 text-lg">Monday - Saturday</p>
                            </div>
                            <div>
                                <Heart className="text-secondary mx-auto mb-4" size={40} />
                                <h3 className="text-2xl font-bold text-primary mb-2">Class Size</h3>
                                <p className="text-gray-700 text-lg">Small Groups</p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default PrePrimaryAcademic;
