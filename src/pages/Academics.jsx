import React from 'react';
import { motion } from 'framer-motion';
import { Baby, BookOpen, School, GraduationCap, Trophy, Sparkles } from 'lucide-react';

const Academics = () => {
    const wings = [
        {
            title: "Shishu Chaitanya",
            subtitle: "Pre-Primary Wing",
            desc: "A nurturing Montessori-based environment where young minds begin their educational journey through play, exploration, and sensory learning.",
            grades: ["Playhome", "Pre KG", "LKG", "UKG"],
            icon: Baby,
            color: "from-pink-400 to-pink-600",
            board: "Play-Based Learning"
        },
        {
            title: "Scadambi Edu Center",
            subtitle: "Pre-Primary Wing (ICSE)",
            desc: "ICSE-affiliated pre-primary education focusing on holistic development, language skills, and foundational concepts through interactive learning.",
            grades: ["Pre KG", "LKG", "UKG"],
            icon: Sparkles,
            color: "from-blue-400 to-blue-600",
            board: "ICSE Board"
        },
        {
            title: "Scadambi Vidhya Kendra",
            subtitle: "Primary Wing (ICSE)",
            desc: "Building strong academic foundations with comprehensive ICSE curriculum, emphasizing core subjects, critical thinking, and character development.",
            grades: ["1st Standard", "2nd Standard", "3rd Standard", "4th Standard", "5th Standard"],
            icon: BookOpen,
            color: "from-green-400 to-green-600",
            board: "ICSE Board"
        },
        {
            title: "Scadambi Vidhya Kendra",
            subtitle: "Secondary School (ICSE)",
            desc: "Advanced ICSE curriculum preparing students for board examinations with focus on analytical skills, scientific temperament, and comprehensive learning.",
            grades: ["6th Standard", "7th Standard", "8th Standard", "9th Standard", "10th Standard"],
            icon: School,
            color: "from-orange-400 to-orange-600",
            board: "ICSE Board"
        },
        {
            title: "Scadambi Education Center",
            subtitle: "State High School (SEP)",
            desc: "State board education providing quality learning aligned with regional curriculum, preparing students for state board examinations and future opportunities.",
            grades: ["9th Standard", "10th Standard"],
            icon: Trophy,
            color: "from-purple-400 to-purple-600",
            board: "State Board (SEP)"
        },
        {
            title: "Scadambi Vidhya Kendra",
            subtitle: "Pre-University College (SEP)",
            desc: "Specialized streams for competitive exam preparation (JEE/NEET/CET) and career excellence, with expert faculty and comprehensive study programs.",
            grades: ["11th Standard (PUC-I)", "12th Standard (PUC-II)"],
            icon: GraduationCap,
            color: "from-red-400 to-red-600",
            board: "State Board (SEP)"
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
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                        Our Educational Wings
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mt-3 mb-4">
                        Academic Excellence Across All Levels
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        From early childhood to pre-university, our diverse wings cater to every stage of learning with specialized curricula and expert guidance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                    {wings.map((wing, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Icon Section */}
                                <div className={`bg-gradient-to-br ${wing.color} p-8 md:p-12 flex items-center justify-center md:w-48 relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                                    <wing.icon size={64} className="text-white relative z-10" />
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-1 font-serif">
                                                {wing.title}
                                            </h2>
                                            <p className="text-lg text-gray-700 font-semibold mb-2">
                                                {wing.subtitle}
                                            </p>
                                        </div>
                                        <span className="inline-block bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold border border-secondary/30 whitespace-nowrap mt-2 md:mt-0">
                                            {wing.board}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {wing.desc}
                                    </p>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                                            Classes Offered:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {wing.grades.map((grade, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-gradient-to-r from-blue-50 to-blue-100 text-primary px-4 py-2 rounded-lg text-sm font-semibold border border-blue-200 hover:shadow-md transition-shadow"
                                                >
                                                    {grade}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white"
                >
                    <h3 className="text-3xl font-bold mb-4 font-serif">
                        A Complete Educational Ecosystem
                    </h3>
                    <p className="text-lg text-white/90 max-w-3xl mx-auto">
                        Our multiple wings ensure that every child receives the right education at the right stage,
                        with options for both ICSE and State Board curricula to suit diverse learning needs and aspirations.
                    </p>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-8 lg:p-12 order-2 lg:order-1">
                                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Established 2007</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mt-2 mb-6">Pre-University College</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p className="text-lg">
                                        <strong className="text-primary">S. Cadambi Independent Pre-University College</strong> was established in the year 2007 with a meager strength of 10 students, which has now reached <strong className="text-secondary">400 students</strong>.
                                    </p>
                                    <p className="text-lg">
                                        S. Cadambi Group of Institutions, functioning under The Kalkunte Education, was established in the year 1984, with the humble beginning to build academic institutions par excellence. This was created to nurture the character of the young ones to grow into socially responsible citizens of our country.
                                        It started with an academic strength with less than 50 students, it has now reached a strength of around 2000 students.

                                    </p>
                                    <p className="text-lg">
                                        An <strong className="text-primary">integrated programme</strong> for students aspiring to take up national level competitive examinations like <strong>JEE, NEET, and CET</strong> is also conducted.
                                    </p>
                                </div>
                            </div>
                            <div className="h-96 lg:h-auto bg-cover bg-center order-1 lg:order-2" style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop')"
                            }}>
                                <div className="w-full h-full bg-gradient-to-l from-primary/80 to-transparent flex items-center justify-end p-12">
                                    <div className="text-white text-right">
                                        <GraduationCap className="w-16 h-16 text-secondary ml-auto mb-4" />
                                        <h3 className="text-3xl font-bold mb-2">JEE | NEET | CET</h3>
                                        <p className="text-xl">Competitive Exam Preparation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                 <motion.section
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-24"
                                >
                                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border-2 border-secondary/20">
                                        <div className="text-center mb-10">
                                            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">Academic Excellence & Results</h2>
                                            <p className="text-gray-600 text-lg">Consistently achieving outstanding results across all boards</p>
                                        </div>
                                        <div className="prose prose-lg max-w-none text-gray-700">
                                            <p className="text-lg leading-relaxed mb-4">
                                                The institution has established itself with both <strong className="text-primary">ICSE stream</strong> (permanent affiliation to ICSE Board, New Delhi) and the <strong className="text-primary">State Board stream</strong> (affiliated to Karnataka Secondary Education Board).
                                            </p>
                                            <p className="text-lg leading-relaxed mb-4">
                                                The ICSE High School has secured <strong className="text-secondary">100% results</strong> with many distinctions in the 10th Board exams every year. The State High School achieves <strong className="text-secondary">98% results</strong> in the SSLC board exams.
                                            </p>
                                            <p className="text-lg leading-relaxed">
                                                The initial start has emerged to a well-dimensional school which caters education in both ICSE and State syllabi streams at an <strong className="text-primary">economical fee structure</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </motion.section>

            </div>
        </div>
    );
};

export default Academics;