import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryCategories = [
        {
            title: "Annual Events",
            images: [
                { id: 1, title: "Independence Day 2025", description: "79th Independence Day Celebration" },
                { id: 2, title: "Sports Day", description: "Annual Sports Meet 2025" },
                { id: 3, title: "Yoga Day", description: "International Yoga Day Celebration" },
                { id: 4, title: "Environment Day", description: "World Environment Day Activities" }
            ]
        },
        {
            title: "Scouts & Guides",
            images: [
                { id: 5, title: "Founder's Day", description: "Baden Powell Birthday Celebration" },
                { id: 6, title: "Nature Camp", description: "Kanakapura Nature Camp" },
                { id: 7, title: "Community Service", description: "Service Activities" },
                { id: 8, title: "Skill Building", description: "Training Sessions" }
            ]
        },
        {
            title: "Competitions",
            images: [
                { id: 9, title: "Fancy Dress", description: "Theme-based Fancy Dress Competition" },
                { id: 10, title: "Art Competition", description: "Pair Event Art Competition" },
                { id: 11, title: "Solo Singing", description: "Solo Singing Competition" },
                { id: 12, title: "Quiz Competition", description: "General Knowledge Quiz" }
            ]
        },
        {
            title: "Classroom Activities",
            images: [
                { id: 13, title: "Learning Activities", description: "Interactive Classroom Sessions" },
                { id: 14, title: "Group Work", description: "Collaborative Learning" },
                { id: 15, title: "Science Exhibition", description: "Student Projects Display" },
                { id: 16, title: "Art & Craft", description: "Creative Activities" }
            ]
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
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Capturing moments of learning, growth, and celebration
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {galleryCategories.map((category, catIdx) => (
                        <div key={catIdx} className="mb-20">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl font-bold text-primary mb-8"
                            >
                                {category.title}
                            </motion.h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.images.map((image, imgIdx) => (
                                    <motion.div
                                        key={image.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: imgIdx * 0.1 }}
                                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                                        onClick={() => setSelectedImage(image)}
                                    >
                                        <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-6xl">📸</span>
                                            </div>
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-primary mb-1">{image.title}</h3>
                                            <p className="text-sm text-gray-600">{image.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Video Links */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">Event Videos</h2>
                        <p className="text-xl text-gray-600">Watch our special moments</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.a
                            href="https://www.facebook.com/share/v/1BkgJk5CCB/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div className="text-5xl mb-4">🏆</div>
                            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                Sports Day Highlights
                            </h3>
                            <p className="text-gray-600">Watch the excitement of our Annual Sports Day 2025</p>
                        </motion.a>

                        <motion.a
                            href="https://www.facebook.com/share/v/16ZJn28t2U/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div className="text-5xl mb-4">🇮🇳</div>
                            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                Independence Day Celebration
                            </h3>
                            <p className="text-gray-600">79th Independence Day celebrations and performances</p>
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full bg-white rounded-2xl p-8">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
                        >
                            <X size={24} />
                        </button>
                        <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-9xl">📸</span>
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">{selectedImage.title}</h3>
                        <p className="text-gray-600">{selectedImage.description}</p>
                    </div>
                </div>
            )}

           
        </div>
    );
};

export default IcsePrimaryGallery;
