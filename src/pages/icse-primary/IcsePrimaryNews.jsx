import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryNews = () => {
    const newsItems = [
        {
            title: "Children's Day Celebration - Nov 14",
            date: "November 14, 2025",
            category: "Event",
            description: "Special celebration planned for Children's Day with cultural programs and fun activities."
        },
        {
            title: "Solo Dance Competition - Nov 15",
            date: "November 15, 2025",
            category: "Competition",
            description: "3-minute solo dance competition for all grades. Registrations open!"
        },
        {
            title: "Cooking Without Fire - Nov 29",
            date: "November 29, 2025",
            category: "Activity",
            description: "Pair activity where students showcase their culinary creativity without using fire."
        },
        {
            title: "Unit Test III - Dec 8-13",
            date: "December 8-13, 2025",
            category: "Examination",
            description: "Third unit test scheduled. Students should prepare thoroughly for all subjects."
        },
        {
            title: "SAMANVAYA 2025-26",
            date: "December 27, 2025",
            category: "Event",
            description: "Annual Sports and Cultural Meet bringing together all divisions."
        },
        {
            title: "Annual Sports Day",
            date: "February 2026",
            category: "Sports",
            description: "Biggest sporting event of the year with various competitions and athletic events."
        }
    ];

    const categoryColors = {
        "Event": "bg-blue-100 text-blue-800",
        "Competition": "bg-purple-100 text-purple-800",
        "Activity": "bg-green-100 text-green-800",
        "Examination": "bg-red-100 text-red-800",
        "Sports": "bg-orange-100 text-orange-800"
    };

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Announcements</h1>
                        <p className="text-xl text-white/90">Stay updated with latest school activities</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category]}`}>
                                        {item.category}
                                    </span>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Calendar size={16} className="mr-1" />
                                        {item.date}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

           
        </div>
    );
};

export default IcsePrimaryNews;
