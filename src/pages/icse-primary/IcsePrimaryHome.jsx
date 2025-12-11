import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Calendar, MapPin, ChevronRight,
    BookOpen, Users, Trophy, Sparkles, ArrowRight,
    GraduationCap, Heart, Star, Target, Award
} from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';


// Replace with your actual images
import leftLarge from "../../assets/images/deisgn.png";
import leftSmall from "../../assets/images/about_students.png";

const gradeCards = [
    {
        grade: "Grade 1",
        overview: "Foundation building with interactive learning and core concepts.",
    },
    {
        grade: "Grade 2",
        overview: "Strengthening fundamentals with hands-on activities.",
    },
    {
        grade: "Grade 3",
        overview: "Expanding concepts through inquiry-based learning.",
    },
    {
        grade: "Grade 4",
        overview: "Higher-order thinking and skill-based activities.",
    },
    {
        grade: "Grade 5",
        overview: "Preparation for middle school with advanced foundational skills.",
    },
];


const IcsePrimaryHome = () => {
    const features = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "ICSE Curriculum",
            description: "Comprehensive CISCE curriculum with focus on holistic development"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Experienced Faculty",
            description: "44+ qualified teachers dedicated to nurturing young minds"
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Bharat Scouts & Guides",
            description: "Active participation in character building programs since 2009"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Bal Vikas Program",
            description: "Focus on human values, truth, righteousness, peace and love"
        }
    ];

    const grades = [
        { name: "Grade 1", subjects: "English, Kannada/Hindi, EVS, Computer, Art" },
        { name: "Grade 2", subjects: "English, Kannada/Hindi, EVS, Computer, Art" },
        { name: "Grade 3", subjects: "English, Second Language, Science, Social Studies, Computer" },
        { name: "Grade 4", subjects: "English, Second Language, Science, Social Studies, Computer" },
        { name: "Grade 5", subjects: "English, Second Language, Science, Social Studies, Computer" }
    ];

    const highlights = [
        { icon: <Target />, text: "5-Step Teaching Methodology" },
        { icon: <Award />, text: "Continuous Assessment" },
        { icon: <Star />, text: "Co-curricular Excellence" },
        { icon: <Heart />, text: "Value-Based Education" }
    ];

    return (
        <div className="min-h-screen bg-background pt-20">
            <IcsePrimaryHeader />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <span className="text-secondary font-semibold">CISCE Affiliated • School Code: KA042</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                ICSE Primary Wing
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 mb-4">
                                Building Values through Education
                            </p>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                S. Cadambi Vidya Kendra's ICSE Primary Wing provides quality education from Grade 1 to 5,
                                focusing on strong foundations, character building, and comprehensive development.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/icse-primary/admissions"
                                    className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center"
                                >
                                    Apply for Admission
                                    <ArrowRight className="ml-2" size={20} />
                                </Link>
                                <Link
                                    to="/icse-primary/about"
                                    className="bg-primary/50   hover:bg-primary backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-all border border-white/30"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                                <div className="grid grid-cols-2 gap-6">
                                    {highlights.map((item, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                                {React.cloneElement(item.icon, { className: 'text-secondary', size: 28 })}
                                            </div>
                                            <p className="text-sm font-semibold">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Wave Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB" />
                    </svg>
                </div>
            </section>

            {/* Features Section */}


            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Why Choose Our ICSE Primary Wing?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive education that goes beyond academics to build character and values
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10, scale: 1.04 }}
                                className="
            bg-primary 
            text-white 
            rounded-2xl 
            p-8 
            shadow-lg 
            border 
            border-primary/40
            hover:bg-secondary 
            hover:text-white 
            hover:shadow-2xl 
            transition-all 
            duration-300
          "
                            >
                                <div
                                    className="
              bg-white/20 
              w-16 h-16 
              rounded-xl 
              flex items-center justify-center 
              mb-6 
              transition-all duration-300 
              group-hover:scale-110
            "
                                >
                                    {React.cloneElement(feature.icon, { className: 'text-white text-3xl' })}
                                </div>

                                <h3 className="text-xl font-bold mb-3 transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-white/90 leading-relaxed transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Grades Section */}
            {/* <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Our Grade Structure
                        </h2>
                        <p className="text-xl text-gray-600">
                            Comprehensive curriculum from Grade 1 to Grade 5
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {grades.map((grade, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                        <GraduationCap className="text-primary" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary">{grade.name}</h3>
                                </div>
                                <p className="text-gray-600">{grade.subjects}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <Link
                            to="/icse-primary/curriculum"
                            className="inline-flex items-center text-secondary hover:text-primary font-semibold text-lg group"
                        >
                            View Complete Curriculum
                            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section> */}

            <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Top layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                        {/* LEFT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
                                Our Grade Structure
                            </h2>
                            <p className="text-gray-600 max-w-xl">
                               Comprehensive curriculum from Grade 1 to Grade 5
                            </p>

                            {/* Images */}
                            <div className="mt-6 ">
                              
                                    <img
                                        src={leftLarge}
                                        alt="class session"
                                        className="w-full "
                                    />
                                
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN — 5 GRADE CARDS */}
                        <div className="space-y-6">
                            {gradeCards.map((g, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ y: -6 }}
                                    className="relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all border border-transparent"
                                >
                                    {/* Left accent bar */}
                                    <div
                                        className="absolute left-0 top-4 bottom-4 w-2 rounded-l-2xl"
                                        style={{
                                            background:
                                                "linear-gradient(180deg, rgba(49, 37, 221, 1), rgba(14, 13, 122, 1))",
                                        }}
                                    />
<div className='flex items-center '>
                                     <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                        <GraduationCap className="text-primary" size={24} />
                                    </div>

                                 <div>   <h3 className="text-xl font-semibold text-primary mb-2">{g.grade}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{g.overview}</p> </div> </div> 
                                </motion.div>
                            ))}

                            <div className="mt-4 text-right">
                                <Link
                                    to="/icse-primary/curriculum"
                                    className="inline-flex items-center text-secondary hover:text-primary font-semibold"
                                >
                                    View Complete Curriculum <ChevronRight className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Optional Lower Grade Structure Grid */}
                   
                    
                </div>
            </section>


            {/* Principal's Message */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full -mr-20 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full -ml-16 -mb-16"></div>
                                <div className="relative z-10">
                                    <div className="text-6xl mb-6">👨‍🏫</div>
                                    <h3 className="text-3xl font-bold mb-4">Principal's Message</h3>
                                    <p className="text-lg leading-relaxed text-white/90 mb-6">
                                        "Every student needs to be given the best quality primary education with a solid foundation
                                        to instill confidence and empower them to be lifelong learners."
                                    </p>
                                    <div className="border-t border-white/20 pt-4">
                                        <p className="font-bold text-xl text-secondary">ROHINI GOPAL</p>
                                        <p className="text-white/80">Principal - ICSE Primary Wing</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-primary mb-6">
                                Excellence in Primary Education
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At ICSE Primary Wing, we focus on inculcating good social and behavioral habits, values, and culture.
                                From academics to co-curricular activities, we instill perseverance and a never-say-die spirit in every student.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Through our innovative 5-step methodology and continuous evaluation approach, we create an environment
                                that nurtures future leaders with skills and aptitudes across multiple disciplines.
                            </p>
                            <Link
                                to="/icse-primary/about"
                                className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all group"
                            >
                                Read Full Message
                                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Join Our ICSE Primary Wing
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                            Give your child the foundation they deserve. Enroll now for quality education
                            that builds character and competence.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/icse-primary/admissions"
                                className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
                            >
                                Start Admission Process
                                <ArrowRight className="ml-2" size={20} />
                            </Link>
                            <Link
                                to="/icse-primary/contact"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-all border border-white/30"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>


        </div>
    );
};

export default IcsePrimaryHome;
