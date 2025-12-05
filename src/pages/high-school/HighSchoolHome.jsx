import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Trophy, 
  Users, 
  BookOpen, 
  Award, 
  Target,
  ArrowRight,
  Lightbulb,
  Globe,
  Heart
} from 'lucide-react';

const HighSchoolHome = () => {
  const stats = [
    { icon: GraduationCap, label: 'Years of Excellence', value: '40+' },
    { icon: Users, label: 'Total Students', value: '2000+' },
    { icon: Trophy, label: 'Awards Won', value: '50+' },
    { icon: BookOpen, label: 'Quality Education', value: '100%' },
  ];

  const features = [
    {
      icon: Target,
      title: 'State Board Excellence',
      description: 'Comprehensive curriculum aligned with Karnataka State Board standards for grades 9-10.',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers dedicated to student success.',
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Holistic Development',
      description: 'Focus on academics, sports, cultural activities, and character building.',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Best Administration',
      description: 'Recognized by Government of Karnataka for excellence in education.',
      color: 'purple'
    },
  ];

  const highlights = [
    {
      title: 'Academic Excellence',
      description: 'Comprehensive State Board curriculum with FA and SA assessment',
      image: '📚'
    },
    {
      title: 'Modern Facilities',
      description: 'Well-equipped labs, spacious classrooms, and digital learning',
      image: '🏫'
    },
    {
      title: 'Sports & Activities',
      description: 'Wide range of sports and co-curricular activities',
      image: '⚽'
    },
    {
      title: 'Scouts & Guides',
      description: 'Character development through Bharat Scouts and Guides',
      image: '🎯'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-6 border border-secondary/30"
            >
              <span className="text-secondary font-semibold">Grade 9-10 • State Board</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              S. Cadambi Vidya Kendra
              <span className="block text-secondary mt-2">High School</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-4 italic">
              "Jnanam Paramam Balam"
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8">
              Knowledge is the Supreme Power
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering young minds through quality education, strong values, and holistic development since 1984.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/high-school/admissions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-semibold hover:bg-yellow-600 transition-all hover:scale-105 shadow-xl"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/high-school/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="relative max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Welcome to Our High School
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A legacy of 40 years in providing quality education and shaping future leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-primary">
                Building Tomorrow's Leaders
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Established in 1984, S. Cadambi Vidya Kendra High School has been a beacon of educational excellence 
                in Basaveshwara Nagar, Bangalore. Our institution was founded by visionary educationists with a mission 
                to provide quality education to students from all backgrounds.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We follow the Karnataka State Board curriculum for grades 9-10, offering comprehensive education that 
                prepares students for competitive examinations and future success. Our dedicated faculty and modern 
                infrastructure ensure that every student receives personalized attention and the best learning experience.
              </p>
              <Link
                to="/high-school/about"
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-4 transition-all"
              >
                Read More About Us <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary"
                >
                  <div className="text-4xl mb-3">{item.image}</div>
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 text-secondary`} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-secondary"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-12 h-12 text-secondary" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Principal's Message
                  </h2>
                  <p className="text-gray-600">Smt. Indira Shyam Sunder</p>
                </div>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to S. Cadambi Vidya Kendra High School. I am truly honored to serve as the Principal 
                  of this prestigious institution. Our foundation is built on a resolute commitment to academic 
                  precision and holistic development.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Education is about much more than just mastering a curriculum; it is about cultivating curious, 
                  critical thinkers prepared to navigate the complexities of the modern world. Our dedicated faculty 
                  members are not just instructors; they are mentors who inspire lifelong learning in every student.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We encourage participation in a wide range of extra-curricular activities - from sports to cultural 
                  events, from STEM clubs to community service initiatives. These experiences are crucial for 
                  developing leadership skills, teamwork, and a strong sense of social responsibility.
                </p>
              </div>
              <Link
                to="/high-school/about"
                className="inline-flex items-center gap-2 mt-6 text-secondary font-semibold hover:gap-4 transition-all"
              >
                Read Full Message <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our School Community?
            </h2>
            <p className="text-xl mb-8 text-yellow-100">
              Enroll your child today and give them the foundation for a bright future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/high-school/admissions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Apply for Admission <ArrowRight size={20} />
              </Link>
              <Link
                to="/high-school/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-secondary transition-all"
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

export default HighSchoolHome;
