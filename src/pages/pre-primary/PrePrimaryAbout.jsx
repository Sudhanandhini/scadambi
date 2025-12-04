import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Target, Eye, Lightbulb, GraduationCap, Sparkles } from 'lucide-react';

const PrePrimaryAbout = () => {
    const values = [
        {
            icon: Heart,
            title: "Nurturing Environment",
            description: "A safe, loving space where every child feels valued and supported"
        },
        {
            icon: Users,
            title: "Play-Based Learning",
            description: "Learning through joyful play and hands-on experiences"
        },
        {
            icon: Award,
            title: "Holistic Development",
            description: "Focus on physical, emotional, social, and cognitive growth"
        },
        {
            icon: Target,
            title: "Individual Attention",
            description: "Small class sizes ensuring personalized care for each child"
        }
    ];

    const faculty = [
        { name: "Mrs. Sunitha V", position: "Principal" },
        { name: "Mrs. Asha T", position: "Vice Principal" },
        { name: "Mrs. Nikitha M.S", position: "Teacher" },
        { name: "Mrs. Priyanka B. Navalgund", position: "Teacher" },
        { name: "Mrs. Radhika R. V.", position: "Teacher" },
        { name: "Mrs. Shailashree S Jawali", position: "Teacher" },
        { name: "Mrs. Aswini S", position: "Teacher" },
        { name: "Mrs. Soumya", position: "Teacher" },
        { name: "Mrs. K. Swetha", position: "Teacher" },
        { name: "Mrs. Kunjurani", position: "Physical Education Instructor" },
        { name: "Mrs. Pallavi B. N", position: "Teacher" },
        { name: "Mrs. Geetha Hegde", position: "Teacher" }
    ];

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
                            About S. Cadambi Pre-Primary Wing
                        </h1>
                        <p className="text-2xl text-secondary font-bold mb-4">
                            "Sowing Seeds of Knowledge for Success"
                        </p>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Nurturing young minds since 1984 • Ages 3-6 years
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Vision & Mission */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl p-8 shadow-2xl">
                            <Eye className="text-secondary mb-4" size={40} />
                            <h2 className="text-3xl font-bold font-serif mb-4">Our Vision</h2>
                            <p className="text-white/90 text-lg leading-relaxed">
                                <strong>"Enlightenment through Education"</strong>
                                <br /><br />
                                To provide a nurturing environment where young minds blossom into confident, creative, and compassionate individuals ready to embrace the world.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-secondary to-secondary/90 text-primary rounded-3xl p-8 shadow-2xl">
                            <Lightbulb className="text-primary mb-4" size={40} />
                            <h2 className="text-3xl font-bold font-serif mb-4">Our Mission</h2>
                            <p className="text-primary/90 text-lg leading-relaxed">
                                • Academic growth to develop human potential through cutting edge technology
                                <br /><br />
                                • To instill respect and belief in our cultural heritage and ethos
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Principal's Message */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-secondary">
                        <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-8">
                            <div className="flex items-center mb-6">
                                <GraduationCap className="text-secondary mr-4" size={48} />
                                <div>
                                    <h2 className="text-3xl font-bold text-primary font-serif">Principal's Message</h2>
                                    <p className="text-gray-600">Mrs. Sunitha V</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                <strong>Namaste,</strong>
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                I am glad to welcome you to S. Cadambi Education Center, Basaveshwarnagar, Bengaluru. I am very proud to be the principal of this wonderful school. It is a privilege for me to work with our students, our staff and our parents to make our school the very best it can be.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Preschool is a child's first experience with the world outside their home, away from their parents and the comfort and security of their home. We groom young buds from the age group of 3 years to 6 years to bloom in the higher level.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                We have a <strong>holistic approach</strong> in imparting education that creates self-confidence in children and improves their decision-making skills which leads to good self-esteem in them and helps them succeed in school and beyond.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Throughout the year, exciting things are happening in our classrooms and on our campuses! We encourage parents to get involved by joining voluntarily in all the school activities, and taking an active role in their child's education. <strong>Your time is the best gift you can give to your child.</strong> You are your child's most important teacher.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                The preschool years go quickly, but they are among the most important and fundamental years of your child's life. <strong className="text-secondary">90% of brain development happens between 0-5 years.</strong>
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                We have dedicated, well-trained, enthusiastic teachers having immense patience in handling each child. We, as a team work together to build a bright future of the child.
                            </p>
                            <p className="text-secondary text-xl font-semibold italic text-center mt-6">
                                "Every child is a different kind of flower, and all together make this world a beautiful garden."
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Core Values */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">What We Offer</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-4">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all"
                            >
                                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="text-secondary" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Faculty Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 border-2 border-blue-200">
                        <div className="text-center mb-12">
                            <Sparkles className="text-blue-600 mx-auto mb-4" size={48} />
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4">
                                Our Dedicated Faculty
                            </h2>
                            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                                Our teaching faculties have an extraordinary level of patience, enthusiasm, dedication, and creativity with strong educational backgrounds and experience. Above all, they have a passion for early childhood education.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {faculty.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <div className="flex items-center">
                                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                            <Users className="text-blue-600" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary">{member.name}</h3>
                                            <p className="text-sm text-gray-600">{member.position}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
                                <Heart className="text-secondary mx-auto mb-4" size={40} />
                                <h3 className="text-2xl font-bold text-primary mb-3">Supporting Staff</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    A school without the contribution of supporting staff cannot be successful. We have caring, loving, kind, committed and selfless supporting staff with whom our children feel very comfortable.
                                </p>
                            </div>
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
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                            Join Our Pre-Primary Family
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Give your child the best start in their educational journey
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                                Schedule Campus Visit
                            </button>
                            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all border-2 border-white/30">
                                Download Prospectus
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrePrimaryAbout;