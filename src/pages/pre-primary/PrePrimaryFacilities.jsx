import React from 'react';
import { motion } from 'framer-motion';
import { School, BookOpen, Shield, Camera, Heart, Sparkles, Baby, Award } from 'lucide-react';

const PrePrimaryFacilities = () => {
    const facilities = [
        {
            icon: School,
            title: "Child-Friendly Classrooms",
            description: "Spacious and well-ventilated classrooms designed specifically for young children with child-centered furniture and colorful learning materials that create an engaging learning environment.",
            image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
            color: "from-blue-400 to-blue-600"
        },
        {
            icon: BookOpen,
            title: "Mini Library",
            description: "Mini Library fosters a lifelong love for reading, builds foundational skills and encourages imagination and curiosity by accessing books which improves language, communication and critical thinking skills while making learning a joyful, comfortable part of daily life.",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
            color: "from-green-400 to-green-600"
        },
        {
            icon: Heart,
            title: "Well-Equipped Play Area",
            description: "We have a well-equipped play area to develop fundamental physical, social and emotional skills like fine motor, gross motor skills, problem-solving skills, boost self-confidence, balance and coordination which helps in the holistic development of the child.",
            image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
            color: "from-purple-400 to-purple-600"
        },
        {
            icon: Camera,
            title: "CCTV Surveillance",
            description: "24/7 CCTV monitoring covering all classrooms, corridors, and play areas for complete safety and security of children. Parents can have peace of mind knowing their children are in a secure environment.",
            image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&h=600&fit=crop",
            color: "from-red-400 to-red-600"
        },
        {
            icon: Shield,
            title: "Safety & Security Measures",
            description: "Comprehensive safety measures including fire extinguishers, controlled access, rounded furniture edges, and non-toxic materials throughout the campus. Regular safety drills are conducted to ensure preparedness.",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
            color: "from-orange-400 to-orange-600"
        },
        {
            icon: Baby,
            title: "Child-Centered Furniture",
            description: "Age-appropriate, child-sized furniture designed to promote independence and comfortable learning experiences. All furniture has rounded edges and is made from child-safe materials.",
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
            color: "from-pink-400 to-pink-600"
        },
        {
            icon: Award,
            title: "Teaching Aids & Resources",
            description: "Modern teaching resources including visual aids, manipulatives, educational toys, and interactive learning materials that support various learning styles and developmental needs.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
            color: "from-cyan-400 to-cyan-600"
        },
        {
            icon: Sparkles,
            title: "Good Sanitation",
            description: "Well-maintained, clean, and hygienic facilities throughout the school. Child-friendly washrooms with proper ventilation and regular cleaning schedules ensure a healthy environment.",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
            color: "from-teal-400 to-teal-600"
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                            World-Class Infrastructure
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mt-3 mb-6">
                            Our Facilities
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Safe, secure, focused and sound learning environment with necessary amenities for young learners
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Campus Overview */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-12 border-2 border-secondary/20">
                        <div className="text-center mb-8">
                            <School className="text-secondary mx-auto mb-4" size={56} />
                            <h2 className="text-4xl font-bold text-primary font-serif mb-4">
                                Campus Overview
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                                S. Cadambi Education Center offers a <strong>comfortable, safe, secured, focused and sound learning environment</strong> for students by providing necessary amenities and various facilities. Our campus is equipped with well-ventilated classrooms, mini library, spacious play area, CCTV surveillance, fire extinguishers, teaching resources, sports resources, child-centered furniture and good sanitation.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Facilities Grid */}
                <div className="space-y-20">
                    {facilities.map((facility, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Image */}
                            <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                                    <img 
                                        src={facility.image} 
                                        alt={facility.title}
                                        className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className={`bg-gradient-to-br ${facility.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                    <facility.icon className="text-white" size={32} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">
                                    {facility.title}
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    {facility.description}
                                </p>
                                <div className="flex items-center text-secondary font-semibold group cursor-pointer">
                                    <span className="mr-2">Learn More</span>
                                    <Sparkles className="group-hover:rotate-12 transition-transform" size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Highlights Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 border-2 border-blue-200"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary font-serif mb-4">
                            Why Our Facilities Stand Out
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Every aspect of our infrastructure is designed with young children in mind
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Shield, label: "100% Safe", desc: "Child-safe environment" },
                            { icon: Camera, label: "24/7 Monitored", desc: "CCTV surveillance" },
                            { icon: Heart, label: "Caring Staff", desc: "Trained professionals" },
                            { icon: Sparkles, label: "Modern Facilities", desc: "Latest amenities" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="text-blue-600" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{item.label}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                            Experience Our Campus
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Schedule a campus visit to see our world-class facilities and meet our caring staff
                        </p>
                        <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                            Schedule Campus Tour
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrePrimaryFacilities;