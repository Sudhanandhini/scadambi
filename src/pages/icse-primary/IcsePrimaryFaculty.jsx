import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryFaculty = () => {
    const leadership = [
        {
            name: "ROHINI GOPAL",
            position: "Principal",
            subject: "English",
            icon: "👩‍💼"
        },
        {
            name: "USHA S",
            position: "Vice Principal",
            subject: "English",
            icon: "👩‍🏫"
        },
        {
            name: "PRATHIMA S",
            position: "Vice Principal",
            subject: "Social Studies and Computer Science",
            icon: "👩‍🏫"
        }
    ];

    const facultyBySubject = {
        "English": [
            "ROHINI GOPAL", "USHA S", "NAGALAKSHMI N", "PADMA B S", "Komala G V",
            "RAJESWARI R", "SOUMYA B S", "BINDU Y R", "H S Geetha", "ARPITHA",
            "SHASHIKALA N", "PUSHPALATHA P", "SHALINI C N"
        ],
        "Mathematics": [
            "SNEHA M S", "KAVYA SRINIVAS MURTHY PASTAY", "K S USHA Gowrish",
            "KAVITHA G", "SAMYUKTHA K P", "HARSHAVATHI M", "MAMATHA BM",
            "LAKSHMI K", "SUDHA S RAO"
        ],
        "Science": [
            "PAVITA T", "SHWETHA N", "Ashwini H", "SHRUTHI V", "VIMALA G",
            "Komala G V"
        ],
        "Social Studies": [
            "PRATHIMA S", "SHUBHA S HEGDE", "DIVYA S", "PRATHIBHA KUMARI U",
            "RAJANI H R"
        ],
        "Languages": [
            "SUMATHI R (Kannada)", "V VARALAKSHMI (Hindi)", "KALPANA RAJU (Kannada)",
            "DHANALAKSHMI M (Kannada)", "SHRUTHI N S (Kannada)", "R RADHA (Hindi)",
            "ROOPASHREE BR (Kannada)", "VASANTHI S K (Hindi)"
        ],
        "Computer Science": [
            "PRATHIMA S", "SNEHA M S", "KAVYA SRINIVAS MURTHY PASTAY",
            "SHRUTHI V", "DIVYA S", "KAVITHA G", "BINDU Y R", "SAMYUKTHA K P"
        ],
        "Physical Education": [
            "SIDDAPPA S BEKKANAVAR", "B YASHASWINI", "SACHIN", "PONNURU DEVARAJA"
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
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Faculty</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            44+ dedicated and experienced educators committed to student excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Leadership Team
                        </h2>
                        <p className="text-xl text-gray-600">
                            Guiding our school towards excellence
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {leadership.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
                            >
                                <div className="text-6xl mb-4">{member.icon}</div>
                                <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                                <p className="text-secondary font-semibold mb-2">{member.position}</p>
                                <p className="text-gray-600">{member.subject}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faculty by Subject */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Department-wise Faculty
                        </h2>
                        <p className="text-xl text-gray-600">
                            Expert teachers across all subjects
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {Object.entries(facultyBySubject).map(([subject, teachers], idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                        <BookOpen className="text-secondary" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary">{subject}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {teachers.map((teacher, tIdx) => (
                                        <li key={tIdx} className="flex items-center">
                                            <Award className="text-secondary mr-3 shrink-0" size={16} />
                                            <span className="text-gray-700">{teacher}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-2xl p-8 text-center"
                        >
                            <Users className="mx-auto mb-4 text-secondary" size={48} />
                            <div className="text-5xl font-bold mb-2">44+</div>
                            <p className="text-xl">Qualified Teachers</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-secondary to-secondary/80 text-primary rounded-2xl p-8 text-center"
                        >
                            <BookOpen className="mx-auto mb-4" size={48} />
                            <div className="text-5xl font-bold mb-2">8+</div>
                            <p className="text-xl">Subject Departments</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-2xl p-8 text-center"
                        >
                            <Award className="mx-auto mb-4 text-secondary" size={48} />
                            <div className="text-5xl font-bold mb-2">40+</div>
                            <p className="text-xl">Years of Experience</p>
                        </motion.div>
                    </div>
                </div>
            </section>

          
        </div>
    );
};

export default IcsePrimaryFaculty;
