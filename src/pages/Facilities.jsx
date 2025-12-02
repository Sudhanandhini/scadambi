import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Library, Bus, Trophy, Monitor, Music } from 'lucide-react';

const Facilities = () => {
    const facilities = [
        { icon: FlaskConical, title: "Science Labs", desc: "Modern Physics, Chemistry, and Biology labs equipped with the latest apparatus for practical learning." },
        { icon: Library, title: "Library", desc: "A vast collection of 10,000+ books, journals, and digital resources to fuel curiosity." },
        { icon: Monitor, title: "Computer Lab", desc: "High-tech computer labs with high-speed internet and latest software for coding and design." },
        { icon: Trophy, title: "Sports Complex", desc: "Expansive playground, basketball court, and indoor sports arena for holistic physical development." },
        { icon: Bus, title: "Transport", desc: "Safe and GPS-enabled bus fleet covering all major routes in the city with trained attendants." },
        { icon: Music, title: "Arts & Music", desc: "Dedicated studios for dance, music, and fine arts to nurture creative talents." }
    ];

    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">Campus Facilities</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide a world-class infrastructure to support the academic and co-curricular needs of our students.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-secondary"
                        >
                            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6 mx-auto">
                                <facility.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary text-center mb-3">{facility.title}</h3>
                            <p className="text-gray-600 text-center text-sm leading-relaxed">
                                {facility.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facilities;
