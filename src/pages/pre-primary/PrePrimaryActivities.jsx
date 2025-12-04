import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Users, Brain, Sparkles, Music, Heart, Trophy, Calendar, Award, Star } from 'lucide-react';

const PrePrimaryActivities = () => {
    const dailyActivities = [
        {
            icon: Palette,
            title: "Creativity & Curiosity Skills",
            description: "Young children are curious, ask questions and love to explore the environment around them. They also have creative ideas and imagination. Preschool activities such as beading, art and craft, field trips and free play help develop creativity.",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
            color: "from-pink-400 to-pink-600"
        },
        {
            icon: Users,
            title: "Social Skills",
            description: "Till the age of 3 a child spends most of his life with his parents and immediate family. At preschool children spend extended periods of time with other children and people who are not members of their families. The child learns how to make friends, collaborate, listen and develop conversational skills with strangers. They also learn how to interact with others, how to share and how to conduct themselves in a socially appropriate manner.",
            image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
            color: "from-blue-400 to-blue-600"
        },
        {
            icon: Brain,
            title: "Language Skills",
            description: "The cooing and babbling is now slowly getting replaced by words and meaningful sentences. Language rich setting in a preschool helps child by introducing new vocabulary and asking them thought provoking questions. Preschoolers thus learn to speak effectively because they have many opportunities to explore new things, read books, act out stories, singing and also communicate with their peers and teachers.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
            color: "from-green-400 to-green-600"
        },
        {
            icon: Sparkles,
            title: "Cognitive Skills",
            description: "Preschool curriculum involves participation in activities that encourage children to try new things, solve problems, ask questions and observe the world around them. These activities are targeted towards enhancing the cognitive skills of a child thus enabling them to learn more.",
            image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
            color: "from-purple-400 to-purple-600"
        },
        {
            icon: Heart,
            title: "Motor Skills",
            description: "Fine motor and gross motor development are one of the major skills that a child should acquire. These skills stay with them for life and help them in various activities. Preschool activities such as lacing, reading, cutting, sticking, throwing, painting, running and outdoor play encourages developing fine and gross motor development.",
            image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=600&fit=crop",
            color: "from-red-400 to-red-600"
        },
        {
            icon: Music,
            title: "Pre-Literacy Skills",
            description: "In preschool, teachers use a variety of games and activities to develop pre-literacy skills. Rhymes help to discriminate between different sounds. Stories help to develop fundamental life skills in a fun way. Introduction of alphabets, words and numbers are a prerequisite for language and math skills. Children develop a sense of joy and motivation to learn new things.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
            color: "from-yellow-400 to-yellow-600"
        },
        {
            icon: Trophy,
            title: "Numeracy Skills",
            description: "Numeracy is the ability to see and use math in all areas of life. Math is introduced through everyday play and activities by encouraging the child to compare and order things of different sizes, group things together, use words to describe where things are, notice and make patterns. When we teach about math concepts in everyday activities, it helps the child to understand how and why math is useful.",
            image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&h=600&fit=crop",
            color: "from-indigo-400 to-indigo-600"
        },
        {
            icon: Award,
            title: "Co-Curricular Activities",
            description: "Co-curricular activities are important for several reasons. They enhance students' academic development and performance. Co-curricular activities are designed to balance academic curriculum so that every child gets to learn beyond subjects. They also help children to build several important life skills, traditional values, socialization, moral values, personality progress and Indian culture. It makes teaching and learning experiences exciting for both students and teachers.",
            image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
            color: "from-teal-400 to-teal-600"
        }
    ];

    const annualEvents = [
        {
            title: "Samanvaya",
            subtitle: "Annual Sports & Cultural Meet",
            description: "A grand celebration showcasing children's talents in sports, dance, music, and cultural activities. This annual event brings together the entire school community.",
            icon: Trophy,
            color: "bg-blue-500"
        },
        {
            title: "Funathon",
            subtitle: "Annual Sports Day",
            description: "Different games will be conducted for the children, parents and grandparents. The event will be a wonderful, fun filled experience encouraging the children to participate in all the games.",
            icon: Heart,
            color: "bg-green-500"
        },
        {
            title: "Pinnacle",
            subtitle: "Academic & Co-curricular Culmination",
            description: "Children exhibit and explain to visitors about their models based on different topics from their syllabus. Children will also showcase Dance, Drama, recite Shlokas, Bhagavadgita and Vachanas.",
            icon: Sparkles,
            color: "bg-purple-500"
        },
        {
            title: "International Yoga Day",
            subtitle: "Yoga for One Earth, One Health",
            description: "Children and teachers perform simple yogasana under the guidance of our Physical education instructor. Kids perform yogasana with full energy and enthusiasm to manage day-to-day stress.",
            icon: Users,
            color: "bg-orange-500"
        },
        {
            title: "Star of the Week",
            subtitle: "Parent as Guest Teacher",
            description: "The star of the week is for students to learn more about each other and their families. Parents are given an opportunity to become a teacher of their child's class, conducting different activities and teaching songs and moral values.",
            icon: Star,
            color: "bg-yellow-500"
        },
        {
            title: "Nutritional Week",
            subtitle: "Feeding Smart Right From Start",
            description: "Celebrated from February 2-9, 2025. Vegetable Salad day, Fruit Salad day, Whole Grains day, Dry Fruits Day, Sprouts day help tiny tots learn the names, color, shape, taste and benefits of healthy foods.",
            icon: Heart,
            color: "bg-red-500"
        }
    ];

    const culturalEvents = [
        {
            title: "Republic Day Celebration",
            date: "January 26",
            emoji: "🇮🇳"
        },
        {
            title: "Independence Day Celebration",
            date: "August 15",
            emoji: "🇮🇳"
        },
        {
            title: "International Doctor's Day",
            date: "July 1",
            emoji: "🩺",
            desc: "A pretend play activity with toy medical equipment and role-play as doctors and patients."
        },
        {
            title: "Kargil Vijay Diwas",
            date: "July 26",
            emoji: "🪖",
            desc: "Gratitude to the soldiers by our UKG children through drawing and coloring activities."
        },
        {
            title: "Ganesha Chaturthi",
            date: "September",
            emoji: "🙏"
        },
        {
            title: "Krishna Janmashtami",
            date: "August",
            emoji: "🦚"
        },
        {
            title: "Onam Celebration",
            date: "August-September",
            emoji: "🌺",
            desc: "Little ones embrace the essence of Onam by dressing up in traditional attire and creating a magnificent pookalam."
        },
        {
            title: "Diwali Celebration",
            date: "October-November",
            emoji: "🪔",
            desc: "Children showcase the spirit of Diwali through skits dressed as Lord Rama, Sita, Lakshmana, Bharatha, and Hanuman."
        },
        {
            title: "Kannada Rajyotsava",
            date: "November 1",
            emoji: "🎭"
        }
    ];

    const specialPrograms = [
        {
            title: "Parent Orientation Program",
            description: "Conducted at the beginning of the year. The role of parents, rules of the school, safety, academic insights, methodology, and parent-school partnership are explained.",
            icon: "👨‍👩‍👧‍👦"
        },
        {
            title: "Environmental Day",
            description: "Special activities to create awareness about environment protection and conservation.",
            icon: "🌍"
        },
        {
            title: "Assembly Activities",
            description: "Regular assemblies with storytelling, rhymes, and presentations.",
            icon: "📚"
        },
        {
            title: "Inter-School Competitions",
            description: "Children participate in Kinder Beat Rhapsody and other inter-school competitions including Story narrating, Pick and Speech, Coloring, Figure print art, Paper tear activity, and Palm Printing.",
            icon: "🏆"
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
                            Learning Through Play
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mt-3 mb-6">
                            Activities & Events
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Engaging activities designed to nurture every aspect of your child's development
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Daily Activities */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Everyday Learning</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-6">
                            Daily Activities
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Structured play-based activities that promote holistic development
                        </p>
                    </div>

                    <div className="space-y-16">
                        {dailyActivities.map((activity, idx) => (
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
                                            src={activity.image} 
                                            alt={activity.title}
                                            className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className={`bg-gradient-to-br ${activity.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                        <activity.icon className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">
                                        {activity.title}
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {activity.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Annual Events */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Celebrations</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-6">
                            Major Annual Events
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Special occasions that create lasting memories and learning experiences
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {annualEvents.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                            >
                                <div className={`${event.color} p-8 text-white`}>
                                    <event.icon className="mb-4" size={40} />
                                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-white/90 text-sm">{event.subtitle}</p>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Cultural Events */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-12 border-2 border-purple-200">
                        <div className="text-center mb-12">
                            <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">Indian Heritage</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-6">
                                Cultural Celebrations
                            </h2>
                            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                                Celebrating our rich cultural heritage and national pride
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {culturalEvents.map((event, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <div className="text-5xl mb-4 text-center">{event.emoji}</div>
                                    <h3 className="text-xl font-bold text-primary mb-2 text-center">{event.title}</h3>
                                    <p className="text-secondary font-semibold text-center text-sm mb-3">{event.date}</p>
                                    {event.desc && (
                                        <p className="text-gray-600 text-sm leading-relaxed text-center">{event.desc}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Special Programs */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-12 border-2 border-secondary/20">
                        <div className="text-center mb-12">
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Extra Learning</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-6">
                                Special Programs
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {specialPrograms.map((program, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <div className="text-5xl mb-4">{program.icon}</div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 text-white">
                        <Calendar className="mx-auto mb-6 text-secondary" size={64} />
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                            Join Our Next Event
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Experience our vibrant learning community and see how we make education fun
                        </p>
                        <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                            View Event Calendar
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrePrimaryActivities;