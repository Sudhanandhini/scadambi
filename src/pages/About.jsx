import React from 'react';
import { motion } from 'framer-motion';
import { Book, Target, Heart, Award, Users, Sparkles, Building2, TrendingUp, GraduationCap, CheckCircle, Crown, Star } from 'lucide-react';
import image1 from '../assets/images/pie1.jpg';
import Pure4 from '../assets/images/Pure4.png';
import Pure6 from '../assets/images/Pure6.jpg';
import Pict2 from '../assets/images/Pict2.jpg';
import Pict3 from '../assets/images/Picre3.jpg';
import Pie8 from '../assets/images/Pie8.jpg';
import Pice11 from '../assets/images/Pice11.jpg';
import ure7 from '../assets/images/ure7.jpg';
import ture10 from '../assets/images/ture10.jpg';
import Pre9 from '../assets/images/Pre9.jpg';
import Pice5 from '../assets/images/Pice5.jpg';


const About = () => {
    const managementLeadership = [
        {
            name: "Dr. K. Sheshamurthy",
            role: "President",
            qualification: "M.Com, MBA, MCA, Ph.D",
            image: image1
        },
        {
            name: "Dr. (Smt) Sree Srivatsa",
            role: "Vice President & Chairperson of Governing Council",
            qualification: "M.Phil, Ph.D",
            image: Pict2
        },
        {
            name: "Sri A R Ananthan",
            role: "Vice President",
            qualification: "",
            image: Pict3
        }
    ];

    const executiveTeam = [
        {
            name: "Sri C K Keshavan",
            role: "Secretary",
            qualification: "B.E (Mech)",
            image: Pure4
        },
        {
            name: "Sri C V Sundar Raj",
            role: "Treasurer",
            qualification: "",
            image: Pice5
        },
        {
            name: "Sri K R Krishna Prasad",
            role: "Joint Secretary",
            qualification: "",
            image: Pure6
        }
    ];

    const boardMembers = [
        {
            name: "Dr. Ramprasad K R",
            role: "Member",
            image: ure7
        },
        {
            name: "Sri K G Ranganath",
            role: "Member",
            image: Pie8
        },
        {
            name: "Dr. Srinidhi S",
            role: "Member",
            image: Pre9
        },
        {
            name: "Sri Sairam",
            role: "Member",
            image: ture10
        }
    ];

    const wings = [
        { name: "Shishu Chaitanya", desc: "Play Home and Pre-Primary School" },
        { name: "S. Cadambi Education Centre", desc: "Pre-Primary School (ICSE)" },
        { name: "S. Cadambi Vidya Kendra", desc: "English Secondary School - ICSE Primary Wing" },
        { name: "S. Cadambi Vidya Kendra", desc: "English Secondary School - ICSE High School Wing" },
        { name: "S. Cadambi Vidya Kendra", desc: "State High School" },
        { name: "S. Cadambi Independent PU College", desc: "Pre-University College" }
    ];

    const milestones = [
        { year: "1984", event: "Establishment of S. Cadambi Group of Institutions under The Kalkunte Education Trust" },
        { year: "Early 1990s", event: "Secured ICSE permanent affiliation to ICSE Board, New Delhi" },
        { year: "Late 1990s", event: "State High School affiliated to Karnataka Secondary Education Board" },
        { year: "2007", event: "S. Cadambi Independent Pre-University College established with 10 students" },
        { year: "Present", event: "Serving 2,000+ students with 98-100% board exam results annually" }
    ];

    const achievements = [
        { icon: GraduationCap, title: "2000+", desc: "Students Enrolled" },
        { icon: Award, title: "100%", desc: "ICSE Results" },
        { icon: CheckCircle, title: "98%", desc: "State Board Results" },
        { icon: TrendingUp, title: "40+", desc: "Years of Excellence" }
    ];

    const values = [
        {
            icon: Book,
            title: "Academic Excellence",
            desc: "Cutting-edge curriculum with ICSE and State Board streams achieving consistent 98-100% results"
        },
        {
            icon: Target,
            title: "Holistic Development",
            desc: "Balanced focus on academics, sports, NCC, Scouts, and extracurricular activities"
        },
        {
            icon: Heart,
            title: "Cultural Heritage",
            desc: "Instilling respect and belief in our rich cultural heritage, values, and ethos"
        },
        {
            icon: Award,
            title: "Value Education",
            desc: "Nurturing cardinal virtues of faith, fidelity, and fortitude"
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900&fit=crop')"
            }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95"></div>
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white max-w-3xl"
                        >
                            <div className="inline-block bg-secondary px-4 py-2 rounded-full mb-6">
                                <span className="text-primary font-bold tracking-wide">Established 1984 • 40+ Years of Excellence</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
                                S. Cadambi Group of Institutions
                            </h1>
                            <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
                                Enlightenment through Education
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20">
                                    <p className="text-sm text-white/80">From</p>
                                    <p className="text-2xl font-bold">50 Students</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20">
                                    <p className="text-sm text-white/80">To</p>
                                    <p className="text-2xl font-bold">2000+ Students</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl shadow-2xl p-8 text-center hover:scale-105 transition-transform"
                        >
                            <div className="bg-gradient-to-br from-secondary to-secondary/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <item.icon className="text-primary" size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-primary mb-2">{item.title}</h3>
                            <p className="text-gray-600 font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Vision & Mission */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Foundation</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3">Vision & Mission</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-3xl transform group-hover:scale-105 transition-transform"></div>
                            <div className="relative bg-white rounded-3xl p-8 m-1">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-2xl">
                                        <Target className="text-white" size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-primary ml-4 font-serif">Our Vision</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-2xl font-bold text-secondary italic">
                                        "Enlightenment through Education"
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        The mission being academic growth to develop human potential through cutting edge technology and to instill respect and belief in our cultural, heritage and ethos.
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Furthermore, to provide a broad, stimulating curriculum to develop confidence in individuals to make them successful learners, responsible citizens and effective contributors is our primary objective.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl transform group-hover:scale-105 transition-transform"></div>
                            <div className="relative bg-white rounded-3xl p-8 m-1">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gradient-to-br from-secondary to-secondary/80 p-4 rounded-2xl">
                                        <Sparkles className="text-primary" size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-primary ml-4 font-serif">Our Mission</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        It is also our aim to maintain a healthy learning environment to approach challenges and incorporate new knowledge with a <strong className="text-primary">"can-do" attitude</strong>.
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Finally, it is our endeavour to foster positive behaviour, focusing strongly on culture of celebrating success, where all are responsible for their actions.
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        We aim to provide our young citizens with quality education, so that they imbibe the <strong className="text-primary">cardinal virtues of faith, fidelity, and fortitude</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                 {/* Our Wings */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Academic Structure</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3">Our Educational Wings</h2>
                        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
                            The S. Cadambi Vidya Kendra is flourishing and functioning effectively through various wings
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wings.map((wing, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-secondary hover:shadow-2xl transition-all group"
                            >
                                <div className="flex items-start">
                                    <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary/20 transition-colors shrink-0">
                                        <Building2 className="text-secondary" size={24} />
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <h3 className="text-lg font-bold text-primary mb-2">{wing.name}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{wing.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* About The School */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="h-96 lg:h-auto bg-cover bg-center" style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop')"
                            }}>
                                <div className="w-full h-full bg-gradient-to-r from-primary/80 to-transparent flex items-center p-12">
                                    <div className="text-white">
                                        <Crown className="w-16 h-16 text-secondary mb-4" />
                                        <h3 className="text-3xl font-bold mb-2">Since 1984</h3>
                                        <p className="text-xl">40+ Years of Educational Excellence</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 lg:p-12">
                                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Story</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mt-2 mb-6">About The School</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p className="text-lg">
                                        <strong className="text-primary">S. Cadambi Group of Institutions</strong>, functioning under <strong className="text-primary">The Kalkunte Education Trust (K.E.T)</strong>, was established in the year <strong>1984</strong>, with the humble beginning to build academic institutions par excellence.
                                    </p>
                                    <p className="text-lg">
                                        This was created to nurture the character of the young ones to grow into socially responsible citizens of our country.
                                    </p>
                                    <p className="text-lg">
                                        Starting with an academic strength of less than <strong>50 students</strong>, it has now reached a strength of around <strong className="text-secondary">2,000 students</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

               

                {/* Academic Excellence */}
                {/* <motion.section
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
                </motion.section> */}

                {/* PU College Section */}
                {/* <motion.section
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
                </motion.section> */}

                {/* Core Values */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">What Drives Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-secondary group"
                            >
                                <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <value.icon className="text-secondary" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Legacy Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-white">
                        <div className="flex items-center mb-6">
                            <Award className="mr-4 text-secondary" size={48} />
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">A Brief History & Our Legacy</h2>
                        </div>
                        <div className="space-y-6 text-white/95 text-lg leading-relaxed">
                            <p>
                                Our institution is a dream cherished where some educationists steered the ship of our trust as founders and carried forward the tradition to establish an educational and cultural centre of our own trust in this metropolitan city of Bengaluru where we could expand our service in the cause of education.
                            </p>
                            <p>
                                The dream of our service-minded elders became true vision wherein our respectful salutation goes to <strong className="text-secondary">Sri Cadambi Srinivasachar</strong>, who was a guiding force behind all these achievements.
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 my-6">
                                <h3 className="text-2xl font-bold mb-4 text-secondary">Sri Cadambi Srinivasachar</h3>
                                <p className="mb-3">
                                    The journey goes like this from the budding stage to the present blossoming stage. The dream of our service minded elders became true vision wherein our respectful salutation goes to Sri. Cadambi Srinivasachar, who was a guiding force behind all these achievements. Sri C Srinivasachar was born at Chichurukanahalli. He was born to orthodox parents, Sri Venkatachar and Smt Lakshamma. He graduated in B.A Hons from Mysore University with distinction and joined as a teacher. Further continued his education, passed LLB and LCE securing 2nd Rank from Madras University.
                                </p>
                                <p className="mb-3">
                                    Sri Cadambi Srinivasachar joined as an engineer in Bombay province and retired as a superintendent engineer in 1917. Later on, worked as chief engineer for Mysore province. For his great service to Mysore he was awarded  <strong className="text-secondary">"Rajasabha Bhushana"</strong> by Sri. Krishna Raja Wodeyar the then king of Mysore.

                                </p>
                                <p>       Though Cadambi Srinivasachar was an engineer, was also well-versed in Sanskrit and deeply studied Upanishads and great epics. He has widely travelled all over the world. Being a philanthropist, he generously donated money to many charitable institutions, organizations and temples.
                                </p>
                            </div>
                            <p>
                                With a vision to promote educational facility, he along with his friends Diwan Bahadur Sri K R Seshachar, Dr. K Srinivasachar, Sri K Narayan Iyengar (Executive Engineer), Sri K Narayana Iyengar (Head Master), Dr. K Krishna Iyengar, Amaldar Sri K Vendanth Iyengar started <strong className="text-secondary">The Kalkunte Education Trust</strong>.
                            </p>
                            <p>
                                The mission was carried forward by Late Dr.K Krishnamurthy, was able to secure a site in the city. At the same time Prof C Rangachar, also wanted to establish an educational institution. Late Sri. K Narayan Iyengar, Late Sri. K N Srinivasamurthy, Late Sri K S Srinivasamurthy, Late Sri. K S Murthy, Late Sri. K N Sheshadri, Sri. A R Ramachar and many more elders who have put their utmost efforts to set forth the school. Well, this tradition is continued to this day with an enthusiastic constellation of present enterprising trust members and their progressive ideas in the improvement of the institution. Now, the institution stands high with an allround development. To emphasize on the above points, the institution has come a long way from a humble beginning under the guidance of educationists and visionaries belonging to Kalkunte village.
                            </p>
                            <p className="text-xl font-bold text-secondary">
                                This tradition continues to this day with an enthusiastic constellation of present enterprising trust members and their progressive ideas in the improvement of the institution.
                            </p>
                            <p>     The institution has established itself in the beginning in the State Stream comprising 8th to 10th standards and the ICSE stream which runs from 1st to 10th standard. The ICSE stream has a successful permanent affiliation to ICSE board, New Delhi and the state board to the Karnataka Secondary Education Board. Well, there was no turning back in the results of ICSE stream Board Exams and every year ICSE high school has secured 100% results with many distinctions in the 10th Board exams. The state high school does not lag behind in securing 98% results in the SSLC board exams. The initial start has emerged to a well dimensional school which caters education in both ICSE and state syllabi streams at an economical fee structure.
                            </p>
                            <p>             Though the results were excellent at the board exams, students were finding it difficult to pursue their Pre-University education. The management proposed to start Pre-university College with a vision to provide the highest quality educational programme that highlights value learning, self-worth, quality, performance among students and staff and transition of students to productive and responsible participation in society at large.  Their main mission is to provide young citizens with quality education, so that they imbibe the cardinal virtues of faith, fidelity and fortitude. Thus S.Cadambi Independent Pre-University college was established in the year 2007 with a meager strength of 10 students, which has now reached 400. The college functions in a separate wing with well furnished labs, classrooms and qualified faculty, apart from academic excellence encouragement is given to extra-curricular activities, sports, NCC, Scouts. In addition, an integrated programme for students aspiring to take up national level competitive examinations is also conducted</p>
                            <p>  The dedicated teaching and non-teaching staff under the guidance of able management are extending their fullest co-operation in the implementation of autonomy in its true spirit.

                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Timeline */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Journey</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3">Milestones</h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/20 hidden md:block"></div>

                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                                        <span className="inline-block bg-secondary text-primary font-bold px-4 py-2 rounded-full text-sm mb-3">
                                            {milestone.year}
                                        </span>
                                        <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex w-8 h-8 bg-secondary rounded-full border-4 border-white shadow-lg z-10 shrink-0"></div>
                                <div className="flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Management Team with Hover Effect */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">The Kalkunte Education Trust</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3">Management - K.E.T</h2>
                    </div>

                    {/* Leadership */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-primary mb-8 text-center font-serif">Leadership</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {managementLeadership.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-96 bg-cover bg-center" style={{
                                        backgroundImage: `url(${member.image})`
                                    }}>
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                                        {/* Info that appears on hover */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                                <p className="text-secondary font-semibold text-lg mb-2">{member.role}</p>
                                                {member.qualification && (
                                                    <p className="text-white/90 text-sm">{member.qualification}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Icon on top */}
                                        <div className="absolute top-4 right-4 bg-secondary p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Crown className="text-primary" size={24} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Executive Team */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-primary mb-8 text-center font-serif">Executive Team</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {executiveTeam.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-96 bg-cover bg-center" style={{
                                        backgroundImage: `url(${member.image})`
                                    }}>
                                        {/* Hover Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1/2 
                bg-gradient-to-t from-secondary via-secondary/70 to-transparent
                opacity-80 group-hover:opacity-100 transition-all duration-300"></div>

                                        {/* Info that appears on hover */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-primary transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                                <p className="text-primary font-semibold text-lg mb-2">{member.role}</p>
                                                {member.qualification && (
                                                    <p className="text-primary/80 text-sm">{member.qualification}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Icon on top */}
                                        <div className="absolute top-4 right-4 bg-primary p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Star className="text-secondary" size={24} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Board Members */}
                    <div>
                        <h3 className="text-3xl font-bold text-primary mb-8 text-center font-serif">Board Members</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {boardMembers.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-80 bg-cover bg-center" style={{
                                        backgroundImage: `url(${member.image})`
                                    }}>
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                                        {/* Info that appears on hover */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                                <p className="text-secondary font-semibold">{member.role}</p>
                                            </div>
                                        </div>

                                        {/* Icon on top */}
                                        <div className="absolute top-3 right-3 bg-secondary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Users className="text-primary" size={20} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">The Kalkunte Education Trust</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3">Management - K.E.T</h2>
                    </div>

                    {/* -------------------------------------------------
        1. Leadership (no changes - master color effect)
    --------------------------------------------------- */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-primary mb-8 text-center font-serif">Leadership</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {managementLeadership.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                                >
                                    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                                <p className="text-secondary font-semibold text-lg mb-2">{member.role}</p>
                                                {member.qualification && <p className="text-white/90 text-sm">{member.qualification}</p>}
                                            </div>
                                        </div>

                                        <div className="absolute top-4 right-4 bg-secondary p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Crown className="text-primary" size={24} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* -------------------------------------------------
        2. Executive Team — updated overlay to match
    --------------------------------------------------- */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-primary mb-8 text-center font-serif">Executive Team</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {executiveTeam.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                                >
                                    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}>
                                        {/* SAME overlay as Leadership section */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-primary transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                                <h3 className="text-2xl font-bold mb-2 text-[#fff]">{member.name}</h3>
                                                <p className="text-secondary font-semibold text-lg mb-2">{member.role}</p>
                                                {member.qualification && <p className="text-primary/80 text-sm">{member.qualification}</p>}
                                            </div>
                                        </div>

                                        <div className="absolute top-4 right-4 bg-primary p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Star className="text-secondary" size={24} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* -------------------------------------------------
        3. Board Members — updated overlay to match
    --------------------------------------------------- */}
                    <div>
                        <h3 className="text-3xl font-bold text-primary mb-8 text-center font-serif">Board Members</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {boardMembers.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}>
                                        {/* SAME overlay as Leadership */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                                <p className="text-secondary font-semibold">{member.role}</p>
                                            </div>
                                        </div>

                                        <div className="absolute top-3 right-3 bg-secondary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Users className="text-primary" size={20} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>


                {/* Administrator */}
                {/* <motion.section
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative lg:h-auto bg-cover bg-center" style={{
                                backgroundImage: `url(${Pice11})` , height:'580px'
                            }}>
                                <div className="absolute inset-0 bg-primary/60"></div>
                            </div>
                            <div className="p-12 text-white flex items-center">
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className="bg-secondary p-4 rounded-2xl mr-4">
                                            <Award className="text-primary" size={48} />
                                        </div>
                                        <div>
                                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Leadership</span>
                                            <h2 className="text-4xl font-bold font-serif">Administrator</h2>
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3">Dr. S.S Rajan</h3>
                                    <p className="text-xl text-white/90 mb-4">Administrator</p>
                                    <p className="text-lg text-white/80">MA (Economics), Ph.D</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section> */}

                <motion.section
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {/* IMAGE SIDE */}
                            <div className="relative h-72 md:h-80 lg:h-[420px]">
                                <img
                                    src={Pice11}
                                    alt="Administrator"
                                    className="absolute inset-0 w-full h-full object-cover lg:object-contain"
                                />
                                {/* lighter overlay so image is visible */}
                                <div className="absolute inset-0 bg-primary/25"></div>
                            </div>

                            {/* TEXT SIDE */}
                            <div className="p-8 lg:p-10 text-white flex items-center">
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className="bg-secondary p-4 rounded-2xl mr-4">
                                            <Award className="text-primary" size={48} />
                                        </div>
                                        <div>
                                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                                                Leadership
                                            </span>
                                            <h2 className="text-4xl font-bold font-serif">Administrator</h2>
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3">Dr. S.S Rajan</h3>
                                    <p className="text-xl text-white/90 mb-4">Administrator</p>
                                    <p className="text-lg text-white/80">MA (Economics), Ph.D</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.section>


                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-3xl p-10 border-2 border-secondary/20">
                        <p className="text-2xl text-gray-700 leading-relaxed italic font-medium">
                            "The dedicated teaching and non-teaching staff under the guidance of able management are extending their fullest co-operation in the implementation of autonomy in its true spirit, nurturing the next generation of leaders, thinkers, and responsible citizens."
                        </p>
                        <div className="mt-6 flex justify-center">
                            <div className="w-16 h-1 bg-secondary rounded-full"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;