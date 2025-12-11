import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe, Heart, Trophy, Music, Palette } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryEvents = () => {
    const events = [
        {
            icon: <Globe />,
            title: "World Environment Day",
            date: "5th June",
            description: "Pick and Speak Competition on environmental topics. Scouts and Guides participate in Seed Ball Making activity.",
            highlights: ["Pick and Speak Competition", "Seed Ball Making", "Environmental Awareness"]
        },
        {
            icon: <Heart />,
            title: "International Yoga Day",
            date: "21st June",
            description: "Introduction to yoga, warm-up exercises, sitting and standing asanas with explanation of benefits.",
            highlights: ["Yoga Asanas", "Health Benefits", "Wellness Education"]
        },
        {
            icon: <Trophy />,
            title: "Sports Day",
            date: "19th September",
            description: "Final rounds of various sports including Throw Ball, Tug of War, Kho Kho, Hoops Relay and more.",
            highlights: ["Team Sports", "Individual Events", "Athletic Competitions"],
            video: "https://www.facebook.com/share/v/1BkgJk5CCB/"
        },
        {
            icon: <Music />,
            title: "Independence Day",
            date: "15th August",
            description: "79th Independence Day celebration with prize distribution and dance drama 'Operation Sindoor'.",
            highlights: ["Flag Hoisting", "Cultural Performances", "Prize Distribution"],
            video: "https://www.facebook.com/share/v/16ZJn28t2U/"
        },
        {
            icon: <Palette />,
            title: "Bhagavat Gita Recitation",
            description: "Daily assembly program focused on moral and spiritual guidance through Bhagavat Gita teachings.",
            highlights: ["Character Building", "Life Lessons", "Spiritual Values"]
        },
        {
            icon: <Heart />,
            title: "Bal Vikas Program",
            description: "Character building program emphasizing truth, righteousness, peace, love, and non-violence.",
            highlights: ["Storytelling", "Prayer", "Community Service"]
        }
    ];

    const annualEvents = [
        "Children's Day Celebration - 14th November",
        "Solo Dance Competition - 15th November",
        "Cooking without Fire - 29th November",
        "SAMANVAYA Annual Meet - 27th December",
        "Annual Sports Day - February",
        "Prize Distribution Day - February",
        "Final Examinations - March"
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
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Annual Events</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Celebrating talents, fostering creativity, and building community bonds
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Events Introduction */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-6">Why Events Matter</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Annual events are an important part of the academic year. They provide students with opportunities 
                            to showcase their talents, develop new skills, and strengthen their bond with their peers. These 
                            events often go beyond academics, offering a platform for creative expression, teamwork, and 
                            personal growth.
                        </p>
                    </motion.div>

                    {/* Major Events */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {events.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="bg-secondary/20 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                                        {React.cloneElement(event.icon, { className: 'text-secondary', size: 28 })}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary">{event.title}</h3>
                                        {event.date && <p className="text-secondary font-semibold">{event.date}</p>}
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                                <div className="space-y-2">
                                    {event.highlights.map((highlight, hIdx) => (
                                        <div key={hIdx} className="flex items-center">
                                            <Calendar className="text-secondary mr-2 shrink-0" size={16} />
                                            <span className="text-gray-700 text-sm">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                                {event.video && (
                                    <a
                                        href={event.video}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-block bg-secondary/10 hover:bg-secondary/20 text-primary font-semibold px-6 py-3 rounded-lg transition-all"
                                    >
                                        Watch Video
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Annual Calendar */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Events</h2>
                        <p className="text-xl text-gray-600">Mark your calendars for these exciting events</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl"
                    >
                        <div className="space-y-4">
                            {annualEvents.map((event, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start p-4 rounded-lg hover:bg-primary/5 transition-all"
                                >
                                    <Calendar className="text-secondary mr-4 mt-1 shrink-0" size={24} />
                                    <p className="text-lg text-gray-700">{event}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            
        </div>
    );
};

export default IcsePrimaryEvents;
