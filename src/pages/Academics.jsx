import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Microscope, Calculator, Languages } from 'lucide-react';

const Academics = () => {
    const streams = [
        {
            title: "Pre-School",
            desc: "Montessori-based learning focusing on sensory development, social skills, and basic literacy.",
            subjects: ["Sensory Play", "Phonics", "Art & Craft", "Basic Numeracy"]
        },
        {
            title: "Primary School (Grades 1-7)",
            desc: "A robust curriculum following CBSE/ICSE standards, emphasizing foundational knowledge.",
            subjects: ["Mathematics", "Science", "Social Studies", "Languages (English, Hindi, Regional)"]
        },
        {
            title: "High School (Grades 8-10)",
            desc: "Advanced concepts preparing students for board exams with a focus on critical thinking.",
            subjects: ["Physics", "Chemistry", "Biology", "History & Civics", "Geography", "Mathematics"]
        },
        {
            title: "PU College (Grades 11-12)",
            desc: "Specialized streams to prepare for professional courses and entrance exams (JEE/NEET).",
            subjects: ["PCMB (Physics, Chem, Maths, Bio)", "PCMC (Computer Science)", "Commerce & Accountancy"]
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">Academic Excellence</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our curriculum is designed to challenge and inspire students at every stage of their educational journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                    {streams.map((stream, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-xl shadow-md p-8 border-l-4 border-secondary hover:shadow-xl transition-shadow"
                        >
                            <h2 className="text-2xl font-bold text-primary mb-2">{stream.title}</h2>
                            <p className="text-gray-600 mb-6">{stream.desc}</p>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Key Subjects & Focus Areas:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {stream.subjects.map((sub, i) => (
                                        <span key={i} className="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                            {sub}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Academics;
